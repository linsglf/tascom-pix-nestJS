import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto'; 
import { User } from './entities/user.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Endpoint para criar um usuário
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  // Endpoint para buscar um usuário por ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  // Endpoint para listar todos os usuários
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Endpoint para atualizar um usuário por ID
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  // Endpoint para deletar um usuário por ID
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }

  // Endpoint para listar todas as transações de um usuário
  @Get(':id/transactions')
  async findTransactions(@Param('id') id: string): Promise<Transaction[]> {
    return this.userService.findTransactions(id);
  }
}
