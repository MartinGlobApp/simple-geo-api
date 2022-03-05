import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {

  constructor(private readonly reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const ctx = GqlExecutionContext.create(context)


    const user = ctx.getContext().req.user

    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const hasRole = () => user.roles.some(role => !!roles.find(item => item === role))

    return user && user.roles && hasRole();
  }
}
