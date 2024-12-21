export class CreateTransactionDto {
    senderId: number;
    receiverId: number;
    amount: number;
    senderKey: string;
    receiverKey: string;
    transactionType: 'DEBIT' | 'CREDIT';  // Débito ou Crédito
  }
  