'use client';

import { FieldValues, useForm } from 'react-hook-form';

import { Button, InputWithMessage } from '@/components/ui';
import { emailValid, passwordValid, userNameValid } from '@/utils/validations';
import Link from 'next/link';

export default function Register() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};

	return (
		<form
			className='flex flex-col gap-4'
			onSubmit={handleSubmit(onSubmit)}>
			<InputWithMessage
				name='username'
				type='text'
				register={register}
				validation={userNameValid}
				hasError={!!errors.username}
				errorMessage={errors.username?.message as string}
			/>

			<InputWithMessage
				name='email'
				type='email'
				register={register}
				validation={emailValid}
				hasError={!!errors.email}
				errorMessage={errors.email?.message as string}
			/>

			<InputWithMessage
				name='password'
				type='password'
				register={register}
				validation={passwordValid}
				hasError={!!errors.password}
				errorMessage={errors.password?.message as string}
			/>

			<Button
				type='submit'
				text='Registrarse'
				className='bg-red-600 text-white'
			/>

			<Link
				href='/auth/login'
				className='text-sm text-end'>
				¿Ya tienes una cuenta?{' '}
				<span className='font-medium underline text-red-600'>Ingresa aquí</span>
			</Link>
		</form>
	);
}
