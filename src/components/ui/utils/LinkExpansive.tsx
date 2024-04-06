import Link from 'next/link';

interface Props {
	to: Routes;
	className?: String;
	iconOrText: any;
}

export const LinkExpansive = ({ iconOrText, to, className }: Props) => {
	return (
		<li>
			<Link
				className={`p-4 flex items-center justify-center rounded-full size-8 cursor-pointer relative before:content-[""] before:size-12 before:bg-gray-200 before:absolute before:left-[50%] before:rounded-full before:z-[-1] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:invisible before:opacity-0 hover:before:visible hover:before:opacity-100 before:transition-all before:duration-300 ${className}`}
				href={to}>
				<div>{iconOrText}</div>
			</Link>
		</li>
	);
};
