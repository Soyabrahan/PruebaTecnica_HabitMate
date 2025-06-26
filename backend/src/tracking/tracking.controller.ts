import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { TrackingService } from './tracking.service';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { UpdateTrackingDto } from './dto/update-tracking.dto';
import { GetWeeklyProgressDto } from './dto/get-weekly-progress.dto';

@Controller('seguimiento')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post()
  create(@Body() createTrackingDto: CreateTrackingDto) {
    return this.trackingService.create(createTrackingDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.trackingService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTrackingDto: UpdateTrackingDto,
  ) {
    return this.trackingService.update(id, updateTrackingDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.trackingService.remove(id);
  }

  @Delete()
  removeByHabitAndDate(
    @Query('habitId', ParseIntPipe) habitId: number,
    @Query('date') date: string,
  ) {
    return this.trackingService.removeByHabitAndDate(habitId, date);
  }

  @Get('weekly-progress/:semana')
  getWeeklyProgress(@Param('semana') semana: string) {
    console.log(
      `Backend Controller: Recibida solicitud para progreso semanal. Semana: ${semana} (Tipo: ${typeof semana})`,
    );
    return this.trackingService.getWeeklyProgress(semana);
  }
}
