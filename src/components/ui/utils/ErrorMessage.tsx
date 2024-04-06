export const ErrorMessage = ({
	isActive,
	text,
}: {
	isActive: boolean;
	text: string;
}) => {
	return (
		<span
			className={`${
				isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
			} text-red-400 font-semibold text-sm`}>
			{text}
		</span>
	);
};
