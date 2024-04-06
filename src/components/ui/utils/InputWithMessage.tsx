import { UseFormRegisterReturn } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

type InputType = 'email' | 'text' | 'password';

interface Props {
	name: string;
	errorMessage: string;
	hasError: boolean;
	register: (name: string, validation: object) => UseFormRegisterReturn<string>;
	type: InputType;
	validation: object;
}

export const InputWithMessage = ({
	name,
	hasError,
	errorMessage,
	validation,
	register,
	type,
}: Props) => {
	return (
		<div>
			<input
				type={type}
				placeholder={name}
				className='w-full p-2 border-2 outline-none rounded-md'
				{...register(name, validation)}
			/>
			<ErrorMessage
				isActive={hasError}
				text={errorMessage}
			/>
		</div>
	);
};
