import { IsBoolean, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTrackingDto {
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsBoolean()
  @IsNotEmpty()
  isCompleted: boolean;

  @IsNumber()
  @IsNotEmpty()
  habitId: number;
}
