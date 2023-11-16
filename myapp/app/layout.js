import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-gray-700 antialiased bg-white'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}