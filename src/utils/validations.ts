export const emailValid = {
	pattern: {
		value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		message:
			'Ingresa un correo electrónico válido, por ejemplo: "example@dominio.com"',
	},
	required: {
		value: true,
		message: 'Este campo es requerido',
	},
};

export const userNameValid = {
	minLength: {
		value: 3,
		message: 'username debe tener más de 3 caracteres',
	},
	required: {
		value: true,
		message: 'Este campo es requerido',
	},
};

export const passwordValid = {
	minLength: {
		value: 6,
		message: 'Contraseña debe tener más de 6 caracteres',
	},
	required: {
		value: true,
		message: 'Este campo es requerido',
	},
};