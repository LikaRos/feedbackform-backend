import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {hash} from "bcrypt";

@Entity({name: "users"})
export class UserEntity{
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column({nullable: true})
	name: string;

   @Column()
	email: string;

   
   @Column()
	password: string;

   @Column({default: ''})
	message: string;

   @BeforeInsert()
   async hashPassword(){
      this.password = await hash(this.password, 10);

   }
}