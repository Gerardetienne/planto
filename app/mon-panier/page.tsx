"use client"

import { NextPage } from 'next'
import CartAdvanceDistribute from '@/app/contexts/CartLocalStorage';
import { useCallback, useContext } from 'react';
import { DataPlante, DataPlanteTypes, ItemCard, LiestCard, test } from '@/app/data';
import CardCart from '@/components/Cart/CardCart';

interface Props {

}

const MonPanier: NextPage<Props> = () => {

    const authContext = useContext(CartAdvanceDistribute);
    // Déstructuration des méthodes et propriétés depuis authContext
    const AddItem = authContext?.AddItem 
    const ItemTotal = authContext?.ItemTotal 
    const cart = authContext?.cart;
    const CartProduct = cart?.products 
    const removeItem = authContext?.RemoveItem 
    const QuantityAjust = authContext?.QuantityAjuster 
    const clearCart = authContext?.ClearItem

 
       const getProductQuantity = useCallback(() => {
            if (CartProduct) {

                return CartProduct
            }
            return null;
        }, [CartProduct]);
        
        const dataInCart = getProductQuantity()

        if (!authContext) {
            return <div>Chargement...</div>;
        }

    return <div className=''>
         <section className='block w-full  lg:w-[90%] mx-auto '>
         <h1>Shopping Cart</h1>

<div className="flex ...">

    <div className="flex-none w-[70%] ... cursor-pointer text-basecolor p-8 backdrop-blur-md bg-[#ffffff10] relative rounded-[10px]  border-l-[1px] border-b-[1px] border-[#ffffff4f] border-t-0 border-r-0" >
        <div className='block space-y-6'>
            {
                 CartProduct &&  CartProduct.map((elem: test , index: number) => <CardCart items={elem} key={index} removeItem={removeItem} />)
            }
        </div>
    </div>


    <div className="flex-auto w-[30%] ...">
        02
    </div>

</div>
         </section>

    </div>

}

export default MonPanier