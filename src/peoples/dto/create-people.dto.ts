import { IsEmail } from 'class-validator';

export class CreatePeopleDto {
  @IsEmail()
  email!: string;
}
