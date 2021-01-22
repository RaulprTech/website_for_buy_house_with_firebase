import Capsule from '../components/capsule'
import Container from '../components/container'
import Front from '../components/front'
import Remote from '../components/remote'

export default function Home() {
  return (
    <div>
      <Container>
        <Front />
      </Container>
    </div>
  )
}




/*


      <header className="flex items-center justify-center p-6 text-sm font-medium text-black">
          <svg
            width="50"
            height="50"
            fill="currentColor"
            className="text-violet-600"
          >
            <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
          </svg>
          <h2 className="text-center title ml-14">
            Selecciona una cápsula
          </h2>
        </header>


*/