import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { gameMode } from "../constants/game.mode.enum";
@Entity()
export class GameRecord extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
	//@ManyToOne(() =>User, () => User)
	@ManyToOne(() => User, (user) => user.id) // id로 바꿔야함
	left_user: number;

    @ManyToOne(() => User, (user) => user.id) // id로 바꿔야함
    right_user: number;
 
	@Column()
	left_user_score: number;
	
	@Column()
	right_user_score: number;
	
	@Column()
	result: number; //left_win: 1, right_win: 2

    @Column()
    type: gameMode;

    // @Column()
    // mode: string;
    
    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;

}