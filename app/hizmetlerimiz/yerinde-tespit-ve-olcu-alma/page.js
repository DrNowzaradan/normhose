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
            link_name: "Yerinde Tespit ve Ölçü Alma",
            href: ""
        }
    ]
    return (
        <>
        <BackgroundBubbles />
    <Head>
        <title>Normhose | Yerinde Tespit ve Ölçü Alma</title>
    </Head>
        <section className="py-20 px-5 lg:px-0">
            <BreadCrumb linkList={linkList}></BreadCrumb>
            <h1 className='container mx-auto text-4xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Yerinde Tespit ve Ölçü Alma</h1>
            <div className='container mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-5'>
                <div className='col-span-1 row-span-1'>
                    <Image src={'/yerinde-tespit-ve-olcu-alma-1.jpg'} alt="yerinde tespit ve ölçü alma" className='block mx-auto' width={1920} height={1080} loading={'lazy'}></Image>
                </div>
                <div className='col-span-1 row-span-1 row-start-2'>
                    <Image src={'/yerinde-tespit-ve-olcu-alma-3.jpg'} alt="yerinde tespit ve ölçü alma 3" className='block mx-auto h-full' width={1920} height={1080} loading={'lazy'}></Image>
                </div>
                <div className='col-span-1 row-span-2'>
                    <Image src={'/yerinde-tespit-ve-olcu-alma-2.jpg'} alt="yerinde tespit ve ölçü alma 2" className='block mx-auto h-full' width={1920} height={1080} loading={'lazy'}></Image>
                </div>
                
            </div>
        </section>
        </>
    );
}

export default Hakkimizda;