import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayUnique,
  IsArray,
  IsNumberString,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
console.log('CreatePeopleDto');

export class CreatePeopleDto {
  @IsString({ message: 'name must be a string and name is required' })
  @ApiProperty({ example: 'Ben' })
  name: string;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({ example: '182' })
  readonly height: string;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({ example: '74' })
  readonly mass: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'black' })
  readonly hair_color: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'yellow' })
  readonly skin_color: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'green' })
  readonly eye_color: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '18.23.2008' })
  readonly birth_year: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'female' })
  readonly gender: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({ example: 'https://swapi.py4e.com/api/planets/1/' })
  readonly homeworld: string;

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
      'https://swapi.py4e.com/api/starships/2/',
      'https://swapi.py4e.com/api/starships/3/',
    ],
  })
  readonly starships: string[];

  @IsOptional()
  @IsUrl()
  @ApiProperty({ example: 'https://swapi.py4e.com/api/people/100/' })
  readonly url: string;
}
