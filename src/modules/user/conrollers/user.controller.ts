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
  public getUsers(): UserProxy[] {
    return this.service.getUsers();
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Obtém um usuário pela ID' })
  @ApiOkResponse({ type: UserProxy })
  @ApiParam({ name: 'userId', description: 'O ID do usuário' })
  public getOneUser(@Param('userId') userId: string): UserProxy {
    return this.service.getOneUser(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastra um usuário' })
  @ApiOkResponse({ type: UserProxy })
  @ApiBody({
    type: CreateUserPayload,
    description: 'Os dados a serem cadastrados no usuário',
  })
  public postUser(@Body() user: CreateUserPayload): UserProxy {
    return this.service.postUser(user);
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
  ): UserProxy {
    return this.service.putUser(userId, user);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Deleta um usuário' })
  @ApiOkResponse()
  @ApiParam({ name: 'userId', description: 'O ID do usuário' })
  public deleteUser(@Param('userId') userId: string): void {
    this.service.deleteUser(userId);
  }
}
