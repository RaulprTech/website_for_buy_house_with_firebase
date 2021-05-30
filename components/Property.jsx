import React from "react"
import Link from "next/link"

export default function Property({data}) {
  return (
    <div
      className="shadow flex-shrink-0 m-4 rounded box-border"
      style={{ width: "280px" }}
    >
      <header className="h-40 w-30 bg-cover bg-center">
        <div className="flex">
          <img src={data.src}/>
        </div>
      </header>
      <div className="px-4 py-8">
        <h4 className="font-bold text-xl mb-2 truncate md:overflow-clip text-justify">
          <a href="/" target="_blank" rel="noopener noreferrer">
            {data.name}
          </a>
        </h4>
        <div className="py-2">
        <p className="text-justify truncate">{data.description}</p>
      </div>
      </div>
      <Features/>
    </div>
  )
}

const Features = () => {
  return (
    <footer className="px-6 py-2 mt-0">
      <table className="px-4 sm:px-6 lg:px-8">
          <dl className="md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <Feature figura="https://www.flaticon.es/svg/static/icons/svg/3028/3028354.svg" />
            <Feature figura="https://www.flaticon.es/svg/static/icons/svg/2452/2452227.svg" />
            <Feature figura="https://www.flaticon.es/svg/static/icons/svg/1186/1186715.svg" />
          </dl>
      </table>
    </footer>
  )
}

const Feature = ({ figura }) => {
  return (
    <div className="">
      <div className="flex">
        <div className="flex items-center justify-center h-6 w-6 rounded-md text-white">
          <img src={figura} />
        </div>
        <div className="text-center ml-3 mr-3">
          <dt className="text-base text-gray-900">2</dt>
        </div>
      </div>
    </div>
  )
}

/*
      <div className="px-4 py-2">
        <footer className="mt-8"></footer>
      </div>
*/

/*

          <Link to="/" className="btn inline-block mt-4">
            Ver
          </Link>

*/
