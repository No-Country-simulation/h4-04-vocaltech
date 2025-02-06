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
import { ClientProxy, Payload, RpcException } from '@nestjs/microservices';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { catchError, firstValueFrom } from 'rxjs';
import { UpdateDiagnosisDto } from '../dto/update-diagnosis.dto';
import { CreateDiagnosesDto } from '../dto/create-diagnoses.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Diagnoses')
@Controller('diagnoses')
export class DiagnosesController {
  constructor(
    @Inject('DIAGNOSES_SERVICE') private readonly diagnosesClient: ClientProxy,
  ) {}

  @ApiOperation({ summary: 'Get all diagnoses' })
  @ApiResponse({ status: 200, description: 'Returns all diagnoses' })
  @Get('findAll')
  findAllDiagnoses(@Query() paginationDto: PaginationDto) {
    return this.diagnosesClient.send('find_all_diagnoses', paginationDto);
  }

  @ApiOperation({ summary: 'Get one diagnosis' })
  @ApiResponse({ status: 200, description: 'Returns one diagnosis' })
  @Get('findOne/:id')
  findOneDiagnosis(@Param('id') id: string) {
    console.log('ID recibido en el Gateway:', id);
    try {
      if (!id) {
        throw new RpcException('id is required for findOne');
      }
      return this.diagnosesClient.send('find_one_diagnoses', { id });
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @ApiOperation({ summary: 'Creation a diagnosis' })
  @ApiResponse({ status: 201, description: 'Diagnosis created successfully' })
  @Post('create')
  createDiagnosis(@Body() diagnosisData: CreateDiagnosesDto) {
    try {
      return this.diagnosesClient.send('create_diagnosis', diagnosisData);
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @ApiOperation({ summary: 'Update a diagnosis' })
  @ApiResponse({ status: 200, description: 'Update one diagnosis' })
  @Patch('patch/:id')
  async updateDiagnosis(
    @Param('id') id: string,
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

  @ApiOperation({ summary: 'Delete a diagnosis' })
  @ApiResponse({ status: 200, description: 'Deleted diagnosis successfully' })
  @Delete('delete/:id')
  removeDiagnosis(@Param('id') id: string) {
    if (!id) {
      throw new RpcException('id is required');
    }

    console.log('Deleting diagnosis with ID:', id);

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
