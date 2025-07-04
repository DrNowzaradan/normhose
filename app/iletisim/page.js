import React from 'react';
import Contact from '../components/contact';
import Breadcrumb from "../components/breadcrumb"
import Head from 'next/head'

function page(props) {
    const linklist = [
        {
            link_name: "İletişim",
            href: ""
        }
    ]
    return (
        <>
    <Head>
        <title>Normhose | İletişim</title>
    </Head>
        <section>
            <Breadcrumb className={"mt-10"} linkList={linklist}></Breadcrumb>
            <Contact></Contact>
        </section>
        </>
    );
}

export default page;