import { UseGuards } from "@nestjs/common"
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql"
import { User } from "src/graphql/sys/user/entities/user.entity"
import { CurrentUser } from "../decorator/user.decorator"
import { GqlAuthGuard } from "../guard/ggl-auth.guard"
import { AuthService } from "../service/auth.service"
import { LocalStrategy } from "../strategies/local.strategy"
import { LoginDto } from "./dto/auth.dto"
import { LoginSuccessResponse } from "./dto/auth.type"

@Resolver()
export class AuthResolver {

  constructor(
    private readonly authService: AuthService
  ) {}

  @Mutation(() => LoginSuccessResponse)
  @UseGuards(LocalStrategy)
  async login(@Args('data') data: LoginDto): Promise<LoginSuccessResponse> {
    return await this.authService.signIn(data)
  }

  @Query(() => User, { name: `me`, nullable: undefined })
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() user: User): Promise<User> {
    return await this.authService.getCurrentUser(user);
  }
}