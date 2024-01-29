import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';

export default function UserBtn({ user }: any) {
	return (
		<Link href='/'>
			<div className='border border-foreground rounded-[8px] p-2 flex items-center gap-2 max-h-[48px]'>
				<Avatar>
					<AvatarImage src={user.image} alt='user profile img' />
					<AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
				</Avatar>
				<span className='text-base'>{user.name}</span>
			</div>
		</Link>
	);
}
