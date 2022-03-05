import { forwardRef, Module } from "@nestjs/common"

import { AuthService } from "./service/auth.service"
import { AuthResolver } from "./resolver/auth.resolver"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from "@nestjs/jwt"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { LocalAuthGuard } from "./guard/auth.guard"
import { JwtStrategy } from "./strategies/jwt-auth.strategy"
import { LocalStrategy } from "./strategies/local.strategy"
import { UserModule } from "../sys/user/user.module"

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({
      defaultStrategy: "jwt"
    }),
    JwtModule.registerAsync({
      imports: [
        ConfigModule
      ],
      inject: [
        ConfigService
      ],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get("JWT_SECRET"),
          signOptions: { expiresIn: "7d" }
        }
      }
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    LocalStrategy,
    LocalAuthGuard
  ],
  exports: [
    AuthResolver,
    LocalStrategy,
    JwtStrategy,
    LocalAuthGuard
  ],
})
export class AuthModule { }
