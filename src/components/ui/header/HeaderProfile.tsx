import { AiFillMessage } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';

import { LinkExpansive } from '../utils/LinkExpansive';

export const HeaderProfile = () => {
	return (
		<ul className='flex items-center gap-4 text-2xl text-zinc-500'>
			<LinkExpansive
				to='/manager/profile'
				iconOrText={<FaBell />}
			/>
			<LinkExpansive
				to='/manager/profile'
				iconOrText={<AiFillMessage />}
			/>

			<LinkExpansive
				to='/manager/profile'
				className='bg-gray-200 text-sm text-black'
				iconOrText={'J'}
			/>
		</ul>
	);
};
