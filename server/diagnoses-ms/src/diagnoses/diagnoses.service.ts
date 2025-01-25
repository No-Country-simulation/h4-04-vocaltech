import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Diagnoses, DiagnosesDocument } from './entities/diagnoses.entity';
import { CreateDiagnosesDto } from './dto/create-diagnosis.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class DiagnosesService {
  private logger = new Logger('DiagnosesService');
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
    if (!id) {
      throw new RpcException('id is required for delete');
    }
    console.log('delete: buscando ID en la base de datos:', id);
    const result = await this.diagnosesModel.findByIdAndDelete(id).exec();
    console.log('delete: resultado de la consulta:', result);
    return result;
  }

  async findAll(): Promise<DiagnosesDocument[]> {
    return this.diagnosesModel.find();
  }

  async findOne(id: string): Promise<DiagnosesDocument> {
    if (!id) {
      throw new RpcException('id is required for findOne');
    }
    console.log('findOne: buscando ID en la base de datos:', id);
    const result = await this.diagnosesModel.findById(id).exec();
    console.log('findOne: resultado de la consulta:', result);
    return result;
  }
}
