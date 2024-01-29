'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from './ui/button';
import UserBtn from './UserBtn';

export default function UserLoggin() {
	const { data: session } = useSession();

	if (session && session.user) {
		console.log(session.user);
		return (
			<>
				<UserBtn user={session.user} />
				<Button onClick={() => signOut()}>Sign Out</Button>
			</>
		);
	} else {
		return <Button onClick={() => signIn()}>Sign In</Button>;
	}
}
