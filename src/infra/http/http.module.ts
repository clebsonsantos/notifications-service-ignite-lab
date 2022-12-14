import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';
import { SendNotification } from 'src/application/usecases/send-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
