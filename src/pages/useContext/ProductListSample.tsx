import React, { useContext } from 'react'
import { CartContext, CartContextType, CartItem } from './CartStore';

function ProductListSample() {

  const products: any[] = [
    {
      id:1,
      name:'Ürün-1',
      stock:10,
      unitPrice:135
    },
    {
      id:2,
      name:'Ürün-2',
      stock:5,
      unitPrice:100
    },
    {
      id:3,
      name:'Ürün-3',
      stock:15,
       unitPrice:250
    },
    {
      id:4,
      name:'Ürün-4',
      stock:25,
      unitPrice:400
    }
  ];

  // useContext hook ile tanımlanan bir context değerine bağlanıp global state yönetimi yapmamız sağlar.
 const {cart,addToCart} = useContext(CartContext) as CartContextType;

  const onAddToCart = (item:any) => {

    if(item.stock > 0){
      const cartItem:CartItem = {quantity:1, unitPrice:item.unitPrice, name: item.name,productId:item.id};
    addToCart(cartItem); // addToCart state function çalıştır state güncelle.
    alert('ürün sepete eklendi');
    } else {
      alert('Ürün Stokda yok');
    }
  }

  return (
    <>
    <p>Sepetteki Ürün Adet: {cart.items.length}</p>
    <h1>Ürünler</h1>
      
      {products.map((item:any, index:number) => {
        return <div key={item.id}>
          {item.name} {' '}
          <span>Stock: {item.stock}</span> {' '}
          <span>Fiyat: {item.unitPrice}</span> {' '}
          <button onClick={() => onAddToCart(item)}>Sepete EKle</button>
        </div>
      })}
    </>
  )
}

export default ProductListSample;