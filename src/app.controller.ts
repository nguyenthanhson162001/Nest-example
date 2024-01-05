import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // eslint-disable-next-line prettier/prettier

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    return this.appService.getDocs(version);
  }
}
