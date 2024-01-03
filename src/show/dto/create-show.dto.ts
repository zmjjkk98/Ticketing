import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Category } from "../entities/showCategoryTypes";

export class CreateShowDto {
  @IsString()
  @IsNotEmpty({ message: "공연 제목을 입력해주세요"})
  readonly title: string;

  @IsString()
  @IsNotEmpty({message: "공연 내용을 입력해주세요"})
  readonly content: string;

  @IsString()
  @IsNotEmpty({message: '공연 장소를 입력해주세요'})
  readonly place: string;

  @IsString()
  @IsNotEmpty({message: '공연 포스터를 등록해주세요'})
  readonly img: string

  @IsEnum(Category)
  readonly category:Category  

}