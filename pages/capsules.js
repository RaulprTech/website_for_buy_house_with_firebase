import Capsule from '../components/capsule'
import Container from '../components/container'



export default function capsules() {
    return (
        <div>
            <Container>
                <Capsule capsule="PBC1" people="1" location="Aeropuerto de Puebla">
                    <Button />
                </Capsule>
            </Container>
        </div>
    )
}

const Button = () => (
    <>
        <button
            type="button"
            className="btn-green"
        >
            Reservar
        </button>
    </>
)

