import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lead } from './schemas/lead.schema'
import { Model } from 'mongoose';

@Injectable()
export class LeadsService {

  constructor(@InjectModel(Lead.name) private leadModel: Model<Lead>) {}

  async create(createLeadDto: CreateLeadDto) {
    const newLead = new this.leadModel(createLeadDto);
    await newLead.save();
    return newLead;
  }

  findAll() {
    return "Listando";
  }

  findOne(id: number) {
    return `This action returns a #${id} lead`;
  }

  update(id: number, updateLeadDto: UpdateLeadDto) {
    return `This action updates a #${id} lead`;
  }

  remove(id: number) {
    return `This action removes a #${id} lead`;
  }
}
