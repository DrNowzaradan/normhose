'use client'
import '../globals.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useState, useEffect, Fragment, useRef } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  Transition,
} from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faAngleDown, faMapMarkerAlt, faPhone, faEnvelope, faClose, faChevronDown, faTint } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
//import productsData from '../../../data.json'; 

const menuOrder = ["corporate", "sectors", "products", "services"];
const navigation = {
  // products: [
  //   {
  //     id: 'second-col',
  //     name: 'Filtrasyon Makineleri',
  //     href: '/urunler/filtrasyon-makineleri',
  //     items: [
  //       { name: 'Yağ Filtrasyonu', href: '/urunler/filtrasyon-makineleri/yag-filtrasyonu' },
  //       { name: 'Yakıt Filtrasyonu', href: '/urunler/filtrasyon-makineleri/yakit-filtrasyonu' },
  //     ],
  //   },
  //   {
  //     id: 'third-col',
  //     name: 'Akışkan Yönetim Sistemleri',
  //     href: '/urunler/akiskan-yonetim-sistemleri',
  //     items: [
  //       { name: 'Aktarma ve Yönetim Sistemleri', href: '/urunler/akiskan-yonetim-sistemleri/aktarma-ve-yonetim-sistemleri' },
  //       { name: 'Taşınabilir İkmal Odaları', href: '/urunler/akiskan-yonetim-sistemleri/tasinabilir-ikmal-odalari' },
  //     ],
  //   },
  //   {
  //     id: 'fourth-col',
  //     name: 'Durum İzleme',
  //     href: '/urunler/durum-izleme',
  //     items: [
  //       { name: 'Hat Tipi Ölçüm', href: '/urunler/durum-izleme/hat-tipi-olcum' },
  //       { name: 'Saha Ölçüm', href: '/urunler/durum-izleme/saha-olcum' },
  //       { name: 'Özel Ürünler', href: '/urunler/durum-izleme/ozel-urunler' },
  //     ],
  //   },
  //   {
  //     id: 'fifth-col',
  //     name: 'Filtreler',
  //     href: '/urunler/filtreler',
  //     items: [
  //       { name: 'Yağ Filtreleri', href: '/urunler/filtreler/yag-filtreleri' },
  //       { name: 'Yakıt Filtreleri', href: '/urunler/filtreler/yakit-filtreleri' },
  //       { name: 'Hidrolik Filtreler', href: '/urunler/filtreler/hidrolik-filtreler' },
  //       { name: 'Nem Tutucular', href: '/urunler/filtreler/nem-tutucular' },
  //     ],
  //   },
  //   {
  //     id: 'eight-col',
  //     name: 'Döküntü Kitleri',
  //     href: '/urunler/dokuntu-kitleri',
  //     items: [
  //       { name: 'Absorban Ürünler', href: '/urunler/dokuntu-kitleri/absorban-urunler' },
  //       { name: 'Çanta Kitleri', href: '/urunler/dokuntu-kitleri/canta-kitleri' },
  //       { name: 'Yağ Döküntü Kitleri', href: '/urunler/dokuntu-kitleri/yag-dokuntu-kitleri' },
  //     ],
  //   },
  //   {
  //     id: 'ninth-col',
  //     name: 'Su Ayırma',
  //     href: '/urunler/su-ayirma',
  //     items: [
  //       { name: 'Yağdan Su Ayırma', href: '/urunler/su-ayirma/yagdan-su-ayirma' },
  //       { name: 'Yakıttan Su Ayırma', href: '/urunler/su-ayirma/yakittan-su-ayirma' },
  //     ],
  //   },
  //   {
  //     id: 'ten-col',
  //     name: 'Vernik Alma',
  //     href: '/urunler/vernik-alma',
  //     items: [
  //       { name: 'Soğutuculu', href: '/urunler/vernik-alma/sogutuculu' },
  //       { name: 'Elektrostatik', href: '/urunler/vernik-alma/elektrostatik' },
  //     ],
  //   },
  //   {
  //     id: 'eleventh-col',
  //     name: 'Flushing',
  //     href: '/urunler/flushing',
  //     items: [
  //       { name: 'Konteynır Flushing', href: '/urunler/flushing/konteynir-flushing' },
  //       { name: 'Standart Flushing', href: '/urunler/flushing/standart-flushing' },
  //     ],
  //   },
  //   {
  //     id: 'twelwe-col',
  //     name: 'Pickling',
  //     href: '/urunler/pickling',
  //     items: [
  //       { name: 'Konteynır Pickling', href: '/urunler/pickling/konteynir-pickling' },
  //       { name: 'Standart Pickling', href: '/urunler/pickling/standart-pickling' },
  //     ],
  //   },
  // ],
  corporate: [
    { name: 'Hakkımızda', href: '/kurumsal/hakkimizda' },
    { name: 'Değerlerimiz', href: '/kurumsal/degerlerimiz' },
  ],
  services: [
    { name: 'Hidrolik Hortum Presleme', href: '/hizmetlerimiz/hidrolik-hortum-presleme' },
    { name: 'Hidrolik Hortum Statik Testi', href: '/hizmetlerimiz/hidrolik-hortum-statik-testi' },
    { name: 'Hidrolik Hortum Patlatma Testi', href: '/hizmetlerimiz/hidrolik-hortum-patlatma-testi' },
    { name: 'Yerinde Tespit ve Ölçü Alma', href: '/hizmetlerimiz/yerinde-tespit-ve-olcu-alma' },
    { name: 'Yerinde Mobil Hidrolik Filo Hizmeti', href: '/hizmetlerimiz/yerinde-mobil-hidrolik-filo-hizmeti' },
  ],
  sectors: [
    {
      id: 'first-col',
      name: 'Endüstriyel Tesisler',
      href: '/sektorler/endustriyel-tesisler',
      items: [
        { name: 'Petrol', href: '/sektorler/endustriyel-tesisler/petrol' },
        { name: 'Asansör', href: '/sektorler/endustriyel-tesisler/asansor' },
        { name: 'Ağaç İşleme', href: '/sektorler/endustriyel-tesisler/agac-isleme' },
        { name: 'Kağıt Endüstrisi', href: '/sektorler/endustriyel-tesisler/kagit-endustrisi' },
        { name: 'Makine İmalatları', href: '/sektorler/endustriyel-tesisler/makine-imalatlari' },
        { name: 'Plastik ve Alüminyum End. Makineleri', href: '/sektorler/endustriyel-tesisler/plastik-ve-aluminyum-endustrisi-makineleri' },
      ],
    },
    {
      id: 'second-col',
      name: '',
      href: '',
      items: [
        { name: 'Kompresör', href: '/sektorler/endustriyel-tesisler/kompresor' },
        { name: 'Demir Çelik Fabrikaları', href: '/sektorler/endustriyel-tesisler/demir-celik-fabrikalari' },
        { name: 'Jeotermal Santraller', href: '/sektorler/endustriyel-tesisler/jeotermal-santraller' },
        { name: 'Çimento Endüstrisi', href: '/sektorler/endustriyel-tesisler/cimeto-endustrisi' },
        { name: 'Hidroelektrik Santraller', href: '/sektorler/endustriyel-tesisler/hidroelektrik-santraller' },
      ],
    },
    {
      id: 'third-col',
      name: 'Savunma Sanayi',
      href: '/sektorler/savunma-sanayi',
      items: [
        { name: 'Özel Projeler', href: '/sektorler/savunma-sanayi/ozel-projeler' },
        { name: 'Kara Araçları', href: '/sektorler/savunma-sanayi/kara-araclari' },
        { name: 'Deniz İşletme ve Yüzen Araçları', href: '/sektorler/savunma-sanayi/deniz-isletme-ve-yüzen-araclari' },
        { name: 'Hava Savunma ve Uçan Araçları', href: '/sektorler/savunma-sanayi/hava-savunma-ve-ucan-araclari' },
      ],
    },
    {
      id: 'fourth-col',
      name: 'Mobil',
      href: '/sektorler/mobil',
      items: [
        { name: 'İnşaat', href: '/sektorler/mobil/insaat' },
        { name: 'Araç Satış Ekipmanlar', href: '/sektorler/mobil/arac-satis-ekipmanlari' },
        { name: 'İş Makineleri', href: '/sektorler/mobil/is-makineleri' },
        { name: 'Maden Grubu', href: '/sektorler/mobil/maden-grubu' },
        { name: 'Tarım Grubu', href: '/sektorler/mobil/tarim-grubu' },
        { name: 'Raylı Sistemler', href: '/sektorler/mobil/rayli-sistemler' },
      ],
    },
    {
      id: 'fifth-col',
      name: 'Marin',
      href: '/sektorler/marin',
      items: [
        { name: 'Tersane Grubu ve Yüzen Araç Sistemleri', href: '/sektorler/marin/tersane-grubu-ve-yuzen-arac-sistemleri' },
        { name: 'Mega Yat Projeleri', href: '/sektorler/marin/mega-yat-projeleri' },
      ],
    },
    {
      id: 'eight-col',
      name: 'Otomotiv ve OEM',
      href: '/sektorler/otomotiv-ve-oem',
      items: [
        { name: 'Otobüs', href: '/sektorler/otomotiv-ve-oem/otobus' },
        { name: 'Traktör', href: '/sektorler/otomotiv-ve-oem/traktor' },
        { name: 'Kamyon ve Tır', href: '/sektorler/otomotiv-ve-oem/kamyon-ve-tir' },
      ],
    },
    {
      id: 'ninth-col',
      name: 'Madencilik',
      href: '/sektorler/madencilik',
      items: [
        { name: 'TBM Makineleri', href: '/sektorler/madencilik/tbm-makineleri' },
        { name: 'Farekazık ve ROK Makineleri', href: '/sektorler/madencilik/farekazik-ve-rok-makineleri' },
        { name: 'Mermer Makineleri', href: '/sektorler/madencilik/mermer-makineleri' },
      ],
    },
    {
      id: 'ten-col',
      name: 'Petrokimya',
      href: '/sektorler/petrokimya',
      items: [
        { name: 'Deniz ve Kara Petrol Aktarma Makineleri', href: '/sektorler/petrokimya/deniz-ve-kara-petrol-aktarma-makineleri' },
      ],
    },
    {
      id: 'eleventh-col',
      name: 'Geri Dönüşüm',
      href: '/sektorler/geri-donusum',
      items: [
      ],
    },
  ],
}

