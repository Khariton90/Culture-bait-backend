import { IsBoolean, IsEmail, IsNumber, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsPhoneNumber()
  public phoneNumber: string;

  @IsBoolean()
  public notify: boolean;

  @IsNumber()
  public code: number;
}
