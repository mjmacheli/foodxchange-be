import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import Product from '../../products/models/Product'
import User from '../../users/models/User'

@Entity({ name: "cart" })
class Cart {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @OneToMany(() => Product, product => product.id)
    products?: Product[];
}

export default Cart