import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { catchError, firstValueFrom } from 'rxjs';
import { UpdateDiagnosisDto } from '../dto/update-diagnosis.dto';
import { CreateDiagnosesDto } from '../dto/create-diagnoses.dto';

@Controller('diagnoses')
export class DiagnosesController {
  constructor(
    @Inject('DIAGNOSES_SERVICE') private readonly diagnosesClient: ClientProxy,
  ) {}
  @Get('findAll')
  findAllDiagnoses(@Query() paginationDto: PaginationDto) {
    return this.diagnosesClient.send('find_all_diagnoses', paginationDto);
  }
  @Get('findOne')
  findOneDiagnosis(@Query('id') id: string) {
    try {
      return this.diagnosesClient.send('find_one_diagnosis', id);
    } catch (error) {
      throw new RpcException(error);
    }
  }
  @Post('create')
  createDiagnosis(@Body() diagnosisData: CreateDiagnosesDto) {
    try {
      return this.diagnosesClient.send('create_diagnosis', diagnosisData);
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch('patch/:id')
  async updateDiagnosis(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDiagnosisDto: UpdateDiagnosisDto,
  ) {
    try {
      const diagnosis = await firstValueFrom(
        this.diagnosesClient.send('update_diagnosis', {
          id,
          ...updateDiagnosisDto,
        }),
      );
      return diagnosis;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Delete('delete/:id')
  removeDiagnosis(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) {
      throw new RpcException('id is required');
    }

    // console.log('Deleting diagnosis with ID:', id);

    return this.diagnosesClient.send('delete_diagnosis', { id }).pipe(
      catchError((err) => {
        console.error('Error from microservice:', err);
        const errorMessage =
          typeof err === 'object' && err.message
            ? err.message
            : 'Unexpected error occurred';
        throw new RpcException({
          status: 400,
          message: errorMessage,
        });
      }),
    );
  }
}
