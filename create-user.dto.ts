import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(
    { INTERN: 'INTERN', ENGINEER: 'ENGINEER', ADMIN: 'ADMIN' },
    {
      message: 'valid role required',
    },
  )
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
