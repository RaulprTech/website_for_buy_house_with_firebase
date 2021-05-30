import React from "react"
import Property from "../components/Property"
import Select from "../components/Select"
import houses from "../data/house/house.json"

export default function Properties() {
  let lugares = ["Escuelas", "Parques", "Plazas", "Centro", "playa"]
  let cuartos = ["1", "2", "3", "4 o mas"]
  return (
    <main className="container max-w-8xl mx-auto my-4">
      <header className="max-w-full flex justify-between">
        <h1 className="inline-block text-3xl font-bold leading-tight text-gray-900 px-6 ml-2">
          Casas en Merida, Yucatan
        </h1>
        <div className="flex flex-wrap items-center">
          <Select name="Cerca de" data={lugares} />
          <Select name="Cuartos" data={cuartos} />
        </div>
        <hr></hr>
      </header>
      <section className="flex flex-wrap justify-center md:justify-start">
        {
          houses.merida.map((house) => (
            <Property data={house}/>
          ))
        }
      </section>
    </main>
  )
}
