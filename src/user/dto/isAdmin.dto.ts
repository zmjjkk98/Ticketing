import { PickType } from "@nestjs/mapped-types";
import { User } from "../entities/user.entity";

export class IsAdminDto extends PickType(User, [
  'is_admin'  
]as const) {}