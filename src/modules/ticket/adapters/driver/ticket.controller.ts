import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketCommand } from '../model/ticket.dto';
import { Ticket } from '../../domain/model/ticket.entity';
import { TicketService } from '../../domain/ports/input/ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Get()
  findAll(): Ticket[] {
    return this.ticketService.findAll();
  }

  @Post()
  create(@Body() ticketCommand: TicketCommand): any {
    const ticker = this.ticketService.create(
      ticketCommand.description,
      ticketCommand.priority,
    );
    return { ...ticker };
  }
}