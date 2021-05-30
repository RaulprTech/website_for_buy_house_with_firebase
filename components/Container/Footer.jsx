import React from "react";

export default function Footer() {
  return (
    <footer>
      <section className="w-full border-green-500 border-current bg-gray-100 text-black pb-4">
        <article className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
          <div className="w-full pt-4 flex flex-col sm:flex-row space-y-2  justify-start">
            <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
              <p className="opacity-60">
                This is a home sales e-commerce prototype
              </p>
            </div>
            <div className="w-full sm:w-1/5 flex flex-col space-y-4">
              <a className="opacity-60">Acerca de</a>
              <a className="opacity-60">Contacto</a>
            </div>
            <div className="w-full sm:w-1/5 flex flex-col space-y-4">
              <a className="opacity-60">Politica de Privacidad</a>
              <a className="opacity-60">Terminos de Servicio</a>
            </div>
            <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
              <div className="flex flex-row space-x-4">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <hr className="my-5"></hr>
          <div className="opacity-60 pt-2">
            <p>© 2021 Site design and build for Raul Pacheco.</p>
          </div>
        </article>
      </section>
    </footer>
  );
}
