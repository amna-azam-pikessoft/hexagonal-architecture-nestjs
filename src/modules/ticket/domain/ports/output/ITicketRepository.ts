import { Ticket } from '../../model/ticket.entity';

export interface ITicketRepository {
  create(ticket: Ticket): Ticket;
  findAll(): Ticket[];
}

export const ITicketRepository = Symbol('ITicketRepository');
