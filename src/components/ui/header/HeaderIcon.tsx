import Image from 'next/image';

export const HeaderIcon = () => {
	return (
		<div>
			<Image
				src='/pinterest.svg'
				width={35}
				height={35}
				alt='pinterest'
			/>
		</div>
	);
};
