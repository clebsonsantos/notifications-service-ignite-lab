import { Module } from '@nestjs/common';
import { HttpModule } from '@infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';
import { ConfigModule } from '@nestjs/config';

import configuration from '@main/config/env';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    MessagingModule,
    ConfigModule.forRoot({ load: [configuration] }),
  ],
})
export class AppModule {}
