import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  // Endpoint para criar uma transação
  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionService.create(createTransactionDto);
  }

  // Endpoint para listar todas as transações de um usuário
  @Get(':userId')
  async findAll(@Param('userId') userId: string): Promise<Transaction[]> {
    return this.transactionService.findAll(userId);
  }
}
