import React, { useReducer } from 'react';


type Product = { id: number; name: string; price: number, quantity: number };


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
            ...state,
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
  

const ShoppingCart: React.FC = () => {

  const [cart, dispatch] = useReducer(cartReducer,
    initialState
  , (initial) => {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : initial;
  });

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const products: Product[] = [
    { id: 1, name: 'Item A', price: 10, quantity: 1 },
    { id: 2, name: 'Item B', price: 15,  quantity: 1  },
    { id: 3, name: 'Item C', price: 20,  quantity: 1  },
  ];


  /**
   * 
   * @param {product[]} product
   * @returns 
   */
  const QuantityAjuster = ({product}:any) => {
    return <input min="1" max="10" type='number' value={product.quantity} onChange={ (e) => dispatch({ type: 'UpdateQuantity', id: product.id ,quantity: parseInt(e.target.value) })} />
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
    if(cart.totalItem >= 1 ) {
      return cart.totalItem
    }
    return false
    }



  return (
    <div>
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
        {cart?.products?.map(product => (
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

export default ShoppingCart