import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayUnique,
  IsArray,
  IsNumberString,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
console.log('CreateSpeciesDto');

export class CreateSpeciesDto {
  @IsString({ message: 'name must be a string and name is required' })
  @ApiProperty({ example: 'Tikto' })
  readonly name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'normal guys' })
  readonly classification: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'sentient' })
  readonly designation: string;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({ example: '178' })
  readonly average_height: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'white' })
  readonly skin_colors: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'black' })
  readonly hair_colors: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'brown' })
  readonly eye_colors: string;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({ example: '40' })
  readonly average_lifespan: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({ example: 'https://swapi.py4e.com/api/planets/1/' })
  readonly homeworld: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'JavaScript' })
  readonly language: string;

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
  readonly people: string[];

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsUrl({}, { each: true })
  @ApiProperty({
    example: [
      'https://swapi.py4e.com/api/films/1/',
      'https://swapi.py4e.com/api/films/2/',
    ],
  })
  readonly films: string[];

  @IsOptional()
  @IsUrl()
  @ApiProperty({ example: 'https://swapi.py4e.com/api/species/100/' })
  readonly url: string;
}
