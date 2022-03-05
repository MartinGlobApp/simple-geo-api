import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { InjectRepository } from "@nestjs/typeorm"
import { ExtractJwt, Strategy } from "passport-jwt"
import { User } from "../../../graphql/sys/user/entities/user.entity"
import { Repository } from "typeorm"
import { UserService } from "src/graphql/sys/user/user.service"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("JWT_SECRET"),
    })
  }

  async validate(payload: any): Promise<User | null> {

    const user = await this.userService.findOne(payload.sub)

    const userRoles = await user.roleUsers

    return Object.assign({}, user, {
      roles: userRoles.map((role) => role.id)
    })
  }
}
