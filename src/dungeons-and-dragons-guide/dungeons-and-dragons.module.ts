import { Module } from '@nestjs/common';
import DungeonsAndDragonsController from './infra/api/controller/dungeons-and-dragons-guide.controller';

@Module({
  controllers: [DungeonsAndDragonsController],
})
export class DungeonsAndDragonsGuideModule {}
