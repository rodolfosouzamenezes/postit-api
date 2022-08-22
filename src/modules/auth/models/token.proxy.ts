import { ApiProperty } from '@nestjs/swagger';

export class TokenProxy {
  constructor(token: string, userId: number) {
    this.token = token;
    this.userId = userId;
  }
  @ApiProperty()
  public token: string;

  @ApiProperty()
  public userId: number;
}
