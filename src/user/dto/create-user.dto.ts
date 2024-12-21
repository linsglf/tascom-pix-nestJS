export class CreateUserDto {
    name: string;
    email: string;
    balance: number;  // Saldo inicial do usuário
    dailyLimit: number;  // Limite diário para enviar Pix
    keys: Key[];  // Chaves associadas ao usuário
  }
  