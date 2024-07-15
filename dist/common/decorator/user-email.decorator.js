"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEmail = void 0;
const common_1 = require("@nestjs/common");
exports.userEmail = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    console.log("request");
    console.log(request.user);
    return request.user.email;
});
//# sourceMappingURL=user-email.decorator.js.map