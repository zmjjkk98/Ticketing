import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { isInteger } from "lodash"

export class CreateShowDateDto {
  @IsString()
  @IsNotEmpty({message: '시작일을 입력해주세요'})
  readonly openAt: string
  
  @IsString()
  @IsNotEmpty({message: '공연 종료일을 입력해주세요'})
  readonly closeAt: string

  @IsString()
  @IsNotEmpty({message: '공연시간을 입력해주세요'})
  readonly showTime: string[]
}