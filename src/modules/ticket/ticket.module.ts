import { Module } from '@nestjs/common';
import { TicketController } from './adapters/driver/ticket.controller';
import { TicketService } from './domain/ports/input/ticket.service';
import { ITicketRepository } from './domain/ports/output/ITicketRepository';
import { TicketRepository } from './adapters/driven/ticket.repository';

@Module({
  imports: [],
  controllers: [TicketController],
  providers: [
    TicketService,
    {
      provide: ITicketRepository,
      useClass: TicketRepository,
    },
  ],
})
export class TicketModule {}