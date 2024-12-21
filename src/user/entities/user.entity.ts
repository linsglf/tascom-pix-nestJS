import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Key } from 'src/key/entities/key.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('decimal', { default: 0 })
  balance: number;

  @OneToMany(() => Key, (key) => key.user)
  keys: Key[];

  @OneToMany(() => Transaction, (transaction) => transaction.sender || transaction.receiver)
  transactions: Transaction[];
}
