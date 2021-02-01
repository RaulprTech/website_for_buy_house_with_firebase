import Link from 'next/link'
import Information from '../../../components/Profile'
import useUser from '../../../hooks/useUser'

export default function Profile() {
    const user = useUser();
    console.log(user)

    return (
        <div>
            <div className="my-10 mb-8">
                {
                    user && <Information user={user} />
                }
            </div>
        </div>
    )
}



