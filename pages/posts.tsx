import Layout from "../components/Layout";
import {useRouter} from 'next/router';

interface Post{
    id:number;
    title:string;
    body:string;
}

interface PostProps{ 
    dataPost: Post[];
}
export default function Users(props: PostProps) {
    const { dataPost } = props;
    const router = useRouter();
    // console.log({ dataPost });

    return (
        <Layout pageTitle="User Post">
            {/* <h1 className="text-h1">Ini Halaman User</h1> */}
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                {dataPost.map(post => {
                    return (
                        <>
                        <tbody>
                            <tr key={post.id} onClick={()=>router.push(`/post/${post.id}`)}>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        </tbody>
                        </>
                    )
                })}
            </table>
        </Layout>
    );
}

export async function getServerSideProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataPost = await res.json();
    return {
        props: {
            dataPost,
        }
    }
}