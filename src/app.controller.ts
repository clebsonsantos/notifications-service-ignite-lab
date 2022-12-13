import { PrismaService } from './prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { NotificationDTO } from './notification.dto';
@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: NotificationDTO) {
    const { category, content, recipientId } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
