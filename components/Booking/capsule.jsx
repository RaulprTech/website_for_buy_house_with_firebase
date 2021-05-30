import Image from 'next/image'

export default function Capsule({ capsule, people, location, children }) {
  return (

    <div className="container flex justify-center mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-8 sm:gap-x-8 md:py-12 border-black">
        <div className="px-4 col-start-1 row-start-2 sm:pb-4">
          <div className="flex flex-col my-5 text-sm font-medium sm:mb-4">
            <div className="flex justify-between text-sm font-medium">
              <h2 className="title">
                {capsule}
              </h2>
              <div className="flex items-center pb-4 text-sm font-medium text-gray-700">
                <svg
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="text-violet-600"
                >
                  <path d="M7.5,13A4.5,4.5,0,1,1,12,8.5,4.505,4.505,0,0,1,7.5,13Zm0-7A2.5,2.5,0,1,0,10,8.5,2.5,2.5,0,0,0,7.5,6ZM15,23v-.5a7.5,7.5,0,0,0-15,0V23a1,1,0,0,0,2,0v-.5a5.5,5.5,0,0,1,11,0V23a1,1,0,0,0,2,0Zm9-5a7,7,0,0,0-11.667-5.217,1,1,0,1,0,1.334,1.49A5,5,0,0,1,22,18a1,1,0,0,0,2,0ZM17.5,9A4.5,4.5,0,1,1,22,4.5,4.505,4.505,0,0,1,17.5,9Zm0-7A2.5,2.5,0,1,0,20,4.5,2.5,2.5,0,0,0,17.5,2Z" />
                </svg>
                <h3 className="subtitle ml-2">{people}</h3>
              </div>
            </div>
            <div className="flex items-center pb-4 text-sm font-medium text-gray-700">
              <svg
                width="25"
                height="25"
                fill="currentColor"
                className="text-violet-600"
              >
                <path d="M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z" /><path d="M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z" />              </svg>
              <h3 className="subtitle ml-1">{location}</h3>
            </div>
            {children}
          </div>
        </div>
        <div className="flex col-start-1 row-start-1 sm:col-start-2 sm:row-span-3">
          <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
              <Image
                src="/images/pbc1.png"
                alt="Capsule for one person"
                width="300"
                height="300"
                className="absolute inset-0 object-cover w-full h-full bg-gray-100 sm:rounded-lg"
              />
            </div>
            <MoreImages />
          </div>
        </div>
      </div>
    </div>
  )
}

const MoreImages = () => {
  return (
    <>
      <div className="relative hidden md:block">
        <Image
          src="/images/pbc1.png"
          alt="Capsule for one person"
          width={150}
          height={150}
          className="absolute inset-0 object-cover w-full h-full bg-gray-100 sm:rounded-lg"
        />
      </div>
      <div className="relative hidden md:block">
        <Image
          src="/images/pbc1.png"
          alt="Capsule for one person"
          width={150}
          height={150}
          className="absolute inset-0 object-cover w-full h-full bg-gray-100 sm:rounded-lg"
        />
      </div>
    </>
  )
}