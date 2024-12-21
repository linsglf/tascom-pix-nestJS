import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Key {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  keyType: string;  // tipo da chave (CPF, EMAIL, etc.)

  @Column()
  keyValue: string; // valor da chave (valor real, como email ou CPF)

  @ManyToOne(() => User, (user) => user.keys)
  user: User;  // Relacionamento com o usuário

  @Column()
  userId: string; // ID do usuário associado à chave
}
