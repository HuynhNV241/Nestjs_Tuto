import { IsMongoId, IsOptional, IsString } from "class-validator";

export class UpdateUserDto{
  @IsMongoId()  
  _id: string;

  @IsOptional()
  @IsString()
  name: string;
  
  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  image: string;
}
