import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserProxy } from '../models/user.proxy';
import { UpdateUserPayload } from '../models/update-user.payload';
import { UserService } from '../services/user.service';
import { CreateUserPayload } from '../models/create-user.payload';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get('/list')
  @ApiOperation({ summary: 'Obtém os dados de todos os usuários' })
  @ApiOkResponse({ type: UserProxy, isArray: true })
  public getUsers(): Promise<UserProxy[]> {
    return this.service
      .getUsers()
      .then((result) => result.map((entity) => new UserProxy(entity)));
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Obtém um usuário pela ID' })
  @ApiOkResponse({ type: UserProxy })
  @ApiParam({ name: 'userId', description: 'O ID do usuário' })
  public getOneUser(@Param('userId') userId: string): Promise<UserProxy> {
    return this.service
      .getOneUser(userId)
      .then((entity) => new UserProxy(entity));
  }

  @Post()
  @ApiOperation({ summary: 'Cadastra um usuário' })
  @ApiOkResponse({ type: UserProxy })
  @ApiBody({
    type: CreateUserPayload,
    description: 'Os dados a serem cadastrados no usuário',
  })
  public postUser(@Body() user: CreateUserPayload): Promise<UserProxy> {
    return this.service.postUser(user).then((entity) => new UserProxy(entity));
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Atualiza um usuário' })
  @ApiOkResponse({ type: UserProxy })
  @ApiParam({ name: 'userId', description: 'O ID do usuário' })
  @ApiBody({
    type: UpdateUserPayload,
    description: 'Os dados a serem atualizados do usuário',
  })
  public putUser(
    @Param('userId') userId: string,
    @Body() user: UpdateUserPayload,
  ): Promise<UserProxy> {
    return this.service
      .putUser(userId, user)
      .then((entity) => new UserProxy(entity));
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Deleta um usuário' })
  @ApiOkResponse()
  @ApiParam({ name: 'userId', description: 'O ID do usuário' })
  public deleteUser(@Param('userId') userId: string): void {
    this.service.deleteUser(userId);
  }
}
