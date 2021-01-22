import Header from "./header"
import Nav from '../components/nav'
import { useState, useEffect } from 'react';


export default function Container(props) {
  const size = useWindowSize();

  return (
    <div>
      <div className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative min-w-full h-screen">

        <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto" >
          {
            size.width > 640 && <Header />
          }
          {props.children}
        </div>
        {
          size.width <= 640 && <Nav />
        }
      </div>
    </div>
  )
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}