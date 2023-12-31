import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { schema } from './userSchema';

type UserFormState = {
	username: string;
	password: string;
	age: number;
	confirmed: boolean;
};

function ReactFormsHookSample() {
	const {
		register, // input alanlarını form bind etmek için kullanılır
		handleSubmit, // form submit işlemi için kullanacağız
		watch, // input değerlerinin takibi için kullanıyoruz
		formState: { errors },
		setValue,
		getValues,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onFormSubmit = (data: any) => {
		console.log('form-value', data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<input type="text" {...register('username')} />
				<span>{errors.username?.message}</span>
				<br></br>
				<input type="password" {...register('password')} />
				{errors?.password && <span>Parola yok</span>}
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
				<input type="number" {...register('age')} />
				<span>
					{errors.age?.type !== 'valueAsNumber' ? 'Numeric Olmalıdır' : ''}
				</span>
				<br></br>
				<input type="checkbox" {...register('confirmed')} /> Is Confirmed
				<br></br>
				<input type="submit" value="Kaydet" />
			</form>

			<button
				onClick={() => {
					const age = window.prompt('Yaşınız Kaç');

					setValue('age', Number(age));
				}}
			>
				Set Age
			</button>

			<button
				onClick={() => {
					const newAge = getValues('age');
					alert('Age' + newAge);
				}}
			>
				Get Age
			</button>
		</>
	);
}

export default ReactFormsHookSample;
