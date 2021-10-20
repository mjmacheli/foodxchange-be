import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity({ name: "topic" })
  class Topic {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    title!: string;
  
    @Column()
    username!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }
  
  export default Topic;
  