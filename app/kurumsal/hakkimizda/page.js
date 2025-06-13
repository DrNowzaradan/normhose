import React from 'react';
import Image from 'next/image';
import BreadCrumb from '../../components/breadcrumb'
import Head from 'next/head'

function Hakkimizda() {
    const linkList = [
        {
            link_name: "Kurumsal",
            href: ""
        },
        {
            link_name: "Hakkımızda",
            href: ""
        }
    ]
    return (
        <>
    <Head>
        <title>Normhose | Hakkımızda</title>
    </Head>
        <section className="py-20">
            <BreadCrumb linkList={linkList}></BreadCrumb>
            <h1 className='container mx-auto text-4xl font-medium text-neutral-900 px-5 lg:px-0 ' data-aos="fade-right" data-aos-duration="200">Hakkımızda</h1>
            <div className='mt-20 px-5 lg:px-0 '>
                <div className='container mx-auto'>
                    <h2 className='text-2xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Misyonumuz</h2>
                    <p className='text-neutral-900 mt-10 text-base' data-aos="fade-right" data-aos-duration="200">
                        Normhose Hidrolik Bağlantı Teknolojileri A.Ş., hidrolik hortumlar ve bağlantı elemanları üretiminde sektörün önde gelen firmalarından biridir. Kalite, yenilik ve müşteri memnuniyeti odaklı hizmet anlayışımızla, otomotiv, inşaat, tarım ve endüstri sektörlerinde geniş bir müşteri portföyüne sahibiz. Ürünlerimiz, yüksek dayanıklılık ve güvenlik standartlarına uygun olarak üretilir. Profesyonel ekibimiz, yerinde tespit ve ölçü alma, mobil hidrolik filo hizmetleri gibi kapsamlı çözümler sunarak iş süreçlerinizi optimize eder. Normhose olarak, sürekli gelişim ve teknolojiye yatırım yaparak sektördeki liderliğimizi sürdürmeyi hedefliyoruz.
                    </p>
                </div>
            </div>
            <div className='mt-20 px-5 lg:px-0 '>
                <div className='container mx-auto'>
                    <Image src="/hakkimizda.jpg" alt="hakkimizda" className='block mx-auto' width={1920} height={1080} />
                </div>
            </div>
        </section>
        </>
    );
}

export default Hakkimizda;