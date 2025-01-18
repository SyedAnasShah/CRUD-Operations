import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from './dto/create-user.dto';

@Controller('users')
@ApiTags('users') // Swagger tag for "users"
export class UsersController {
  // GET all users
  @Get('/')
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({ status: 200, description: 'List of all users', type: [UserDto] })
  getAllUsers(): UserDto[] {
    // Example data
    return [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password123', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', password: 'password456', createdAt: new Date(), updatedAt: new Date() },
    ];
  }

  // GET a single user by ID
  @Get('/:id')
  @ApiOperation({ summary: 'Retrieve a user by ID' })
  @ApiResponse({ status: 200, description: 'User data', type: UserDto })
  @ApiResponse({ status: 404, description: 'User not found' })
  getUserById(@Param('id') id: number): UserDto {
    // Example data
    return { id, name: 'John Doe', email: 'john.doe@example.com', password: 'password123', createdAt: new Date(), updatedAt: new Date() };
  }

  // POST create a new user
  @Post('/')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully', type: UserDto })
  createUser(@Body() user: UserDto): UserDto {
    // Example data (simulating user creation)
    return { ...user, id: 3, createdAt: new Date(), updatedAt: new Date() };
  }
}
