import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 1, description: 'The unique ID of the user' })
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'The full name of the user' })
  name: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email address of the user' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user (hashed in production)' })
  password: string;

}
