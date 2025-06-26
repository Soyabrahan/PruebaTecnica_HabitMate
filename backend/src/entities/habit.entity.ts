import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tracking } from './tracking.entity';

@Entity()
export class Habit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Tracking, (tracking) => tracking.habit)
  trackings: Tracking[];
}
