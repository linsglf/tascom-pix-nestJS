export class CreateKeyDto {
    userId: number;
    keyType: 'email' | 'cpf' | 'phone' | 'uuid';
    keyValue: string;  // O valor da chave (e-mail, CPF, telefone ou UUID)
  }
  