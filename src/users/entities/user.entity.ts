import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GameRecord } from "src/game/entities/game.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'jiholee' })
    nickname: string;

    @OneToMany(() => GameRecord, (record) => record.left_user)
    @OneToMany(() => GameRecord, (record) => record.right_user)
    records: GameRecord[];
}