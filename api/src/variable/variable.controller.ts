import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FindService } from './services/find.service';
import { UpdateService } from './services/update.service';

import { VariableResponse } from './interfaces/variable.interface';
import { QueriesAll } from './interfaces/queries.interface';

@ApiTags('variable')
@Controller({ path: 'variable', version: '1' })
export class VariableController {
  constructor(
    private readonly findService: FindService,
    private readonly updateService: UpdateService,
  ) {}

  @Get()
  async findAll(@Query() query: QueriesAll): Promise<VariableResponse[]> {
    return await this.findService.findAll(query);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query() query,
  ): Promise<VariableResponse> {
    return await this.findService.findOne(id, query);
  }
}
