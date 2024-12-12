import Image from "next/image"
import Link from "next/link"
import { Jua } from 'next/font/google'

const jua = Jua({ weight: "400", subsets: ["latin"] })
export const Logo = () => {
    return (
        <Link href={'/'} className="cursor-pointer flex items-center space-x-1">
            <div className="relative max-w-9 sm:max-w-12">
                <Image src={'/logo.png'} alt="372 logo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-full w-full" />
            </div>
            <h1 className={`${jua.className} cursor-pointer font-mono font-bold text-[1.45rem] sm:text-3xl`}>
                <span className="text-theme-primary">372</span>
                <span>Tasks</span>
            </h1>
        </Link>
    )
}