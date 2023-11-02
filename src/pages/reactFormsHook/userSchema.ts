import * as yup from 'yup';

export const schema = yup
	.object({
		username: yup.string().required('username boş'),
		password: yup.string().required('parola boş'),
		confirmed: yup.boolean(),
		age: yup
			.number()
			.positive('yaş değeri negatif olamaz')
			.integer('numeric değer giriniz')
			.required(),
	})
	.required();


