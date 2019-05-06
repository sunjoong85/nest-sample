import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MyUser {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ length: 50, unique: true })
    email: string; 
}
