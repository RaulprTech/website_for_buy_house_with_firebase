import Header from "./header"
import Nav from '../components/nav'
import { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize'


export default function Container(props) {

  let [isLogin, setIsLogin] = useState(true);

  const size = useWindowSize();

  return (
    <div>
      <div className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative min-w-full h-screen content-center">
        {
          size.width > 640 && <Header login={isLogin} />
        }
        <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto" >
          {props.children}
        </div>
        {
          size.width <= 640 && <Nav login={isLogin} />
        }
      </div>
    </div>
  )
}
