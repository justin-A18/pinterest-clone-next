/* eslint-disable @next/next/no-img-element */
export const CardImage = ({ url }: { url: string }) => {
	return (
		<article className='mb-3'>
			<img
				className='rounded-xl w-full h-auto'
				src={url}
				alt='image'
			/>
		</article>
	);
};
