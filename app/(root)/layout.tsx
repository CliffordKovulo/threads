import Topbar from '@/components/shared/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Leftsidebar from '@/components/shared/Leftsidebar'
import Rightsidebar from '@/components/shared/Rightsidebar'
import Bottombar from '@/components/shared/Bottombar'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title : "threads",
  description : "A Next.js 13 Meta Threads Application"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <body className={inter.className}>
        <Topbar />


          <main>
            <Leftsidebar />

            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                { children }
              </div>
            </section>

            <Rightsidebar />
          </main>


        <Bottombar />
        </body>
    </ClerkProvider>
  )
}
