import './globals.css'
import NavBar from './components/nav-bar'

export const metadata = {
  title: 'nextjs-supabase-app-directory',
  description: 'Next.js Supabase app directory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
