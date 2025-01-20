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
    return this.leadModel.find();
  }

  findOne(id: string) {
    return this.leadModel.findById(id);
  }

  update(id: string, updateLeadDto: UpdateLeadDto) {
    return this.leadModel.findByIdAndUpdate(id, updateLeadDto);
  }

  remove(id: string) {
    return this.leadModel.findByIdAndDelete(id);
  }
}
