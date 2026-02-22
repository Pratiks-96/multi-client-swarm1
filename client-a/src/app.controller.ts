import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Client A Root!';
  }

  @Get('health')
  health(): { status: string } {
    return { status: 'ok' };
  }
}
