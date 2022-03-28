import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * A list of user's roles
   * @example ['admin']
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
