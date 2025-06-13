import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
function Footer() {
    return (
        <footer className='px-8 lg:px-0'>
            
            <Image className="footer-bg-img" src="/footer-logo.jpg" alt="footer bg görsel" width={1920} height={1080} />
            <div className="footer-top">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-8">
                        <div className="footer-widget col-span-1">
                            <Image width={200} height={200}  src="/normhose-logo.svg" alt="normhose-logo" />
                            <div className="font-medium mt-3 text-base">Normhose Hidrolik Hizmetleri</div>
                            <div className="mt-3"><FontAwesomeIcon icon={faMapMarkerAlt} className='fa-icon mr-2 text-[#ff8900]' />Ramazanoğlu Mah. Öğrenci Sok. No:28 Kurtköy
                                Pendik -İstanbul -Türkiye</div>
                            <div className="block lg:hidden pt20"></div>
                        </div>
                        <div className="footer-widget col-span-1 lg:mx-auto">
                            <h3>İLETİŞİM</h3>
                            <ul className="list-none">
                                <li className="number"><FontAwesomeIcon icon={faPhone} className='fa-icon mr-2 text-[#ff8900]' /> +90 (0216) 415 19 00</li>
                                <li><FontAwesomeIcon icon={faEnvelope} className='fa-icon mr-2 text-[#ff8900]' /> info@normhose.com.tr</li>
                            </ul>
                            <ul className="list-inline flex social mt-9 mb-2 p-0">
                                <li className="list-inline-item">
                                    <Link href="https://www.instagram.com/normoilfiltration" target='_blank'>
                                        <FontAwesomeIcon icon={faInstagram} className='fa-icon mr-2 text-white hover:text-[#ff8900] text-xl' />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="https://tr.linkedin.com/company/normoil-filtrasyon-teknolojileri" target='_blank'>
                                        <FontAwesomeIcon icon={faLinkedin} className='fa-icon mr-2 text-white hover:text-[#ff8900] text-xl' />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="https://m.facebook.com/normoil.filtrasyon/" target='_blank'>
                                        <FontAwesomeIcon icon={faFacebook} className='fa-icon mr-2 text-white hover:text-[#ff8900] text-xl' />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="https://www.youtube.com/channel/UCWAe7Oey0hAIDhlm1dQ_azw/about" target='_blank'>
                                        <FontAwesomeIcon icon={faYoutube} className='fa-icon mr-2 text-white hover:text-[#ff8900] text-xl' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-widget col-span-1">
                            <div className='grid grid-cols-4 place-items-center gap-y-10'>
                                <div className='col-span-4 mr-auto lg:mx-auto'>
                                    <Link href="https://protamgroup.com.tr" target='_blank'>
                                        <Image width={200} height={200} src="/protam-group-turuncu-beyaz.png" alt="protam-logo" />
                                    </Link>
                                </div>
                                <div className='col-span-2 mx-auto'>
                                    <Link href="https://normoil.com.tr" target='_blank'>
                                        <Image width={150} height={100} src="/normoil-beyaz-logo.png" alt="normoil logo" />
                                    </Link>
                                </div>
                                <div className='col-span-2 mx-auto'>
                                    <Link href="https://teknonorm.com.tr" target='_blank'>
                                        <Image width={150} height={100} src="/teknonorm-logo.svg" alt="teknonorm logo" />
                                    </Link>
                                </div>
                                <div className='col-span-2 mx-auto'>
                                    <Link href="https://norme.com.tr" target='_blank'>
                                        <Image width={100} height={100} src="/norme-logo.svg" alt="norme logo" />
                                    </Link>
                                </div>
                                <div className='col-span-2 mx-auto'>
                                    <Link href="https://protamyacht.com.tr" target='_blank'>
                                        <Image width={150} height={100} src="/protam-yacht-logo.svg" alt="protam yacht logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 mt-10">
                        <div className="col-span-1">
                            <h5>Normhose</h5>
                            <ul className="list-none footer-links mt-3">
                                <li><Link href="/kurumsal/hakkimizda">Hakkımızda</Link></li>
                                <li><Link href="/kurumsal/degerlerimiz">Değerlerimiz</Link></li>
                                {/* <li><Link href="/blog">Blog</Link></li> */}
                                <li><Link href="/iletisim">İletişim</Link></li>
                            </ul>
                        </div>
                        <div className="col-span-2 grid grid-cols-2">
                            <h5 className='col-span-2'>Sektörler</h5>
                            <ul className="list-none footer-links mt-3 col-span-2 md:col-span-1">
                                <li><Link href="/sektorler/otomotiv">Otomotiv</Link></li>
                                <li><Link href="/sektorler/endustriyel-tesisler">Endüstriyel Tesisler</Link></li>
                                <li><Link href="/sektorler/mobil-hidrolik">Mobil Hidrolik</Link></li>
                                <li><Link href="/sektorler/denizcilik">Denizcilik</Link></li>
                                <li><Link href="/sektorler/savunma-sanayi">Savunma Sanayi</Link></li>
                                <li><Link href="/sektorler/perakende">Perakende</Link></li>
                                <li><Link href="/sektorler/enerji">Enerji</Link></li>
                                <li><Link href="/sektorler/endustriyel">Endüstriyel</Link></li>
                            </ul>
                            <ul className="list-none footer-links mt-3 col-span-2 md:col-span-1">
                                <li><Link href="/sektorler/geri-donusum">Geri Dönüşüm</Link></li>
                                <li><Link href="/sektorler/petro-kimya-offshore">Petro Kimya – Offshore</Link></li>
                                <li><Link href="/sektorler/madencilik">Madencilik</Link></li>
                                <li><Link href="/sektorler/marin">Marin</Link></li>
                                <li><Link href="/sektorler/mobil">Mobil</Link></li>
                                <li><Link href="/sektorler/deniz-motoru-madeni-yag-aritma-programi">Deniz Motoru Madeni Yağ Arıtma Programı</Link></li>
                                <li><Link href="/sektorler/klas-onayi-iacs-kurallari-ve-denizcilik-yonetmelikleri">Klas Onayı/IACS Kuralları ve Denizcilik Yönetmelikleri</Link></li>
                            </ul>
                        </div>
                        {/* <div className="col-span-1">
                            <h5>Ürünler</h5>
                            <ul className="list-none footer-links mt-3">
                                <li><Link href="/urunler/normoil-makineleri">Normoil Makineleri</Link></li>
                                <li><Link href="/urunler/filtrasyon-makineleri">Filtrasyon Makineleri</Link></li>
                                <li><Link href="/urunler/akiskan-yonetim-sistemleri">Akışkan Yönetim Sistemleri</Link></li>
                                <li><Link href="/urunler/durum-izleme">Durum İzleme</Link></li>
                                <li><Link href="/urunler/filtreler">Filtreler</Link></li>
                                <li><Link href="/urunler/ozel-cozumler/flushing-makineleri">Flushing Makineleri</Link></li>
                                <li><Link href="/urunler/dokuntu-kitleri">Döküntü Kitleri</Link></li>
                            </ul>
                        </div> */}
                        <div className="col-span-1">
                            <h5>Hizmetlerimiz</h5>
                            <ul className="list-none footer-links mt-3">
                                <li><Link href="/hizmetlerimiz/hidrolik-hortum-presleme">Hidrolik Hortum Presleme</Link></li>
                                <li><Link href="/hizmetlerimiz/hidrolik-hortum-statik-testi">Hidrolik Hortum Statik Testi</Link></li>
                                <li><Link href="/hizmetlerimiz/hidrolik-hortum-patlatma-testi">Hidrolik Hortum Patlatma Testi</Link></li>
                                <li><Link href="/hizmetlerimiz/yerinde-tespit-ve-olcum-alma">Yerinde Tespit ve Ölçü Alma</Link></li>
                                <li><Link href="/hizmetlerimiz/yerinde-mobil-hidrolik-filo-hizmeti">Yerinde Mobil Hidrolik Filo Hizmeti</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 mx-auto">
                    <div className="grid grid-cols-1 gap-y-4">
                        <div className="col-span-1 credits">
                            <p>© 2025 Normhose tüm hakları saklıdır. <a href="https://protamgroup.com">Protam Group</a> markasıdır.</p>
                            <p className="small">
                                <a href="https://flexitsocial.com">Flexit Social</a> tarafından geliştirildi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='fixed bottom-28 right-0 flex flex-col z-50'>
                <a href="https://api.whatsapp.com/send?phone=+905330325348&amp;text=Merhaba" target='_blank' className="relative py-3 px-4 bg-[#25D366] text-2xl rounded-ss-xl"
                id=""><FontAwesomeIcon icon={faWhatsapp} className=' text-white' /></a>
            
                <a href="#" className=" py-3 px-4 bg-[#ff8900] text-2xl relative rounded-es-xl" id=""><FontAwesomeIcon icon={faAngleUp} className=' text-white'/></a>
            </div>
           
        </footer>
    );
}

export default Footer;