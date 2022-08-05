import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthTokenModule } from './auth-token.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtsStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  controllers: [AuthController],
  imports: [UserModule, AuthTokenModule],
  providers: [AuthService, LocalStrategy, JwtsStrategy],
  exports: [AuthService],
})
export class AuthModule {}
