import { ApiProperty } from '@nestjs/swagger';

export class UserProxy {
  constructor(id: number, name: string, age: number, isGraduated: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isGraduated = isGraduated;
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  isGraduated: boolean;
}
