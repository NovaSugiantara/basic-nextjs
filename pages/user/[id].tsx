import { useRouter } from "next/router";
import Layout from '../../components/Layout';
import styles from './User.module.css';
import Image from 'next/image';

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailProps {
    user: User;
}
export default function UserDetail(props: UserDetailProps) {
    const router = useRouter();
    const { id } = router.query;
    const { user } = props;
    return (
        <Layout pageTitle="User Detail Page">
            <div>
                <div className={styles.card}>
                    <div className="profile">
                        <Image src="/img_avatar.png" alt="avatar" width={100} height={100}/>
                    </div>
                        <div className={styles.container}>
                                <h4>User Detail Page {' '} {id} {' '}</h4>
                                <p><b>{user.username}</b></p>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                                <p>{user.website}</p>
                        </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUsers = await res.json();

    const paths = dataUsers.map((user : User) => ({
        params:{
            id:`${user.id}`
        },
    }));
    return {
        paths,
        fallback: false
    };
}

interface getStaticProps{
    params :{
        id:string;
    }
}

export async function getStaticProps(context: { params: { id: any; }; }) {
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json(); 

    return {
        props: {
            user,
        }
    };
}
