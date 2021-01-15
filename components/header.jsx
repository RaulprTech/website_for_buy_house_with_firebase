import Link from 'next/link'
import Image from 'next/image'




const links = [
    { href: '/capsules', label: 'Iniciar Sesion' },
    { href: 'https://nextjs.org/docs', label: 'Registrarme' },
]

export default function Header() {
    return (
      <nav>
        <ul className="flex items-center justify-between p-8">
          <li>
            <Link href="/">
              <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                Flexxo
              </a>
            </Link>
            <div className="relative col-span-3 row-span-2 md:col-span-2">
              <Image
                src="/public/images/pbc1.png."
                alt="Picture of the author"
                width={15}
                height={15}
                className="absolute inset-0 object-cover w-full h-full bg-gray-100 sm:rounded-lg"
              />
            </div>
          </li>
          <ul className="flex items-center justify-between space-x-4 ">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <a href={href} className="no-underline btn-blue">
                  {label}
                </a>
              </li>
                    ))}
          </ul>
        </ul>
      </nav>
    )
}
