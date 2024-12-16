"use client"
import React, { createContext,useReducer } from 'react';
import {Input} from "@nextui-org/react";

type CartType = {
    QuantityAjuster: any ;
    // AddItem: (product: any, price?: number) => void;
    // RemoveItem: (id: number) => void;
    // ClearItem: () => void;
    // PriceTotal: () => void;
    // ItemTotal: () => void;
    AddItem: any;
    RemoveItem: any;
    ClearItem: any;
    PriceTotal: any;
    ItemTotal: any;
    cart:any
  };
    // create le context
const CartAdvanceDistribute = createContext<CartType | undefined>(undefined);

 interface Product {
    id: number;
    image_featured: string;
    rating: number;
    instock: boolean;
    nom: string;
    variete: string;
    variation: string;
    lieux_de_cultivation: string;
    type: string;
    famille: string;
    nom_scientifique: string;
    nomenclature: string[];
    categorie: string;
    baseUrl: string;
    image: string[];
    price: number;
    description: string;
    quantity:number;
  }


  export const CartProviderShipping = ({ children }:any) => {

    // type Product = { 
    //   id: number;
    //    name: string;
    //     price: number;
    //     quantity: number;
    //   };

    
    type CartState = {
        products: Product[];
        totalPrice: number;
        totalItem: number;
      };
    
      const initialState: CartState = {
        products: [],
        totalPrice: 0,
        totalItem: 0
      };
    
    type CartAction =
      | { type: 'AddItem'; product: Product ; price: number}
      | { type: 'UpdateQuantity'; id: number, quantity: number }
      | { type: 'Remove'; id: number }
      | { type: 'Clear' };
    
    
      const cartReducer = (state: CartState, action: CartAction): CartState => {
        let existingProduct: Product | undefined;
        let removedProduct: Product | undefined;
      
        switch (action.type) {
    
          case "AddItem":
            // Check if the product already exists in the cart
            existingProduct = state?.products?.find(
              (product) => product.id === action.product.id
            );
      
            if (existingProduct) {
              return {
                ...state,
                products: state.products.map((product) =>
                  product.id === action.product.id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                ),
                totalPrice: state.totalPrice + action.product.price,
              };
            } else {
    
              return {
                ...state,
                products: [...state.products, { ...action.product }],
                totalPrice: state.totalPrice + action.product.price,
    
                totalItem: state.totalItem + 1,
              };
            }
      
          case "UpdateQuantity":
            console.log(action.quantity);
            return {
              ...state,
              products: state.products.map((product) =>
                product.id === action.id
                  ? { ...product, quantity: action.quantity }
                  : product
              ),
      
              totalPrice: state.products.reduce((total, product) => {
                if (product.id === action.id) {
                  return total + action.quantity * product.price; // Mettez à jour le prix total en fonction de la nouvelle quantité
                }
                return total + product.quantity * product.price;
              }, 0),
            };
      
          case "Remove":
            removedProduct = state?.products?.find(
              (product) => product?.id === action?.id
            );
            if (removedProduct) {
              return {
                // copie satate avant de muter les valeurs
                ...state,
                // 
                products: state?.products.filter(
                  (product) => product?.id !== action?.id
                ),
                totalPrice:
                  state.totalPrice - removedProduct?.price * removedProduct?.quantity,
                totalItem: state.totalItem--,
              };
            } else {
              return state;
            }
      
          case "Clear":
            console.log(action.type)
    
            return {
              products: [],
              totalPrice: 0,
              totalItem: 0,
            };
    
          default:
            return state;
        }
      };
      

  const [cart, dispatch] = useReducer(cartReducer,
    initialState
  , (initial) => {
    if (typeof window !== "undefined") {
        const cartItems = localStorage.getItem('cart');
        return cartItems ? JSON.parse(cartItems) : initial;
    }

  });

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  /**
   * 
   * @param {product[]} product
   * @returns 
   */
  const QuantityAjuster = ({product}:any) => {
    return <Input
    min="1" max="10"
    label="Quantity"
    size='sm'
    variant='underlined'
    labelPlacement="outside"
    className='bg-[#ffffff10] text-white'
    placeholder="0.00"
    value={product.quantity} onChange={ (e) => dispatch({ type: 'UpdateQuantity', id: product.id ,quantity: parseInt(e.target.value) })}
    startContent={
      <div className="pointer-events-none flex items-center">
        <span className="text-default-400 text-small">$</span>
      </div>
    }
    type="number"
  />

   //<input min="1" max="10" type='number' value={product.quantity} onChange={ (e) => dispatch({ type: 'UpdateQuantity', id: product.id ,quantity: parseInt(e.target.value) })} />
  }

  /**
   * 
   * @param {product[]} product
   * @param {number} price
   */
  const AddItem = (product:any, price:number = 1) => {
   dispatch({ type: 'AddItem',  product: product, price: price })
  }

   /**
   * 
   * @param {number} id
   */
  const RemoveItem = (id:number) => {
    dispatch({ type: 'Remove', id: id })
   }

   /**
   * @return
   */
   const ClearItem = () => {
    dispatch({ type: 'Clear' })
   }
   
  
   const PriceTotal = () => {
    if(cart.totalPrice >= 1 ) {
      return  cart.totalPrice
    }
   return false
   }

  
   const ItemTotal = () => {
    if(cart?.totalItem >= 1 ) {
      return cart?.totalItem
    }
    return false
    }



  return (

     <CartAdvanceDistribute.Provider value={
      {
       QuantityAjuster,
        AddItem,
         RemoveItem,
          ClearItem,
           PriceTotal,
            ItemTotal, 
            cart 
            }
            }>
      {children}
    </CartAdvanceDistribute.Provider>
    

  );
};

export default CartAdvanceDistribute;