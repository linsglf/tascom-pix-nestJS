import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  amount: number;  // Valor da transação

  @ManyToOne(() => User, (user) => user.sentTransactions)
  @JoinColumn({ name: 'senderId' })
  sender: User;  // O usuário que fez a transação (pagador)

  @Column()
  senderId: string;  // ID do remetente (pagador)

  @Column()
  senderKey: string;  // Chave Pix do remetente

  @ManyToOne(() => User, (user) => user.receivedTransactions)
  @JoinColumn({ name: 'receiverId' })
  receiver: User;  // O usuário que recebeu a transação

  @Column()
  receiverId: string;  // ID do destinatário (recebedor)

  @Column()
  receiverKey: string;  // Chave Pix do destinatário

  @Column({ type: 'enum', enum: ['DEBIT', 'CREDIT'] })
  transactionType: 'DEBIT' | 'CREDIT';  // Tipo de transação: Débito ou Crédito

  @Column()
  timestamp: Date;  // Data e hora da transação
}
