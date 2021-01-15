import Link from 'next/link'

const links = [
    { href: '/', label: 'Inicio' },
    { href: '/capsules', label: 'Capsulas' },
    { href: '/tickets', label: 'Mis Reservas' },
    { href: '/profile', label: 'Perfil' }
]

export default function MobileNav() {
    return (
        <>
        <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
        {links.map(({ href, label }) => (
              <Link href={href} key={`${href}${label}`}>
                <a href="#" className="flex flex-grow items-center justify-center p-2 text-balck-500 hover:text-indigo-500">
                <div className="text-center">
                    <span className="block h-8 text-3xl leading-8">
                        <i className="mdi mdi-newspaper-variant-outline"></i>
                    </span>
                    <span className="block text-xs leading-none">{label}</span>
                </div>
                </a>
              </Link>
                    ))}
            
        </div>
        </>
    )
}



/*



export default function MobileNav() {
    return (
        <>
        <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
            <a href="#" className="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500">
                <div className="text-center">
                    <span className="block h-8 text-3xl leading-8">
                        <i className="mdi mdi-newspaper-variant-outline"></i>
                    </span>
                    <span className="block text-xs leading-none">Inicio</span>
                </div>
            </a>
            <a href="#" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div className="text-center">
                    <span className="block h-8 text-3xl leading-8">
                        <i className="mdi mdi-apps"></i>
                    </span>
                    <span className="block text-xs leading-none">Capsulas</span>
                </div>
            </a>
            <a href="#" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div className="text-center">
                    <span className="block h-8 text-3xl leading-8">
                        <i className="mdi mdi-star-outline"></i>
                    </span>
                    <span className="block text-xs leading-none">Mis Reservas</span>
                </div>
            </a>
            <a href="#" className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div className="text-center">
                    <span className="block h-8 text-3xl leading-8">
                        <i className="mdi mdi-magnify"></i>
                    </span>
                    <span className="block text-xs leading-none">Perfil</span>
                </div>
            </a>
        </div>
        </>
    )
}

*/