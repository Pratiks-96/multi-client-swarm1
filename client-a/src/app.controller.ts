import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return 'Client A Root!';
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }
}
