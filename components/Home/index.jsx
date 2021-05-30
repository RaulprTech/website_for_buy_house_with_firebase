import Image from "next/image";
import Link from "next/link";

{
  /* <img
src="/images/space.webp"
alt="background with the word flexxo"
className="z-10 max-h-30 bg-gradient-to-b"
/> */
}

{
  /* <header className="z-40 md:z-10 lg:10">
<Link href="/booking">
  <button
    type="button"
    className="visible btn-white sm:invisible md:invisible lg:invisible"
  >
    ¿Quieres Reservar una Cápsula?
  </button>
</Link>
</header> */
}

{
  /* <Image
src="/images/space.webp"
alt="background of space and cohete"
layout="fill"
className="z-10"
/> */
}

export default function Front() {
  return (
    <section className="md:mx-24">
      <header className="flex flex-col bg-transparent hover:bg-blue-100 group rounded-lg">
        <article className="flex flex-col place-items-center z-40">
          <img
            src="/images/avatar.png"
            alt="persona saludando"
            height="400"
            width="400"
            className="z-30"
          />
        </article>
        <h2 className="title text-white z-30 mt-4 group-hover:text-black">
          ¡Hola! Soy Raúl Pacheco
        </h2>
        <h4 className="subtitle text-white z-30 mt-4 group-hover:text-black">
          Conoce mi trabajo
        </h4>
        <article className="flex self-center">
          <Link href="/booking">
            <button
              type="button"
              className="btn-white m-4 hover:bg-indigo-400 hover:text-white"
            >
              Proyectos
            </button>
          </Link>
          <Link href="/blog">
            <button
              type="button"
              className="btn-white m-4  hover:bg-indigo-400 hover:text-white"
            >
              Articulos
            </button>
          </Link>
        </article>
      </header>
    </section>
  );
}
