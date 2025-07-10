import React from 'react';
import Image from 'next/image';
import BreadCrumb from '../../components/breadcrumb'
import Head from 'next/head'
import BackgroundBubbles from '../../components/BackgroundBubbles';

function Hakkimizda() {
    const linkList = [
        {
            link_name: "Hizmetlerimiz",
            href: ""
        },
        {
            link_name: "Hidrolik Hortum Presleme",
            href: ""
        }
    ]
    return (
        <>
        <BackgroundBubbles />
    <Head>
        <title>Normhose | Hidrolik Hortum Presleme</title>
    </Head>
        <section className="py-20 px-5 lg:px-0">
            <BreadCrumb linkList={linkList}></BreadCrumb>
            <h1 className='container mx-auto text-4xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Hidrolik Hortum Presleme</h1>
            <div className='container mx-auto mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='col-span-1'>
                    <Image src={'/hidrolik-hortum-presleme-1.gif.crdownload'} alt="hidrolik-hortum-presleme-1" className='block mx-auto' width={1920} height={1080} loading={'lazy'}></Image>
                </div>
                <div className='col-span-1'>
                    <Image src={'/hidrolik-hortum-presleme-2.jpg'} alt="hidrolik-hortum-presleme-2" className='block mx-auto' width={1920} height={1080} loading={'lazy'}></Image>
                </div>
                <div className='col-span-1'>
                    <Image src={'/hidrolik-hortum-presleme-3.jpg'} alt="hidrolik-hortum-presleme-3" className='block mx-auto' width={1920} height={1080} loading={'lazy'}></Image>
                </div>
            </div>
        </section>
        </>
    );
}

export default Hakkimizda;