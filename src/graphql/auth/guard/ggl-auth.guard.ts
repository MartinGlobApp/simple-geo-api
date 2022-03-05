import { ExecutionContext, Injectable } from "@nestjs/common"
import { GqlExecutionContext } from "@nestjs/graphql"
import { AuthGuard } from "@nestjs/passport"

@Injectable()
export class GqlAuthGuard extends AuthGuard("jwt") {
    
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        return ctx.getContext().req
    }
}

@Injectable()
export class GqlAuthGuardOptional extends AuthGuard("jwt") {
    
    handleRequest(err, user, info, context) {
        return user;
      }
    
      getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        return ctx.getContext().req
    }
}