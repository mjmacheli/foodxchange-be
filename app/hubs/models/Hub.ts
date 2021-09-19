import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";


@Entity({ name: "hub" })
class Hub {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    hubID!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column()
    latlong!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

export default Hub;