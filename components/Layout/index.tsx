import Head from 'next/head';
import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
    children: ReactNode
    pageTitle:string;
}
export default function Layout(props: LayoutProps) {
    const { children ,pageTitle} = props;
    return (
        <>
            <Head>
                <title>Next JS Basic | {pageTitle}</title>
                <meta name="description" content="Website Next JS Basic" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    );
}
