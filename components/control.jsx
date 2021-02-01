export default function Control({ hour }) {
    return (
        <div className="container mt-20">
            <div className="m-4 py-4 px-2 bg-primary text-white rounded-xl mb-10">
                <div className="container flex justify-center items-center">
                    <h2 className="title text-xl mr-8 py-4">Abrir Puerta</h2>
                    <div className="">
                        <div className="flex items-center justify-center w-full  shadow-md rounded-full">
                            <label
                                htmlFor="toogleA"
                                className="flex items-center cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <input id="toogleA" type="checkbox" className="hidden" />
                                    <div
                                        className="toggle__line w-16 h-8 bg-gray-300 rounded-full shadow-inner"
                                    >
                                    </div>
                                    <div
                                        className="toggle__dot bg-red-400 absolute w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"
                                    >
                                        <svg className="text-white w-12 h-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="title">Horario:</h1>
            <div className="m-4 py-4 px-2 bg-gray-200 rounded-xl mb-10">
                <div className="container flex justify-center">
                    <h2 className="subtitle">{hour}</h2>
                </div>
            </div>
            <div className="m-4 py-4 px-2 bg-gray-200 rounded-xl mb-10">
                <h2 className="subtitle">WifiPassword: Mxfl8877</h2>
                <h2 className="subtitle">Costo: $0</h2>
                <h2 className="subtitle">Cápsula: PBC1</h2>
            </div>
            <ButtonRed title="Emergencia" style="font-ligth text-xl w-full max-w-sm mx-auto px-2 py-2 rounded-lg border border-red-600 text-red-600 shadow-sm hover:shadow-lg" />
        </div>
    )
}



const ButtonRed = ({ title, style }) => {
    return (
        <div className="md:w-3/12 text-center md:pl-6 mx-auto w-11/12">
            <button className={style}   >
                {title}
            </button>
        </div>
    )
}