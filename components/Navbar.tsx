import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import UserLoggin from './UserLoggin';

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
			</ul>
			<div className='flex ml-auto items-center gap-[16px]'>
				<ModeToggle />
				<div className='bg-foreground w-[1px] h-[32px]'></div>
				<UserLoggin />
			</div>
		</nav>
	);
}
