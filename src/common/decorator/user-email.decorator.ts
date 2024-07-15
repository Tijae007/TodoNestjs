import { ExecutionContext, createParamDecorator } from "@nestjs/common";


export const userEmail = createParamDecorator(
    (data:unknown, ctx: ExecutionContext)=>{
        const request = ctx.switchToHttp().getRequest();
        console.log("request")
        console.log(request.user)
        return request.user.email;
    }
)