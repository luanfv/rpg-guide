import { Controller, Get } from '@nestjs/common';

@Controller('api/d-and-d')
export default class DungeonsAndDragonsGuideController {
  @Get()
  getHello(): { message: string } {
    return { message: 'Bem-vindo(a) ao Dungeons and Dragons Guide!' };
  }
}
