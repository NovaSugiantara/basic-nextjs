import Layout from "../../components/Layout";
import {useRouter} from 'next/router';

interface UserProps{ 
    dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
    const { dataUsers } = props;
    const router = useRouter();
    // console.log({ dataUsers });

    return (
        <Layout pageTitle="User Page">
            {/* <h1 className="text-h1">Ini Halaman User</h1> */}
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                {dataUsers.map(user => {
                    return (
                        <>
                        <tbody>
                            <tr key={user.id} onClick={()=>router.push(`/user/${user.id}`)}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                        </>
                    )
                })}
            </table>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers
        }
    };
}
