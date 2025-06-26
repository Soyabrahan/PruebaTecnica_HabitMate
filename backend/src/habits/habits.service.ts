import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habit } from '../entities/habit.entity';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitsService {
  constructor(
    @InjectRepository(Habit)
    private habitsRepository: Repository<Habit>,
  ) {}

  async create(createHabitDto: CreateHabitDto): Promise<Habit> {
    const newHabit = this.habitsRepository.create(createHabitDto);
    return this.habitsRepository.save(newHabit);
  }

  async findAll(): Promise<Habit[]> {
    return this.habitsRepository.find();
  }

  async findOne(id: number): Promise<Habit> {
    const habit = await this.habitsRepository.findOne({
      where: { id },
    });
    if (!habit) {
      throw new NotFoundException(`Habit with ID "${id}" not found`);
    }
    return habit;
  }

  async update(id: number, updateHabitDto: UpdateHabitDto): Promise<Habit> {
    const habit = await this.findOne(id);
    this.habitsRepository.merge(habit, updateHabitDto);
    return this.habitsRepository.save(habit);
  }

  async remove(id: number): Promise<void> {
    const result = await this.habitsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Habit with ID "${id}" not found`);
    }
  }
}
