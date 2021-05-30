export default function Post() {
  return (
    <>
          <div className=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out m-2">
            <div className="col-span-3 row-span-4 p-1 m-1">
              <a href="#">
                <img
                  src="https://picsum.photos/640/400/?random"
                  alt="Placeholder"
                  className="rounded-t-xl object-cover h-48 w-full"
                />
              </a>
            </div>
            <div className="col-span-3 row-span-1">
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Title
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">9 min ago</p>
              </header>
            </div>
            <div className="col-span-3 row-span-1 mb-4">
              <section>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur laudantium corrupti voluptatem nostrum, eum
                distinctio sapiente doloremque debitis eaque dignissimos iusto
                ad, animi, est ullam placeat voluptas fugiat aut ratione.
              </section>
            </div>

            <div className="col-span-3 row-span-1">
              <ul className="flex flex-row pl-2 text-gray-600 overflow-x-scroll hide-scroll-bar">
                <li className="py-1">
                  <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                    <a className="" href="#">
                      #hogehoge
                    </a>
                  </div>
                </li>
                <li className="py-1">
                  <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                    <a className="" href="#">
                      #fugafuga
                    </a>
                  </div>
                </li>
                <li className="py-1">
                  <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                    <a className="" href="#">
                      #barbarbar
                    </a>
                  </div>
                </li>
                <li className="py-1">
                  <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                    <a className="" href="#">
                      #hogefugafoo
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
    </>
  );
}
