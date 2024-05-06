import { Ticket } from '../../model/ticket.entity';

export interface ITicketService {
  create(description: string, priority: number): Ticket;
  findAll(): Ticket[];
  findActiveTickets(): Ticket[];
}
