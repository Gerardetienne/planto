"use client"

import CartAdvanceDistribute from '@/app/contexts/CartLocalStorage';
import React from 'react';
import { useContext } from 'react';


type Product = { id: number; name: string; price: number, quantity: number };

const products: Product[] = [
    { id: 1, name: 'Item A', price: 10, quantity: 1 },
    { id: 2, name: 'Item B', price: 15,  quantity: 1  },
    { id: 3, name: 'Item C', price: 20,  quantity: 1  },
  ];


  const ProductTest: React.FC = () => {

  const authContext = useContext(CartAdvanceDistribute)
  if (!authContext) {
    return <div>Chargement...</div>;
  }
 const { AddItem,ItemTotal,PriceTotal, QuantityAjuster ,RemoveItem,ClearItem , cart} = authContext;


    return (
      <div className='flex flex-col items-center my-52 gap-6 '>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}{' '}
              <button onClick={() => AddItem(product,product.price)} >AddItem to Cart</button>
            </li>
          ))}
        </ul>
  
        <h2>Shopping Cart</h2>
        <h2>Nombre total de produit ajouter : {ItemTotal()}</h2>
        {
          ItemTotal() && <p>Total Price: ${PriceTotal()}</p>
        }
        <ul>
          {cart?.products?.map((product:any) => (
            <li key={product.id}>
               {product.name} - ${product.price}{' '} - {"Quantity : "}{<QuantityAjuster product={product} key={product.id} />}{' => '}
  
              <button onClick={() =>  RemoveItem(product.id)}>Remove</button>
  
            </li>
          ))}
        </ul>
  
        {
          ItemTotal() && <button onClick={() => ClearItem() }>Clear Cart</button>
        }
        
      </div>
    );
  };
  
  export default ProductTest