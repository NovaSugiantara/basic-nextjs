import Layout from '../components/Layout'
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Error404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);
    },[])
    return (
        <Layout pageTitle="Error 404">
        <div>
            <h1 className="title-error">Oopss...</h1>
            <h3 className="title-error">Halaman yang anda cari tidak ditemukan.</h3>
        </div>
        </Layout>
    )
}
