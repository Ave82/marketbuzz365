import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';

export default function UserBtn() {
	return (
		<Link href='/'>
			<div className='border border-foreground rounded-[8px] p-2 flex items-center gap-2 max-h-[48px]'>
				<Avatar>
					<AvatarImage src='https://avatars.githubusercontent.com/u/81101993?v=4' />
					<AvatarFallback>userName</AvatarFallback>
				</Avatar>
				<span className='text-base'>Name</span>
			</div>
		</Link>
	);
}
