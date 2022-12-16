import env from '@main/config/env';
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: [env().kafka.brokers],
        sasl: {
          mechanism: env().kafka.mechanism as 'scram-sha-512',
          username: env().kafka.username,
          password: env().kafka.password,
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
