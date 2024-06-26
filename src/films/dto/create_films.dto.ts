import {
  ArrayUnique,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { IsDateFormat } from './../../validators/isDateFormat';
import { ApiProperty } from '@nestjs/swagger';
console.log('CreateFilmsDto');

export class CreateFilmsDto {
  @IsString({ message: 'title must be a string and title is required' })
  @ApiProperty({ example: 'It is world!' })
  readonly title: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 8 })
  readonly episode_id: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'This is a period of quiet life. Fantastic...' })
  readonly opening_crawl: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Stive Adge' })
  readonly director: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Piter Pen' })
  readonly producer: string;

  @IsOptional()
  @IsString()
  @IsDateFormat()
  @ApiProperty({ example: '1999-02-02' })
  readonly release_date: string;

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsUrl({}, { each: true })
  @ApiProperty({
    example: [
      'https://swapi.py4e.com/api/people/1/',
      'https://swapi.py4e.com/api/people/2/',
    ],
  })
  readonly characters: string[];

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsUrl({}, { each: true })
  @ApiProperty({
    example: [
      'https://swapi.py4e.com/api/planets/1/',
      'https://swapi.py4e.com/api/planets/2/',
    ],
  })
  readonly planets: string[];

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsUrl({}, { each: true })
  @ApiProperty({
    example: [
      'https://swapi.py4e.com/api/starships/2/',
      'https://swapi.py4e.com/api/starships/3/',
    ],
  })
  readonly starships: string[];

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsUrl({}, { each: true })
  @ApiProperty({
    example: [
      'https://swapi.py4e.com/api/vehicles/4/',
      'https://swapi.py4e.com/api/vehicles/6/',
    ],
  })
  readonly vehicles: string[];

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsUrl({}, { each: true })
  @ApiProperty({
    example: [
      'https://swapi.py4e.com/api/species/1/',
      'https://swapi.py4e.com/api/species/2/',
    ],
  })
  readonly species: string[];

  @IsOptional()
  @IsUrl()
  @ApiProperty({ example: 'https://swapi.py4e.com/api/films/100/' })
  readonly url: string;
}
