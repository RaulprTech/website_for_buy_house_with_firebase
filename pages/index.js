import React from "react"

import Header from "../components/Landing/Header"
import Mensaje from "../components/Landing/Caracteristica"

import Advantage from "../components/Landing/Advantage"
import Nav from "../components/Nav"
import Property from "../components/Property"

import Container from "../components/Container"
import recomentations from "../data/house/recomentations.json"
import { property } from "lodash"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="">
        <h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
          Casas en la Playa cerca de ti
        </h1>
        <div className="flex justificy-center mt-8 overflow-x-scroll scroll-hidden">
          {
            recomentations.playa.map((house) => (
              <Property data={house}/>
            ))
          }
        </div>
      </div>
      <Mensaje
        title="Busqueda confiable"
        message="Nos aseguramos de verificar que cada oferta sea real y este vigente para que tu proceso de busqueda sea lo mas agradable posible."
        illustration="/imgs/house_searching.svg"
      />
      <Mensaje
        title="Panorama completo"
        message="Te damos acceso a la informacion mas relevante de las propiedades para que puedas tomar la decision mas asertada."
        illustration="/imgs/select_house.svg"
      />
      <Mensaje
        title="Compra 100% digital"
        message="Todo el proceso es a traves de nuestra plataforma, desde la busqueda hasta la firma del contrato. Todo completamente seguro para que tu no tengas que preocuparte de nada mas que encontrar tu nuevo hogar"
        illustration="/imgs/buy_house.svg"
      />
      <Advantage />
    </div>
  )
}
