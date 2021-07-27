import { getRepository } from "typeorm";
import User from "../../users/models/User";
import Product from '../../products/models/Product'
import Cart from "../models/cart";

class CartRepository {

    private static instance: CartRepository;

    constructor() { }

    static getInstance(): CartRepository {
        if (!CartRepository.instance) {
            CartRepository.instance = new CartRepository();
        }
        return CartRepository.instance;
    }

    createCart = async (newCart: Cart): Promise<Cart> => {
        const cartRepository = getRepository(Cart);
        const cart = new Cart();
        return cartRepository.save({
            ...cart,
            ...newCart,
        });
    };

    findUserCart = async (user: User): Promise<Cart | null> => {
        const cartRepository = getRepository(Cart);
        const cart = await cartRepository.findOne({ user });
        if (!cart) return null;
        return cart;
    }

    addProductToCart = async (product: Product, cart: Cart): Promise<Cart | null> => {
        const cartRepository = getRepository(Cart);
        cart.products = [...cart.products!, product]

        console.log('cart ', cart)
        return cartRepository.save({
            ...cart,
        });
    }
}

export { CartRepository }