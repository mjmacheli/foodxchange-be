import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "farm-project" })
class FarmProject {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    farmId!: number;

    @Column()
    title!: string;

    @Column()
    subtitle!: string;

    @Column()
    mainTitle!: string;

    @Column()
    excerpt!: string;

    @Column()
    img!: string;

    @Column()
    body!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

export default FarmProject;