import Image from 'next/image'
import Link from 'next/link'


export default function Front() {
    return (
        <div className=" bg-contain max-h-50 overflow-hidden">
            <Image
                src="/../public/images/background.png"
                alt="Capsule for one person"
                layout='fill'
                className="z-10 max-h-30"
            />
            <div className="flex flex-col my-5 text-sm font-medium sm:mb-4">
                <header className="z-40 md:z-10 lg:10">
                    <Link href="/capsules">
                        <button
                            type="button"
                            className="btn-white"
                        >
                            ¿Quieres Reservar una Cápsula?
                    </button>
                    </Link>
                </header>
                <div className="flex flex-col place-items-start text-sm font-medium text-center mt-20 ml-8 z-40">

                    <Image
                        src="/../public/images/FLEXXO.svg"
                        alt="Capsule for one person"
                        height="80"
                        width="200"
                        className=""
                    />
                    <h2 className="title text-gray-500 ml-20">
                        tu espacio
                    </h2>
                    <Link href="/capsules">
                        <button
                            type="button"
                            className="btn-white mt-4"
                        >
                            Conoce nuestras Cápsulas
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

