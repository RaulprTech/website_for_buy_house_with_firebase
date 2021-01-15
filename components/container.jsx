import Header from "./header"
import Nav from '../components/nav'

export default (props) => (
  <div>
        <div className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex min-w-full h-screen">
          <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto" >
              {props.children}
          </div>
          <Nav/>
        </div>
  </div>
    )
