import "./globals.css";
export const metadata: Metadata = {
  title: 'RDS Carcenter',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-BE">
      <body >
        {children}
      </body>
    </html>
  );
}
