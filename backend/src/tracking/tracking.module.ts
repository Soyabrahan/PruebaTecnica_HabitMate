import { Module } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { TrackingController } from './tracking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tracking } from '../entities/tracking.entity';
import { HabitsModule } from '../habits/habits.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tracking]), HabitsModule],
  providers: [TrackingService],
  controllers: [TrackingController],
})
export class TrackingModule {}
