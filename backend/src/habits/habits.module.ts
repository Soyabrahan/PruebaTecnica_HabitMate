import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsController } from './habits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habit } from '../entities/habit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habit])],
  providers: [HabitsService],
  controllers: [HabitsController],
})
export class HabitsModule {}