export default function Header() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      console.log('masaüstü')
      Aos.init({
        disable: false
      });  // Masaüstü ekranlarda AOS'u başlat
  } else {
      console.log('mobil')
      Aos.init({
        disable: true
      });  // Mobilde AOS'u başlatma
  }

  // Ekran boyutu değiştiğinde yeniden kontrol et
  const handleResize = () => {
      if (window.innerWidth > 1024) {
          Aos.init({
            disable: false
          });
      } else {
          Aos.init({
            disable: true
          });
      }
  };

    // İlk renderda ekran genişliğini kontrol et
    handleResize();

    // Ekran boyutu değiştiğinde tekrar kontrol et
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize); // Temizleme işlemi
    };
}, []);
  const [mobileMenu, setMobileMenu] = useState(false)
  const [displaySearchBar, setDisplaySearchBar] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [openSections, setOpenSections] = useState({
    corporate: false,
    sectors: false,
    products: false,
    services: false,
  });
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  //const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  //const megamenuRef = useRef(null);
  //const [hoveredCategoryImage, setHoveredCategoryImage] = useState(null); // Hoverlanan alt kategori görseli

  // Alt kategori hover edildiğinde ilk ürünün görselini güncelle
  // const handleSubCategoryHover = (subCategory) => {
  //     // Alt kategoriyi filtrele ve ilk ürünün resmini al
  //     const firstProduct = productsData.find(product =>
  //         product.subCategory.includes(subCategory) // Kategoriye göre filtrele
  //     );
  //     if (firstProduct) {
  //         setHoveredCategoryImage(firstProduct.img); // İlk ürünün resmini güncelle
  //     }
  // };
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (megamenuRef.current && !megamenuRef.current.contains(event.target)) {
  //       setIsMegaMenuOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const toggleSearchBar = () => {
    setDisplaySearchBar(!displaySearchBar)
    setFilteredProducts([]);
  }

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Ürün filtreleme fonksiyonu
  function searchProducts(value) {
    if (value.length >= 3) {
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    } else {
        setFilteredProducts([]);
    }
  }

  //Sayfa değişiminde menüyü kapatır
  const handleMenuClose = () => {
    setHoveredDropdown(null)
  };

  return (
    <>
        {/* Search Bar */}
        {/* {displaySearchBar && (
            <>
                <div id="searchBackdrop" className="search-backdrop" onClick={() => setDisplaySearchBar(false)}>search</div>
                    <div id="searchOverlay" className="search-overlay" data-aos="fade-down" data-aos-leave>
                        <div className="container mx-auto px-4">
                            <div className="search-content">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-bold text-neutral-900">Arama yap</h3>
                                    <button onClick={() => toggleSearchBar()} className="text-neutral-600 hover:text-[#ff8900] cursor-pointer">
                                        <FontAwesomeIcon className="fa-icon text-xl mb-3" icon={faClose}></FontAwesomeIcon>
                                    </button>
                                </div>
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  placeholder="Aramak istediğiniz ürünü yazın..."
                                  onKeyUp={(e) => searchProducts(e.target.value)}
                                />

                                <div id="searchResults" className="search-results mt-4">
                                  {filteredProducts.map(product => (
                                    <div key={product.id} className="p-2 border-b border-gray-200 hover:bg-gray-100 group">
                                      <Link onClick={() => setDisplaySearchBar(false)} href={product.link} className="flex items-center">
                                        <Image src={product.img} alt={product.name} width={1920} height={1080} className="w-32 h-24 mr-8" />
                                        <div className="flex flex-col gap-1">
                                          <div className="text-neutral-800 font-medium text-base group-hover:text-[#ff8900]">{product.name}</div>
                                          <div className="text-neutral-700  text-[12px] group-hover:text-[#ff8900]">{product.subCategory}</div>
                                        </div>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )} */}
      {/* Mobile menu */}
      <Transition show={mobileMenu} as={Fragment}>
      <Dialog onClose={setMobileMenu} className="relative z-50 lg:hidden">
        {/* Backdrop (Karartma Efekti) */}
        <TransitionChild
          as={Fragment}
          enter="transition-opacity duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/50" />
        </TransitionChild>

        <div className="fixed inset-0 z-40 flex">
          {/* Mobile Menü Paneli */}
          <TransitionChild
            as={Fragment}
            enter="transition-transform duration-300 ease-in-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-300 ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pt-5 pb-2 justify-between">
                <Link href="/">
                  <span className="sr-only">Normhose Hidrolik</span>
                  <Image
                    width={200}
                    height={70}
                    alt="üst menü logo"
                    src="/normhose.png"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenu(false)}
                  className="w-10 h-10 relative mt-5 cursor-pointer hover:bg-neutral-100 inline-flex items-center justify-center rounded-full p-2 text-neutral-700"
                >
                  <FontAwesomeIcon className="text-2xl" icon={faClose}  />
                </button>
              </div>

              {/* Mobile menu links */}
              <div className="space-y-5 px-4 py-6">
                <Link href="/" onClick={() => setMobileMenu(false)} className="block text-base font-medium text-neutral-900 hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md">
                  ANASAYFA
                </Link>
                <div>
                <button
                  onClick={() => toggleSection('corporate')}
                  className="flex justify-between items-center text-base font-medium text-neutral-900 w-full text-left hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md"
                >
                  KURUMSAL
                  <FontAwesomeIcon className="fa-icon" icon={faChevronDown} />
                </button>
                {openSections.corporate && (
                  <div className="mt-2 space-y-2 px-2">
                    {navigation.corporate.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setMobileMenu(false)} className="block text-sm text-neutral-700 hover:text-[#ff8900]">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleSection('sectors')}
                  className="flex justify-between items-center text-base font-medium text-neutral-900 w-full text-left hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md"
                >
                  SEKTÖRLER
                  <FontAwesomeIcon className="fa-icon" icon={faChevronDown} />
                </button>
                {openSections.sectors && (
                  <div className="mt-2 space-y-2 px-2">
                    {navigation.sectors.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setMobileMenu(false)} className="block text-sm text-neutral-700 hover:text-[#ff8900]">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* <div>
                <div className="flex justify-between items-center text-base font-medium text-neutral-900 w-full text-left ">
                  <Link href="/urunler" onClick={() => setMobileMenu(false)} className="hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md">
                    ÜRÜNLER
                  </Link>
                  <button
                    onClick={() => toggleSection('products')}
                    className="flex items-center hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md"
                  >
                    <FontAwesomeIcon className="fa-icon" icon={faChevronDown} />
                  </button>
                </div>
                {openSections.products && (
                  <div className="mt-3 space-y-2 px-2">
                    <Link href={'/urunler/normoil-makineleri'} id={`first-col-heading`} onClick={() => setMobileMenu(false)} className="block text-sm font-medium text-neutral-900 hover:text-[#ff8900]">
                      Normoil Makineleri
                    </Link>
                    {navigation.products.map((product) => (
                      <div key={product.id}>
                        <Link href={product.href} onClick={() => setMobileMenu(false)} className="block text-sm font-medium text-neutral-900 hover:text-[#ff8900]">{product.name}</Link>
                        <div className="mt-2 ml-4 space-y-2">
                          {product.items.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setMobileMenu(false)} className="block text-sm text-neutral-800 hover:text-[#ff8900] ">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div> */}
              <div>
                <div className="flex justify-between items-center text-base font-medium text-neutral-900 w-full text-left ">
                  <Link href="/hizmetlerimiz" onClick={() => setMobileMenu(false)} className="hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md">
                    HİZMETLERİMİZ
                  </Link>
                  <button
                    onClick={() => toggleSection('services')}
                    className="flex justify-between items-center text-base font-medium text-neutral-900  text-left hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md"
                  >
                    <FontAwesomeIcon className="fa-icon" icon={faChevronDown} />
                  </button>
                </div>
                {openSections.services && (
                  <div className="mt-2 space-y-2 px-2">
                    {navigation.services.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setMobileMenu(false)} className="block text-sm text-neutral-700 hover:text-[#ff8900]">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/blog" onClick={() => setMobileMenu(false)} className="block text-base font-medium text-neutral-900 hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md">
                BLOG
              </Link>
              <Link href="/iletisim" onClick={() => setMobileMenu(false)} className="block text-base font-medium text-neutral-900 hover:text-[#ff8900] hover:bg-neutral-100 px-2 py-1 rounded-md">
                İLETİŞİM
              </Link>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>

        <div className="hidden lg:flex h-10 items-center justify-center bg-neutral-900 px-4 text-sm font-medium text-white sm:px-6 lg:px-6 xl:px-24 z-20">
            <div className="w-full flex justify-between items-center">
                <div className="info-container inline-flex gap-3 text-white font-medium divide-x-2 divide-neutral-500">
                    <div className='pr-3'><FontAwesomeIcon className="size-4 mr-1 " style={{color: '#ff8900'}} icon={faMapMarkerAlt} ></FontAwesomeIcon> Öğrenci Sk. No:28, 34906 Pendik/İstanbul</div>
                    <div className="pr-3"><FontAwesomeIcon className="size-4 mr-1" style={{color: '#ff8900'}} icon={faPhone} ></FontAwesomeIcon> 0(216) 415 19 00</div>
                    <div className=""><FontAwesomeIcon className="size-4 mr-1" style={{color: '#ff8900'}} icon={faEnvelope} ></FontAwesomeIcon>  info@normhose.com.tr</div>
                </div>
                <ul className="list-inline social inline-flex gap-3 items-center" style={{margin: 0}}>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com/normhosehydraulic" target='_blank' className='text-white text-lg hover:text-[#ff8900] transition-all duration-300'>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/company/normhose/" target='_blank' className='text-white text-lg hover:text-[#ff8900] transition-all duration-300'>
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                    </li>
                    {/* <li className="list-inline-item">
                        <a href="https://m.facebook.com/normoil.filtrasyon/" target='_blank' className='text-white text-lg hover:text-[#ff8900] transition-all duration-300'>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </a>
                    </li> */}
                    <li className="list-inline-item">
                        <a href="https://www.youtube.com/@Normhose" target='_blank' className='text-white text-lg hover:text-[#ff8900] transition-all duration-300'>
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
                {/* <div className="info-container inline-flex gap-3 text-white font-medium">
                    <button className="search-trigger" onClick={() => toggleSearchBar()}>
                        Arama yap <FontAwesomeIcon className="fa-icon ms-2" icon={faMagnifyingGlass} ></FontAwesomeIcon>
                    </button>
                </div> */}
            </div>
        </div>

        <nav aria-label="Top" className="z-20 top-0 sticky h-[100px] mx-auto w-full px-4 sm:px-6 lg:px-6 xl:px-24 shadow-md bg-white">
          <div className='h-full'>
            <div className="flex h-full items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <span className="sr-only">Normhose Hidrolik</span>
                  <Image
                    width={200}
                    height={70}
                    alt="üst menü logo"
                    src="/normhose.png"
                  />
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenu(true)}
                className="relative cursor-pointer rounded-md bg-white hover:bg-[#ff8900] p-2 text-neutral-900 hover:text-white text-base lg:hidden flex items-center justify-center mx-auto transition-all"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <FontAwesomeIcon className="fa-icon" icon={faBars}></FontAwesomeIcon>
              </button>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:mx-auto lg:flex">
                <div className="flex h-full space-x-8">
                    <Link
                      key="home"
                      href={"/"}
                      className="flex items-center text-sm font-semibold text-neutral-900 hover:text-[#ff8900]"
                    >
                      ANASAYFA
                    </Link>
                    <div
                      className="relative"
                      onMouseEnter={() => setHoveredDropdown("kurumsal")}
                      onMouseLeave={() => setHoveredDropdown(null)}
                    >
                      <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-neutral-900 hover:text-[#ff8900] cursor-pointer">
                        KURUMSAL
                        <FontAwesomeIcon className="fa-icon" icon={faAngleDown} aria-hidden="true" />
                      </button>
                            
                      <AnimatePresence>
                        {hoveredDropdown === "kurumsal" && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        
                            className="absolute w-fit max-w-md left-0 mt-2 p-3 overflow-hidden rounded-xl bg-white ring-1 shadow-lg ring-gray-900/5"
                          >
                            {navigation.corporate.map((item) => (
                              <div
                                key={item.name}
                                className="group relative flex items-center gap-x-6 rounded-md py-3 px-5 text-sm/6 hover:bg-gray-100"
                              >
                                
                                <div className="flex-auto">
                                  <Link href={item.href} className="block font-medium transition text-neutral-900 hover:text-[#ff8900] text-nowrap">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>


                    <div className="flex items-center" onMouseEnter={() => setHoveredDropdown("sektorler")} onMouseLeave={() => setHoveredDropdown(null)}>
                      <Link
                        href={"/sektorler"}
                        className="flex items-center text-sm font-semibold text-neutral-900 hover:text-[#ff8900] mr-2"
                        onClick={() => setHoveredDropdown(null)}
                      >
                        SEKTÖRLER
                      </Link>
                      <div key="urunler-dropdown" className="flex relative">
                        <motion.div
                           variants={{
                            initial: { y: 0 },
                            bouncing: { y: [0, -5], transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }
                          }}
                          initial="initial"
                          whileHover="bouncing"
                          onHoverEnd={(e) => e.target.style.transform = "translateY(0px)"}
                        >
                          <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-neutral-900 hover:text-[#ff8900] cursor-pointer">
                            <FontAwesomeIcon className="fa-icon" icon={faAngleDown} aria-hidden="true" />
                          </button>
                        </motion.div>
                        
                        <AnimatePresence>
                          {hoveredDropdown === "sektorler" && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="fixed top-[110px] lg:left-0 2xl:left-[15%] w-[1280px] bg-white border rounded-xl shadow-lg p-3 z-50"
                            >
                            <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                              {navigation.sectors.map((sector) => (
                                <div className="col-span-1 gap-x-8 gap-y-10 text-sm" key={sector.id}>
                                    <div key={sector.name}>
                                      <Link href={sector.href} onClick={handleMenuClose}  id={`${sector.name}-heading`} className="font-semibold text-gray-900 hover:text-[#ff8900]">
                                        {sector.name || <br></br>}
                                      </Link>
                                      <ul
                                        role="list"
                                        aria-labelledby={`${sector.name}-heading`}
                                        className="mt-6 sm:mt-4 "
                                      >
                                        {sector.items.map((item, index) => (
                                          <li key={item.name} 
                                          // onMouseEnter={() => handleSubCategoryHover(item.name)} 
                                          // onMouseLeave={() => setHoveredCategoryImage(null)} 
                                          className={`flex border-b ${index === sector.items.length - 1 ? 'border-b-0' : ''}`}>
                                            <Link href={item.href} onClick={handleMenuClose}  className="px-2 py-1 my-1 hover:bg-neutral-100 hover:text-[#ff8900] text-[13px] rounded-md text-neutral-800">
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                </div>
                              ))}
                              <div className="col-span-1 gap-x-8 gap-y-10 text-sm row-start-2 col-start-4" key="eight-col">
                                    <div key="eight-col">
                                      {/* <Image id={`eight-col-heading`} className="font-medium text-gray-900 h-[225px] w-fit rounded-xl" src={hoveredCategoryImage || '/noyas-m-1a.webp'} width={1000} height={1000} alt='ürün kategori görseli'/> */}
                                    </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* <div className="flex items-center" onMouseEnter={() => setHoveredDropdown("urunler")} onMouseLeave={() => setHoveredDropdown(null)}>
                      <Link
                        href={"/urunler"}
                        className="flex items-center text-sm font-semibold text-neutral-900 hover:text-[#ff8900] mr-2"
                        onClick={() => setHoveredDropdown(null)}
                      >
                        ÜRÜNLER
                      </Link>
                      <div key="urunler-dropdown" className="flex relative">
                        <motion.div
                           variants={{
                            initial: { y: 0 },
                            bouncing: { y: [0, -5], transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }
                          }}
                          initial="initial"
                          whileHover="bouncing"
                          onHoverEnd={(e) => e.target.style.transform = "translateY(0px)"}
                        >
                          <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-neutral-900 hover:text-[#ff8900] cursor-pointer">
                            <FontAwesomeIcon className="fa-icon" icon={faAngleDown} aria-hidden="true" />
                          </button>
                        </motion.div>
                        
                        <AnimatePresence>
                          {hoveredDropdown === "urunler" && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="fixed top-[110px] lg:left-0 2xl:left-[15%] w-[1280px] bg-white border rounded-xl shadow-lg p-3 z-50"
                            >
                            <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                <div className="col-span-1 gap-x-8 gap-y-10 text-sm" key="first-col">
                                    <div key="first-col flex flex-col gap-y-2">
                                        <div>
                                            <Link href={'/urunler/normoil-makineleri'} onClick={handleMenuClose}  id={`first-col-heading`} className="w-fit shining-button relative flex justify-between items-center px-4 py-3 bg-[#ff8900] rounded-xl font-semibold text-white">
                                                  Normoil Makineleri
                                                  <FontAwesomeIcon className="fa-icon ml-2" icon={faTint} />
                                            </Link>
                                        </div>
                                        <div className='mt-6'>
                                            <Link href={'/urunler'} id={`first-col-heading`} onClick={handleMenuClose}  className="font-semibold text-gray-900 hover:text-[#ff8900]">
                                                Tüm Ürünler
                                            </Link>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                              {navigation.products.map((product) => (
                                <div className="col-span-1 gap-x-8 gap-y-10 text-sm" key={product.id}>
                                    <div key={product.name}>
                                      <Link href={product.href} onClick={handleMenuClose}  id={`${product.name}-heading`} className="font-semibold text-gray-900 hover:text-[#ff8900]">
                                        {product.name}
                                      </Link>
                                      <ul
                                        role="list"
                                        aria-labelledby={`${product.name}-heading`}
                                        className="mt-6 sm:mt-4 "
                                      >
                                        {product.items.map((item, index) => (
                                          <li key={item.name} 
                                          onMouseEnter={() => handleSubCategoryHover(item.name)} 
                                          onMouseLeave={() => setHoveredCategoryImage(null)} className={`flex border-b ${index === product.items.length - 1 ? 'border-b-0' : ''}`}>
                                            <Link href={item.href} onClick={handleMenuClose}  className="px-2 py-1 my-1 hover:bg-neutral-100 hover:text-[#ff8900] text-[13px] rounded-md text-neutral-800">
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                </div>
                              ))}
                              <div className="col-span-1 gap-x-8 gap-y-10 text-sm row-start-2 col-start-4" key="eight-col">
                                    <div key="eight-col">
                                      <Image id={`eight-col-heading`} className="font-medium text-gray-900 h-[225px] w-fit rounded-xl" src={hoveredCategoryImage || '/noyas-m-1a.webp'} width={1000} height={1000} alt='ürün kategori görseli'/>
                                    </div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        )}
                        </AnimatePresence>
                      </div>
                    </div> */}
                    <div className="flex items-center relative" onMouseEnter={() => setHoveredDropdown("hizmetler")} onMouseLeave={() => setHoveredDropdown(null)}>
                      <Link
                        href={"/hizmetlerimiz"}
                        className="flex items-center text-sm font-semibold text-neutral-900 hover:text-[#ff8900] mr-2"
                      >
                        HİZMETLERİMİZ
                      </Link>
                      <div key="urunler-dropdown" className="flex ">
                        <motion.div
                           variants={{
                            initial: { y: 0 },
                            bouncing: { y: [0, -5], transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }
                          }}
                          initial="initial"
                          whileHover="bouncing"
                          onHoverEnd={(e) => e.target.style.transform = "translateY(0px)"}
                        >
                          <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-neutral-900 hover:text-[#ff8900] cursor-pointer">
                            <FontAwesomeIcon className="fa-icon" icon={faAngleDown} aria-hidden="true" />
                          </button>
                        </motion.div>
                      <AnimatePresence>
                        {hoveredDropdown === "hizmetler" && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute w-fit max-w-md left-0 mt-7 p-3 overflow-hidden rounded-xl bg-white ring-1 shadow-lg ring-gray-900/5"
                          >
                            {navigation.services.map((item) => (
                              <div
                                key={item.name}
                                className="group relative flex items-center gap-x-6 rounded-md py-3 px-5 text-sm/6 hover:bg-gray-100"
                              >
                                
                                <div className="flex-auto">
                                  <Link href={item.href} className="block font-medium transition text-neutral-900 hover:text-[#ff8900] text-nowrap">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    </div>
                    
                    <Link
                      key="blog"
                      href="/blog"
                      className="flex items-center text-sm font-bold text-neutral-700 hover:text-[#ff8900]"
                    >
                      BLOG
                    </Link>
                    <Link
                      key="iletisim"
                      href="/iletisim"
                      className="flex items-center text-sm font-bold text-neutral-700 hover:text-[#ff8900]"
                    >
                      İLETİŞİM
                    </Link>
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center xl:gap-10 lg:gap-2">
                {/* Gates Logo */}
                <div className="hidden lg:flex">
                    <Image
                      width={80}
                      height={40}
                      alt="gates logo"
                      src="/gates-logo.webp"
                    />
                </div>

                {/* Parker Logo */}
                <div className="hidden lg:flex">
                    <Image
                      width={80}
                      height={40}
                      alt="parker logo"
                      src="/parker-logo.png"
                    />
                </div>

                {/* Search */}
                {/* <div className="flex lg:hidden">
                  <div className="p-2 text-neutral-900 hover:text-[#ff8900] cursor-pointer text-base" onClick={() => toggleSearchBar()}>
                    <span className="sr-only">Search</span>
                    <FontAwesomeIcon className="fa-icon ms-2" icon={faMagnifyingGlass} ></FontAwesomeIcon>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
        </>
  )
}


