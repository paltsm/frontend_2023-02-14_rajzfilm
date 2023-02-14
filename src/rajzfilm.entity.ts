import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Rajzfilm{
	@PrimaryGeneratedColumn()
	id:number;

	@Column()
	nev:string;

	@Column()
	megjelenes:number;
}