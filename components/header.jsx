import Link from 'next/link'
import Image from 'next/image'



const links = [
  { href: '/login', label: 'Iniciar Sesion' },
  { href: '/logup', label: 'Registrarme' },
]

export default function Header() {
  return (
    <nav className="container flex-1 mx-auto">
      <ul className="flex items-center justify-between p-6">
        <li>
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="Capsule for one person"
              height="40"
              width="40"
              className="z-30"
            />
          </Link>
          <div className="relative col-span-3 row-span-2 md:col-span-2">
          </div>
        </li>
        <ul className="flex items-center justify-between space-x-4 z-30">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline ">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
