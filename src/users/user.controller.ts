import { Controller, Post } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UsersService){};

    @Post()
    testSave():string{
        this.userService.saveTest();
        return "success...";
  }
}
