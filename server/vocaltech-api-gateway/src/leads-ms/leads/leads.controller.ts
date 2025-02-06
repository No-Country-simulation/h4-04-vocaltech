import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateLeadDto } from '../dto/create-lead.dto';
import { firstValueFrom } from 'rxjs';
import { UpdateLeadDto } from '../dto/update-lead.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Leads')
@Controller('leads')
export class LeadsController {
    constructor (
        @Inject('LEAD_SERVICE') private readonly leadClient: ClientProxy
    ) {}

    @ApiOperation({ summary: 'Creation a new lead' })
    @ApiResponse({ status: 201, description: 'Lead created successfully' })
    @Post('create')
    createLead(@Body() leadData: CreateLeadDto) {
        try {
            return this.leadClient.send('create_lead', leadData);
        } catch (error) {
            throw new RpcException(error);
        }
    }

    @ApiOperation({ summary: 'Get all leads' })
    @ApiResponse({ status: 200, description: 'Returns all leads' })
    @Get('findAll')
    findAllLeads() {
        const leads = this.leadClient.send('find_all_leads', {});
        return leads;
    }

    @ApiOperation({ summary: 'Get one leads' })
    @ApiResponse({ status: 200, description: 'Returns one lead' })
    @Get('findOne')
    findOneLead(@Query('id') id:string) {
        try {
            return this.leadClient.send('find_one_lead', { id });
        } catch (error) {
            throw new RpcException(error);
        }
    }

    @ApiOperation({ summary: 'Update a lead' })
    @ApiResponse({ status: 200, description: 'Update one lead' })
    @Patch('patch/:id')
    async updateLead(
        @Param('id') id: string,
        @Body() updateLeadDto: UpdateLeadDto
    ) {
        try {
            const lead = await firstValueFrom(
                this.leadClient.send('update_lead', {id, ...updateLeadDto})
            );
            return lead;
        } catch (error) {
            throw new RpcException(error);
        }
    }

    @ApiOperation({ summary: 'Delete a lead' })
    @ApiResponse({ status: 200, description: 'Deleted lead successfully' })
    @Delete('delete/:id')
    removeLead(@Param('id') id: string) {
        if (!id) {
            throw new RpcException('id is required')
        }

        return this.leadClient.send('remove_lead', {id})
    }

}
