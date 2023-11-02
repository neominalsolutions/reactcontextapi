import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type UserFormState = {
  username:string;
  password:string;
  age:number;
  confirmed:boolean;
}


function ReactFormsHookSample() {

    // console.log('ReactFormsHookSample Render');

    // useEffect(() => {
    //     console.log('useEffect React Forms Hook');

    // },[]);

const schema = yup.object({
    password:yup.string(),
    confirmed:yup.boolean(),
    username: yup.string().required('name alanı boş geçilemez'),
    age: yup.number().positive('yaş değeri negatif olamaz').integer().required(),
  })
  .required()
    

const {
    register, // input alanlarını form bind etmek için kullanılır
    handleSubmit, // form submit işlemi için kullanacağız
    watch, // input değerlerinin takibi için kullanıyoruz
    formState: { errors,isDirty,isValid },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // form değerlerini takibe alma izleme
  const username =  watch('username') || '';
  console.log('username', username);
  console.log('isDirty', isDirty);

//   if(username.length > 3) {
//     alert('username 3 oldu');
//   }

  const onFormSubmit = (data:any) => {
    console.log('form-value', data);
  }
  
  return (
    <>
    <form method='post' onSubmit={handleSubmit(onFormSubmit)}>
      <input {... register("username")} />
      <span>{errors.username?.message}</span>
      <br></br>
      <input type="password" {... register("password")} />
      {/* <input type="password" {... register("password",
      {
        required:{value:true,message:'password alanı boş geçilemez'},
        minLength:{value:8, message:'8 karakterdan az girilemez'}
      })} />
      {
        errors.password?.type === "required" && <span> {errors.password?.message}</span>
      }

      {
        errors.password?.type === "minLength" && <span> {errors.password?.message}</span>
      }
       */}
      <br></br>
      <input type="number" {... register("age")} />
         <span>{errors.age?.message}</span>
      <br></br>
      <input type="checkbox" {... register("confirmed")} /> Is Confirmed
      <br></br>
      <input disabled={!isValid} type='submit' value={'Kaydet'} />
    </form>

    <button onClick={() => {

       const age =  window.prompt("Yaşınız Kaç");

       setValue('age', Number(age));

    }}>Set Age</button>


    <button onClick={() => {

      const newAge =  getValues('age');
      alert("Age" + newAge);

    }}>Get Age</button>
    </>
  )
}

export default ReactFormsHookSample