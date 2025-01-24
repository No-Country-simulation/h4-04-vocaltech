import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Diagnoses, DiagnosesDocument } from './entities/diagnoses.entity';
import { CreateDiagnosesDto } from './dto/create-diagnosis.dto';

@Injectable()
export class DiagnosesService {
  constructor(
    @InjectModel(Diagnoses.name)
    private diagnosesModel: Model<DiagnosesDocument>,
  ) {}

  async create(
    createDiagnosesDto: CreateDiagnosesDto,
  ): Promise<DiagnosesDocument> {
    const createdDiagnoses = new this.diagnosesModel(createDiagnosesDto);
    return createdDiagnoses.save();
  }

  async update(id: string, updateData: any): Promise<DiagnosesDocument> {
    return this.diagnosesModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id: string): Promise<DiagnosesDocument> {
    return this.diagnosesModel.findByIdAndDelete(id);
  }

  async findAll(): Promise<DiagnosesDocument[]> {
    return this.diagnosesModel.find();
  }

  async findOne(id: string): Promise<DiagnosesDocument> {
    return this.diagnosesModel.findById(id);
  }
}
