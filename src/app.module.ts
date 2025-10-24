import { Module } from '@nestjs/common';
import { DungeonsAndDragonsGuideModule } from './dungeons-and-dragons-guide/dungeons-and-dragons.module';

@Module({
  imports: [DungeonsAndDragonsGuideModule],
})
export class AppModule {}
