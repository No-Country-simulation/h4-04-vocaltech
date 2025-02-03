import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateLeadDto } from '../dto/create-lead.dto';
import { firstValueFrom } from 'rxjs';
import { UpdateLeadDto } from '../dto/update-lead.dto';

@Controller('leads')
export class LeadsController {
    constructor (
        @Inject('LEAD_SERVICE') private readonly leadClient: ClientProxy
    ) {}

    @Post('create')
    createLead(@Body() leadData: CreateLeadDto) {
        try {
            return this.leadClient.send('create_lead', leadData);
        } catch (error) {
            throw new RpcException(error);
        }
    }

    @Get('findAll')
    findAllLeads() {
        const leads = this.leadClient.send('find_all_leads', {});
        return leads;
    }

    @Get('findOne')
    findOneLead(@Query('id') id:string) {
        try {
            return this.leadClient.send('find_one_lead', { id });
        } catch (error) {
            throw new RpcException(error);
        }
    }

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

    @Delete('delete/:id')
    removeLead(@Param('id') id: string) {
        if (!id) {
            throw new RpcException('id is required')
        }

        return this.leadClient.send('remove_lead', {id})
    }

}
