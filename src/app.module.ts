import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { KeyModule } from './key/key.module';
import { TransactionModule } from './transaction/transaction.module';
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [UserModule, KeyModule, TransactionModule, BalanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
