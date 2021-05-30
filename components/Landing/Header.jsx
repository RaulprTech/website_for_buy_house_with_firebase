import Image from "next/image"

import useWindowSize from "../../hooks/useWindowSize"

// import Search from "../Search"

export default () => {
  const size = useWindowSize()
  // style={{ backgroundImage: `url(${background})` }}

  return (
    <header className="grid grid-cols-1">
      <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-gray-500">
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <h1 className="font-bold text-5xl m-4 text-center">
              Encuentra la casa de tus sueños
            </h1>
            <p className="text-xl font-semibold m-4 text-center">
              Busca, Compara y Compra en un solo lugar. Realiza todo el proceso
              de forma facil, rapida y con la mayor seguridad.
            </p>
            {/* <Search /> */}
          </div>
        </div>
      </div>
      <div class="col-start-1 row-start-1 flex">
        <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
          <div class="relative col-span-3 row-span-2">
            <Image
              src="/images/background.jpg"
              alt="interior de una casa"
              height={(2 * size.height) / 3 || 100}
              width={size.width || 20}
              layout="responsive"
              className="absolute inset-0 w-full h-full object-cover bg-gray-100"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
