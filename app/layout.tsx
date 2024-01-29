import type { Metadata } from 'next';
import './globals.css';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'MarketBuzz365',
	description: 'MarketBuzz365 landing page',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession();

	return (
		<html lang='en'>
			<SessionProvider session={session}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<body>
						<header>
							<Navbar />
						</header>
						<main>{children}</main>
						<footer>
							<Footer />
						</footer>
					</body>
				</ThemeProvider>
			</SessionProvider>
		</html>
	);
}
