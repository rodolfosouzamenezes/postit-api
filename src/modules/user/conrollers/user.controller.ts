import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserProxy } from '../models/user.proxy';
import { UserPayload } from '../models/user.payload';
import { UserService } from '../services/user.service';

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
    type: UserProxy,
    description: 'Os dados a serem cadastrados no usuário',
  })
  public postUser(@Body() user: UserProxy): UserProxy {
    return this.service.postUser(user);
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Atualiza um usuário' })
  @ApiOkResponse({ type: UserProxy })
  @ApiParam({ name: 'userId', description: 'O ID do usuário' })
  @ApiBody({
    type: UserPayload,
    description: 'Os dados a serem atualizados do usuário',
  })
  public putUser(
    @Param('userId') userId: string,
    @Body() user: UserPayload,
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

  private getProxyFromPayload(
    payload: UserPayload,
    proxy: UserProxy,
  ): UserProxy {
    return new UserProxy(
      proxy.id,
      payload.name || proxy.name,
      payload.age || proxy.age,
      proxy.isGraduated,
    );
  }
}
