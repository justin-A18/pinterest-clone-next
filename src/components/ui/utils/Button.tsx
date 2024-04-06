type ButtonType = 'submit' | 'button' | 'reset';

interface Props {
	children?: React.ReactNode;
	text: String;
	className?: String;
	type: ButtonType;
	onClick?: () => void;
}

export const Button = ({ children, text, className, type, onClick }: Props) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`w-full rounded-md mx-auto p-3 border-none font-medium  transition-all text-sm sm:text-base duration-300 flex items-center relative justify-center gap-4  ${className}`}>
			{children}
			<span>{text}</span>
		</button>
	);
};
