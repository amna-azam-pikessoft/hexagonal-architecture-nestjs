import { Injectable } from '@nestjs/common';
import { Ticket } from '../../domain/model/ticket.entity';
import { ITicketRepository } from '../../domain/ports/output/ITicketRepository';

@Injectable()
export class TicketRepository implements ITicketRepository {
  private readonly tickets: Ticket[] = [];

  create(ticket: Ticket): Ticket {
    this.tickets.push(ticket);
    return ticket;
  }

  findAll(): Ticket[] {
    return this.tickets;
  }
}