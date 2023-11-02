
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import debounce from './Debouncing';

function DebouncingSample() {

  const [search,setSearch] = useState<string>('');
  const [products,setProducts] = useState<any[]>([]);

  const loadData = async() => {
    try {

        let searchText = search || '';

        let response = await axios.get(`https://services.odata.org/northwind/northwind.svc/Products?$filter=substringof('${searchText}',ProductName)&$format=json`);
        setProducts(response.data.value);
        console.log('data', response.data.value);
    } catch (error) {
    }
  }

  useEffect(() => {
    console.log('sayfanın ilk açılışı')
    loadData(); // bunu tekrar çekmeyeceğiz.
  }, []);

  // server side arama işlemi için yazıldı. tüm data seti çekmediğimiz durumlarda bunu kullanıcaz.
  useEffect(() => {

    // 2. bir network isteği oluşutarak server side arama işlemi yap.


      console.log('2 ve daha sonraki aramalar')
      loadData();
    

  }, [search])

    let filteredResult:any[] = [];
  
  if(products !== undefined) {
    filteredResult = products.filter(x=> new RegExp(search,'i').test(x.ProductName));
  }

  // filteredResult arama sonrası sonuçtan dönen  result

  // debouncing yapacağımız kod blogu
  const onSearch = (e:any) => {
    setSearch(e.target.value);
    // setTimeout(() => {
    //   setSearch(e.target.value);
    // }, 300); // minimum debouncing işlemleride 300 ms yapalı

    // inputtaki değeri alıp search değerine set et. sayfa yendiden render olacağı için filteredResult yeni değer üzerinden değişecektir. 
  }

  const searchDebounceHandler = useMemo(() => debounce(onSearch,300),[]);
 
  return (
    <>
      {/* <input onChange={onSearch} /> */}
      <input onChange={searchDebounceHandler} />
      <hr></hr>
      {filteredResult.map((item:any,index:number) => {
        return <div key={index}>{item.ProductName}</div>
      })}
    </>
  )
}

export default DebouncingSample