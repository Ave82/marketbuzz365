import Link from 'next/link';
import { Button } from './ui/button';
import UserBtn from './UserBtn';

export default function Navbar() {
	return (
		<div>
			<nav className='flex h-[64px] bg-secondary items-center'>
				<Link href='/' className='text-foreground hover:text-primary'>
					Logo / MarketBuzz365
				</Link>
				<ul className='flex ml-auto items-center gap-4'>
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
						<Button>Sign In</Button>
					</li>
					<li>
						<UserBtn />
					</li>
				</ul>
			</nav>
		</div>
	);
}
