import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

interface Location {
    latitude!: string;
    longitude!: string;
};

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
    latlong!: Location;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

export default Hub;