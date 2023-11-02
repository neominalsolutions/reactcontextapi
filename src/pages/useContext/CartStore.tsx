import React, { createContext, useState } from "react";

// Cart State bilgilerini tuttuğumuz dosya Cart Store dosyamız
// CartContext useContext ile react Componentlerinden CartState eriğmemizi sağlayan hook
// CartProvider ise bu Cart state erişecek olan componentleri sarmalladığımız bir Component. Index sayfasında yaptık.

export interface CartItem  {
    productId:number;
    quantity:number;
    unitPrice:number;
    name:string;
}

export interface Cart {
    items:CartItem[];
    total:number;
}

export type CartContextType  = { // context ait action ve state burada tanımlıyoruz
  cart:Cart; // sepetteki ürünlerin tutulduğu nesne
  removeFromCart(productId:number):void; // sepet işlemleri actions
  addToCart(item:CartItem):void;
  loadFromApi(items:CartItem[]):void;
}

export const CartContext = createContext<CartContextType | null>(null);


// reducer gibi cartContext'e değerlerimizi ekleyeceğimiz bir yapı fonksiyon

const CartProvider = ({children}:any) => {

    const initialCartState:Cart = {items:[],total:0};

    const [cart,setCart] = useState<Cart>(initialCartState);

    // action
    const  addToCart = (item:CartItem) => {
        // push alogoritması
        cart.items = [...cart.items, item];

        let sum = 0;

        cart.items.forEach((item:CartItem) => {
            sum += (item.quantity * item.unitPrice);
        });

        cart.total = sum;

        // state güncellemesi yap.
        setCart({...cart});
    }

    // action
    // idisine göre bir ürün çıkardık
    const removeFromCart = (productId:number) => {

      const filteredItems =  cart.items.filter(x=> x.productId !== productId);
      console.log('filteredItems',filteredItems);
      cart.items = [...filteredItems];

        let sum = 0;

        cart.items.forEach((item:CartItem) => {
            sum += (item.quantity * item.unitPrice);
        });

        cart.total = sum;


      setCart({...cart});

    }

    const loadFromApi = (items:CartItem[]) => {
      cart.items = [...items];
    }


    return (<CartContext.Provider value={{cart,addToCart,removeFromCart,loadFromApi}}>{children}</CartContext.Provider>)

}

export default CartProvider;

{/* // children    <CartSummary></CartSummary> <ProductList></Product>
// <CartProvider>
//     <CartSummary></CartSummary>
//     <ProductList></Product>
// </CartProvider> */}
