import Link from 'next/link';
import { Button } from './ui/button';
import UserBtn from './UserBtn';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
	return (
		<nav className='flex h-[64px] items-center mt-[32px] rounded-[8px] bg-secondary p-4'>
			<ul className='flex items-center gap-4'>
				<li>
					<Link href='/'>Logo / MarketBuzz365</Link>
				</li>
				<li>
					<Link href='reports' className='text-foreground hover:text-primary'>
						Reports
					</Link>
				</li>
				<li>
					<Link href='about' className='text-foreground hover:text-primary'>
						About
					</Link>
				</li>
				<li>
					<UserBtn />
				</li>
			</ul>
			<div className='flex ml-auto items-center gap-[16px]'>
				<ModeToggle />
				<div className='bg-foreground w-[1px] h-[32px]'></div>
				<Button>Sign In</Button>
			</div>
		</nav>
	);
}
