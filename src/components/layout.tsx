import Image from 'next/image'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between">
      <main>{children}</main>
      <footer className="text-gray-300">
        <div className="flex justify-center items-center gap-1.5 m-24">
          <span>powerd by</span>
          <a href="https://vercel.com/">
            <Image
              src={'/vercel.svg'}
              alt="vercel logo"
              width={16}
              height={16}
              className="dark:invert"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}
