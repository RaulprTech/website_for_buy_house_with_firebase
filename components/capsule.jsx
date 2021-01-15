import Image from 'next/image'

export default function Capsule() {
    return (
      
        <div className="container flex justify-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-8 sm:gap-x-8 md:py-12 border-black">
            <div className="px-4 col-start-1 row-start-2 sm:pb-4">
              <div className="flex flex-col my-5 text-sm font-medium sm:mb-4">
                <div className="flex justify-between text-sm font-medium">
                  <h2 className="title">
                    PBC1
                  </h2>
                  <div className="flex items-center pb-4 md:pb-8 text-sm font-medium text-black">
                    <svg
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="text-violet-600"
                    >
                      <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
                    </svg>
                    <h3 className="subtitle">1</h3>
                  </div>
                </div>
                <div className="flex items-center pb-4 md:pb-8 text-sm font-medium text-black">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="text-violet-600"
                  >
                    <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
                  </svg>
                  <h3 className="subtitle">Aereopuerto Puebla</h3>
                </div>
                <button
                  type="button"
                  className="btn-green"
                >
                  Reservar
                </button>
              </div>
            </div>
            <div className="flex col-start-1 row-start-1 sm:col-start-2 sm:row-span-3">
              <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="relative col-span-3 row-span-2 md:col-span-2">
                  <Image
                    src="/public/images/pbc1.png."
                    alt="Capsule for one person"
                    width={300}
                    height={300}
                    className="absolute inset-0 object-cover w-full h-full bg-gray-100 sm:rounded-lg"
                  />
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="/beach-house-interior.jpg"
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full bg-gray-100 rounded-lg"
                  />
                </div>
                <div className="relative hidden md:block">
                  <img
                    src="/beach-house-view.jpg"
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full bg-gray-100 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}





/*


            <div className="px-4 col-start-2 row-start-2 space-y-3">
              <p className="flex items-center text-sm font-medium text-black">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-violet-600"
                >
                  <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
                </svg>
                Aereopuerto Puebla
              </p>
            </div>

                  <div className="mx-2 text-base font-normal">·</div>


            */