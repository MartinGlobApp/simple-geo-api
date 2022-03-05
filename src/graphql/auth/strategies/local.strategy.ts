import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { User } from "src/graphql/sys/user/entities/user.entity"
import { AuthService } from "../service/auth.service"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: "username"
    })
  }

  async validate(username: string, password: string): Promise<User> {

    const user = await this.authService.validateUser(username, password)
    if (!user) {
      throw new UnauthorizedException("Credenciales incorrectas")
    }

    if(!user.active){
      throw new UnauthorizedException("Usuario no activo")
    }

    return user
  }
}