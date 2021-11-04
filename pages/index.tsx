import styles from '../styles/Home.module.css';
import Layout from '../components/Layout'
import Image from "next/image";


export default function Home() {
  return (
      <Layout pageTitle="Home Page">
        <Image src="/profil.png" width={300}  height={200} alt="profil"/>
      <h1 className={styles['text-homepage']}>Ini Website</h1>
      </Layout> 
  )
}
