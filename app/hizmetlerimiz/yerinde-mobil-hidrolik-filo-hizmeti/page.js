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
            link_name: "Yerinde Mobil Hidrolik Filo Hizmeti",
            href: ""
        }
    ]
    return (
        <>
        <BackgroundBubbles />
    <Head>
        <title>Normhose | Yerinde Mobil Hidrolik Filo Hizmeti</title>
    </Head>
        <section className="py-20 px-5 lg:px-0">
            <BreadCrumb linkList={linkList}></BreadCrumb>
            <h1 className='container mx-auto text-4xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Yerinde Mobil Hidrolik Filo Hizmeti</h1>
            <div className='container mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='col-span-1'>
                    <Image src={'/yerinde-filo-hizmeti-1.jpg'} alt="yerinde-filo-hizmeti-1" className='block mx-auto' width={1920} height={1080} loading={'lazy'}></Image>
                </div>
                <div className='col-span-1'>
                    <Image src={'/yerinde-filo-hizmeti-2.png'} alt="yerinde-filo-hizmeti-2" className='block mx-auto' width={1920} height={1080} loading={'lazy'}></Image>
                </div>
            </div>
        </section>
        </>
    );
}

export default Hakkimizda;