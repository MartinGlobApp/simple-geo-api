import { Injectable, UnauthorizedException } from "@nestjs/common"
import * as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt"
import { User } from "src/graphql/sys/user/entities/user.entity"
import { UserService } from "src/graphql/sys/user/user.service"
import { RoleEnum } from '../../../core/enums/role.enum'
import { LoginDto } from "../resolver/dto/auth.dto"
import { LoginSuccessResponse } from "../resolver/dto/auth.type"

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,

  ) { }

  async signIn(user: LoginDto): Promise<LoginSuccessResponse> {

    const validateUser = await this.validateUser(user.username, user.password)

    if (!validateUser) {
      throw new UnauthorizedException("Credenciales incorrectas")
    }

    const {
      username
    } = user

    const payload = { username: username, sub: validateUser.id }

    const token = await this.jwtService.sign(payload)

    return {
      accessToken: token
    }
  }
  
  async validateUserByRol(username: string, pass: string, role: RoleEnum): Promise<User> {
    const user = await this.userService.findOneByUserName(username)


    if (!user) {
      return null
    }

    if(!user.active){
      throw new UnauthorizedException("Usuario no activo")
    }

    const roles = await user.roleUsers;
    const exists = roles.find(x => x.roleId === role);

    if(!exists){
      throw new UnauthorizedException("No tiene permisos para esta acción")
    }

    const valid = await bcrypt.compare(pass, user.password)

    if (valid) {
      return user
    }

    return null
  }

  async validateUserByRoles(username: string, pass: string, roles: number[]): Promise<User> {
    const user = await this.userService.findOneByUserName(username)


    if (!user) {
      return null
    }

    if(!user.active){
      throw new UnauthorizedException("Usuario no activo")
    }

    const roleUsers = await user.roleUsers;
    const exists = roleUsers.find(x => {

      const isValid = roles.some(y => y === x.roleId)

      return isValid
    });

    if(!exists){
      throw new UnauthorizedException("No tiene permisos para esta acción")
    }

    const valid = await bcrypt.compare(pass, user.password)

    if (valid) {
      return user
    }

    return null
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userService.findOneByUserName(username)


    if (!user) {
      return null
    }

    if(!user.active){
      throw new UnauthorizedException("Usuario no activo")
    }

    const valid = await bcrypt.compare(pass, user.password)

    if (valid) {
      return user
    }

    return null
  }

  

  async getCurrentUser(user: User): Promise<User>{
    return this.userService.findOne(user.id);
  }
}
