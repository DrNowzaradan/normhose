import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPaintBrush, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
function productContent({title, img, desc, order, href}) {
    return (
        <section className={`grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8 ${order == 0 ? 'mt-0' : 'mt-32'}`}>
                    <div className="col-span-2">
                        <div className="title">
                            <h2 data-aos="fade-right">{title}</h2>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col lg:flex-row justify-between items-center xl:gap-x-8">
                        <div className={`${order % 2 === 0 ? 'lg:order-first' : 'lg:order-last'} mr-auto`} data-aos="fade-right">
                            <Image src={img} alt={title}
                            className="img-center img-fluid" width={300} height={300} />
                        </div>
                        <div >
                            <div className="grid grid-cols-10 gap-x-4 mb-3" data-aos="fade-left" data-aos-duration="600">
                                <div className="col-span-1 mt-5 ">
                                    <FontAwesomeIcon icon={faCog} className="lg:text-3xl text-2xl text-[#ff8900]" />
                                </div>
                                <div className="col-span-9">
                                    <h3 className=" leading-none mb-2 text-2xl font-semibold">Uygulama Çeşitliliği</h3>
                                    <p>Tüm mineral yağlar, çoğu sentetik yağlar, fosfat esterleri ile uyumludur.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 gap-x-4 mb-3" data-aos="fade-left" data-aos-duration="600">
                                <div className="col-span-1 mt-5 ">
                                    <FontAwesomeIcon icon={faPaintBrush} className="lg:text-3xl text-2xl text-[#ff8900]"/>
                                </div>
                                <div className="col-span-9 ">
                                    <h3 className=" leading-none mb-2 text-2xl font-semibold">Özelleştirilebilir</h3>
                                    <p>Araç şase rengi, filtrelerin mikronu, elektrik motoru, kumanda paneli partikül sayım cihazı özelleştirilebilir.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 gap-x-4 mb-3" data-aos="fade-left" data-aos-duration="600">
                                    <div className="col-span-1 mt-5 ">
                                    <FontAwesomeIcon icon={faHandshake} className="lg:text-3xl text-2xl text-[#ff8900]"/>
                                </div>
                                <div className="col-span-9 ">
                                    <h3 className=" leading-none mb-3 text-2xl font-semibold">Güvence</h3>
                                    <p>2 Yıl Boyunca Normoil Filtrasyon Garantisi.
                                    </p>
                                </div>
                            </div>
                             </div>
                    </div>
                    <div className="col-span-2" data-aos="fade-up">
                        <p className="leading-7 text-neutral-700">{desc}</p>
                    </div>
                    <div className="col-span-2">
                        <Link href={href} className="bg-[#ff8900] text-white font-semibold px-10 py-3 rounded-xl cursor-pointer hover:bg-[#ff8900]/80 transition-all duration-300">Detaylı İncele</Link>
                    </div>
                </section>
    );
}

export default productContent;