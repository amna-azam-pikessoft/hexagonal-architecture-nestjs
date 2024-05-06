import { Inject, Injectable } from '@nestjs/common';
import { ITicketService } from './ITicketService';
import { ITicketRepository } from '../output/ITicketRepository';
import { Ticket } from '../../model/ticket.entity';

@Injectable()
export class TicketService implements ITicketService {
  constructor(
    @Inject(ITicketRepository)
    private readonly tickerRepository: ITicketRepository,
  ) {}

  create(description: string, priority: number): Ticket {
    const ticket = new Ticket(description, priority);
    if (this.findActiveTickets().length >= 3) {
      throw new Error('Ticket count is more than 3');
    }
    this.tickerRepository.create(ticket);
    return ticket;
  }

  findAll(): Ticket[] {
    return this.tickerRepository.findAll();
  }

  findActiveTickets(): Ticket[] {
    return this.tickerRepository.findAll().filter((ticket) => !ticket.isClosed);
  }
}
