'use client';

import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FieldValues, useForm } from 'react-hook-form';

import { Button, InputWithMessage } from '@/components/ui';
import { emailValid, passwordValid } from '@/utils/validations';
import Link from 'next/link';
import { useAuthActions } from '@/hooks/useAuthActions';

export default function Login() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { loginGithub, loginGoogle, loginEmailAndPassword } = useAuthActions();

	const onSubmit = (data: FieldValues) => {
		loginEmailAndPassword(data as LoginEmailPasswordProps);
	};

	return (
		<form
			className='flex flex-col gap-4'
			onSubmit={handleSubmit(onSubmit)}>
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
				text='Iniciar sesión'
				className='bg-red-600 text-white'
			/>

			<Button
				type='button'
				text='Continua con google'
				onClick={loginGoogle}
				className='bg-slate-200 text-black'>
				<BsGoogle />
			</Button>

			<Button
				type='button'
				text='Continua con github'
				onClick={loginGithub}
				className='bg-zinc-800 text-white'>
				<BsGithub />
			</Button>

			<Link
				href='/auth/register'
				className='text-sm text-end'>
				¿No tienes una cuenta?{' '}
				<span className='font-medium underline text-red-600'>
					Registrate aquí
				</span>
			</Link>
		</form>
	);
}
