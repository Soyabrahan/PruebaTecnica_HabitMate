import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tracking } from '../entities/tracking.entity';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { UpdateTrackingDto } from './dto/update-tracking.dto';
import { Habit } from '../entities/habit.entity';

@Injectable()
export class TrackingService {
  constructor(
    @InjectRepository(Tracking)
    private trackingRepository: Repository<Tracking>,
    @InjectRepository(Habit)
    private habitRepository: Repository<Habit>,
  ) {}

  async create(createTrackingDto: CreateTrackingDto): Promise<Tracking> {
    const newTracking = this.trackingRepository.create(createTrackingDto);
    return this.trackingRepository.save(newTracking);
  }

  async findOne(id: number): Promise<Tracking> {
    const tracking = await this.trackingRepository.findOne({
      where: { id },
    });
    if (!tracking) {
      throw new NotFoundException(`Tracking record with ID "${id}" not found`);
    }
    return tracking;
  }

  async update(
    id: number,
    updateTrackingDto: UpdateTrackingDto,
  ): Promise<Tracking> {
    const tracking = await this.findOne(id);
    this.trackingRepository.merge(tracking, updateTrackingDto);
    return this.trackingRepository.save(tracking);
  }

  async remove(id: number): Promise<void> {
    const result = await this.trackingRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Tracking record with ID "${id}" not found`);
    }
  }

  async getWeeklyProgress(userId: number, week: string) {
    // week format: YYYY-WW (e.g., 2023-40)
    const [yearStr, weekStr] = week.split('-');
    const year = parseInt(yearStr);
    const weekNumber = parseInt(weekStr);

    // Calculate start and end dates of the week
    const simpleDate = new Date(year, 0, 1 + (weekNumber - 1) * 7);
    const dayOfWeek = simpleDate.getDay();
    const startDate = new Date(
      simpleDate.getFullYear(),
      simpleDate.getMonth(),
      simpleDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1),
    );
    const endDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + 6,
    );

    const habits = await this.habitRepository.find({
      where: { userId },
      relations: ['trackings'],
    });

    const habitsWithProgress = habits.map((habit) => {
      const weeklyTrackings = habit.trackings.filter((tracking) => {
        const trackingDate = new Date(tracking.date);
        return trackingDate >= startDate && trackingDate <= endDate;
      });

      const progress: Record<string, boolean> = {};
      for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        const formattedDate = date.toISOString().split('T')[0];
        progress[formattedDate] = weeklyTrackings.some(
          (wt) =>
            wt.date.toISOString().split('T')[0] === formattedDate &&
            wt.isCompleted,
        );
      }

      return { ...habit, progress };
    });

    return habitsWithProgress;
  }
}
