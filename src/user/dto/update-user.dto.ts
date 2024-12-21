import { IsString, IsOptional, IsDecimal, IsUUID } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsDecimal()
  balance?: number;

  @IsOptional()
  @IsDecimal()
  dailyLimit?: number;
}
