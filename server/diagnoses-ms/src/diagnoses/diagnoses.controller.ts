import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { DiagnosesService } from './diagnoses.service';
import { CreateDiagnosesDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
import { DiagnosesDocument } from './entities/diagnoses.entity';

@Controller('diagnoses')
export class DiagnosesController {
  constructor(private readonly diagnosesService: DiagnosesService) {}

  @MessagePattern('find_all_diagnoses')
  async findAll() {
    return this.diagnosesService.findAll();
  }

  @MessagePattern('find_one_diagnoses')
  async findOne(@Payload('id') id: string): Promise<DiagnosesDocument> {
    console.log('Microservicio recibió ID:', id);
    if (!id) {
      throw new RpcException('id is required for findOne');
    }
    console.log('findOne', id);
    return this.diagnosesService.findOne(id);
  }

  @MessagePattern('create_diagnosis')
  async create(
    @Payload() createDiagnosesDto: CreateDiagnosesDto,
  ): Promise<DiagnosesDocument> {
    return this.diagnosesService.create(createDiagnosesDto);
  }

  @MessagePattern('update_diagnosis')
  async update(
    @Payload() updateDiagnosisDto: UpdateDiagnosisDto,
  ): Promise<DiagnosesDocument> {
    const { id, ...updateData } = updateDiagnosisDto;
    if (!id) {
      throw new RpcException('id is required');
    }
    return this.diagnosesService.update(id, updateData);
  }

  @MessagePattern('delete_diagnosis')
  async remove(@Payload('id') id: string): Promise<DiagnosesDocument> {
    if (!id) {
      throw new RpcException('id is required');
    }
    return this.diagnosesService.delete(id);
  }
}
