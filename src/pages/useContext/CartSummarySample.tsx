import React, { useContext } from 'react'
import { CartContext, CartContextType, CartItem } from './CartStore'

function CartSummarySample() {

    // bu component'den globaş state bağlandık
    const {cart,removeFromCart} =  useContext(CartContext) as CartContextType;

    const onDelete = (id:number) => {
        const result = window.confirm('ürün sepetten çıkarılacaktır');

        if(result) {
            removeFromCart(id);
        }
       
    }

  return (
    <>
    <ul>
       {cart.items.map((item:CartItem, index:number) => {
        return <li key={item.productId}>{item.name} adet: {item.quantity}
        <button onClick={() => onDelete(item.productId)}>Sil</button>
        </li>
       })}
    </ul>
    <div>
        Toplam Tutar: {cart.total}
    </div>
    </>
  )
}

export default CartSummarySample