import React from 'react'

const remote = () => {
    return (
        <div>
            <div className="flex justify-center z-30">
                <label for="toogleButton" className="flex items-center cursor-pointer z-30">
                    <div className="px-2">Abrir</div>
                    <div className="relative">
                        <input id="toogleButton" type="checkbox" className="hidden" />
                        <div
                            className="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"
                        ></div>
                        <div
                            className="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"
                        ></div>
                    </div>
                </label>

            </div>
        </div>
    )
}

export default remote
