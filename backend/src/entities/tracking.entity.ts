import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Habit } from './habit.entity';

@Entity()
export class Tracking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ default: false })
  isCompleted: boolean;

  @ManyToOne(() => Habit, (habit) => habit.trackings, { onDelete: 'CASCADE' })
  habit: Habit;

  @Column()
  habitId: number;
}
