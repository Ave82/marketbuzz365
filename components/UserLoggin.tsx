'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from './ui/button';
import UserBtn from './UserBtn';

export default function UserLoggin() {
	return (
		<>
			<UserBtn />
			<Button>Sign In</Button>
		</>
	);
}
