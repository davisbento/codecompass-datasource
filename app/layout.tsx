export const metadata = {
	title: 'Code Compass Datasource',
	description: 'Code Compass Datasource'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
