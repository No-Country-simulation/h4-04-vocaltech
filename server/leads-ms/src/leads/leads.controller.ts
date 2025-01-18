import { Controller } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @MessagePattern('create_lead')
  async createLead(@Payload() createLeadDto: CreateLeadDto) {
    return this.leadsService.create(createLeadDto);
  }

  @MessagePattern('find_all_leads')
  async findAllLeads() {
    return this.leadsService.findAll();
  }

  @MessagePattern('find_one_lead')
  async findOneLead(@Payload('id') id: string) {
    return this.leadsService.findOne(id);
  }

  @MessagePattern('update_lead')
  async updateLead(@Payload() updateLeadDto: UpdateLeadDto) {
    return this.leadsService.update(updateLeadDto.id, updateLeadDto);
  }

  @MessagePattern('remove_lead')
  async removeLead(@Payload('id') id: string) {
    if (!id) {
      throw new RpcException('id is required');
    }
    return this.leadsService.remove(id);
  }
}
