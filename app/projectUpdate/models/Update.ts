import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "updates" })
class ProjectUpdate {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    farmProjectId!: number;

    @Column()
    title!: string;

    @Column()
    update!: string;

    @Column()
    img: string = "https://picsum.photos/700";

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

export default ProjectUpdate;