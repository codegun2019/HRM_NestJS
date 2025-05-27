import { PartialType } from '@nestjs/swagger';
import { CreateEventAttendeeDto } from './create-event-attendee.dto';

export class UpdateEventAttendeeDto extends PartialType(CreateEventAttendeeDto) {}
