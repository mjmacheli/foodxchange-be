import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    names!: string;

    @Column()
    password!: string;

    @Column()
    location!: string;

    @Column()
    email!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

export default User;