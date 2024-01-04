import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketDto{
  @IsString()
  @IsNotEmpty({message: '가격을 입력 해 주세요'})
  readonly price: string

}