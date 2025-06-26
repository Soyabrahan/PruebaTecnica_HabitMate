import { IsString, Matches } from 'class-validator';

export class GetWeeklyProgressDto {
  @IsString()
  @Matches(/^\d{4}-\d{2}$/, {
    message: 'El formato de semana debe ser YYYY-WW',
  })
  semana: string;
}
