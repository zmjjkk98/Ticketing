import { PickType } from "@nestjs/mapped-types";
import { Show } from "../entities/show.entity";

export class CreateTicketDto extends PickType(Show , ['place', 'showDate']){}