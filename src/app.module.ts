import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './modules/ticket/ticket.module';

@Module({
  imports: [TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
