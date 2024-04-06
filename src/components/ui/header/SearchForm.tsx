import { IoSearchSharp } from 'react-icons/io5';

export const SearchForm = () => {
	return (
		<form className='w-full h-full relative'>
			<input
				type='text'
				placeholder='Buscar'
				className='w-full h-full border-none outline-none bg-[#e1e1e1] px-10 py-3 rounded-full'
			/>
			<button className='text-xl absolute top-4 left-3 text-gray-700'>
				<IoSearchSharp />
			</button>
		</form>
	);
};
