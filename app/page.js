"use client"
import Image from "next/image";
import CardList from "./components/cardList";
import Card from "./components/Card";
import ProductContent from "./components/productContent";
//import BlogList from "./components/blogList";
//import Blog from "./components/Blog";
import Contact from "./components/contact";
import Link from "next/link";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import BackgroundBubbles from "./components/BackgroundBubbles";
//import data from "../../../data.json"

// const productContent = [
//   {
//     title: "NOYAS",
//     img: "/noyas-m-1a.webp",
//     desc: "NOYAS katı partikül filtrasyonu ve yağ aktarım cihazı kendi emiş pompası sayesinde sistem tankından yağı emdikten sonra, yağ önce pompayı korumak için YE filtreden sonrasında proses gerekliliklerine ve müşteri taleplerine göre tek filtreden, ikili filtreden, üçlü filtreden veya dörtlü filtreden geçerek sistem tankına geri bırakılır. Sistem yağını sürekli olarak off-line filtrasyon işlemine tabi tutan NOYAS cihazı, filtre kablarındaki basıç sensörleri sayesinde filtre kirlilik alarmı verir. Opsiyon olarak cihaza entegre ettiğimiz PARKER IPD Partikül ölçüm cihazı sayesinde yağın NAS/ISO/SAE Standartlarında analiz değerleri gözlemlenebilir.",
//     href: "/urunler/filtrasyon-makineleri/yag-filtrasyonu/noyas-m-1a"
//   },
//   {
//     title: "NOOFF",
//     img: "/nooff-s-2a.webp",
//     desc: "NOOFF, üzerinde bulunan devirdaim pompası ile sistem tankındaki yağı proses gereklilikleri ya da müşteri beklentilerine göre tek, ikili, üçlü veya dörtlü filtreden geçirir ve sistem tankına geri bırakır. Sistem yağını sürekli olarak harici filtrasyon işlemine tabi tutan NOOFF’un, kolayca açılan dış filtre kapları sayesinde, filtre elemanları kolayca değiştirilir. Müşteri talep ve gerekliliklerine göre entegte edilebilen PARKER IPD Partikül ölçüm cihazı ile yağın kirlilik seviyelerini NAS/ISO/SAE standartları ile gözlemleyebilir, katı partikül seviyelerini rahatlıkla kontrol altında tutabilirsiniz.",
//     href: "/urunler/filtrasyon-makineleri/yag-filtrasyonu/nooff-s-2a"
//   },
//   {
//     title: "NOPYAS",
//     img: "/nopyas-m.webp",
//     desc: "NOPYAS üzerinde bulunan emiş pompası ile sistem tankından yağı alarak proses gereklilikleri ya da müşteri beklentilerine göre ikili ya da dörtlü filtreden geçirir ve sistem tankına geri bırakır. Sistem yağını sürekli olarak harici filtrasyon işlemine tabi tutan NOPYAS, filtre kaplarında bulunan basınç sensörleri ile filtre doluluk uyarısı verir. Filtre elemanları kolayca değiştirilir. NOPYAS’da bulunan PARKER IPD Partikül ölçüm cihazı ile yağın kirlilik seviyelerini NAS/ISO/SAE standartları ile gözlemleyebilir, katı partikül seviyelerini rahatlıkla kontrol altında tutabilirsiniz. NOPYAS üzerinde bulunan PLC ekran ile filtrasyon süreçlerini yönetmek artık daha kolay. Sistemdeki yağ sıcaklığı, akış hızı, çevrimi yapılan yağ miktarı, bağıl nem ölçümü ve partikül seviyeleri her zaman elinizin altında. Nem ve partikül sonuçlarını, NOPYAS’da bulunan termal yazıcı, gerektiğinde çıktı alma kolaylığı sağlar.",
//     href: "/urunler/filtrasyon-makineleri/yag-filtrasyonu/nopyas-m"
//   },
// ];
const sectors = [
  {
    title: "Otomotiv",
    img: "",
    desc: "Otomotiv Sektörü Açıklaması",
    href: "/sektorler/otomotiv"
  },
  {
    title: "Endüstriyel Tesisler",
    img: "",
    desc: "Endüstriyel Tesisler Açıklaması",
    href: "/sektorler/endüstriyel-tesisler"
  },
  {
    title: "Mobil Hidrolik",
    img: "",
    desc: "Mobil Hidrolik Açıklaması",
    href: "/sektorler/mobil-hidrolik"
  },
  {
    title: "Denizcilik",
    img: "",
    desc: "Denizcilik Sektörü Açıklaması",
    href: "/sektorler/denizcilik"
  },
  {
    title: "Savunma Sanayi",
    img: "",
    desc: "Savunma Sanayi Açıklaması",
    href: "/sektorler/savunma-sanayi"
  },
  {
    title: "Enerji",
    img: "/normoil-sektorler-enerji.webp",
    desc: "Enerji sektöründe, hidrolik sistemlerin güvenilir ve verimli çalışması, enerji üretimi ve dağıtımının güvenilirliğini etkileyen önemli bir faktördür.",
    href: "/sektorler/enerji"
  },
  {
    title: "Demir Çelik",
    img: "/normoil-sektorler-demir-celik.webp",
    desc: "Çelik fabrikaları ve haddehaneler, zorlu ortamlarda oldukça karmaşık üretim tesisleridir. Güvenilir ekipmanlar ürün kalitesini korumanın anahtarıdır.",
    href: "/sektorler/demir-celik"
  },
  {
    title: "Geri Dönüşüm",
    img: "/normoil-sektorler-geri-donusum.webp",
    desc: "Geri dönüşüm tesisleri, zorlu ortamlardaki karmaşık üretim tesisleridir ve güvenilir ekipman, yüksek verimi korumanın anahtarıdır.",
    href: "/sektorler/geri-donusum"
  },
  {
    title: "Endüstriyel",
    img: "/normoil-sektorler-endustriyel.webp",
    desc: "Birçok endüstriyel tesis, üretimin merkezinde yer alan hidrolik ekipman, dişliler veya yatakları kullanır. Endüstriden güvenilir ekipmanın bakımı, çok önemlidir.",
    href: "/sektorler/endustriyel"
  }, 
  {
    title: "Petro Kimya - Offshore",
    img: "/normoil-sektorler-petro-kimya.webp",
    desc: "Petro kimya endüstrinin mevcut petrol fiyatına sahip bir piyasada kar sağlamak için maliyet tasarruflarına odaklanması gerekiyor. Düzenli bakım şarttır.",
    href: "/sektorler/petro-kimya-offshore"
  },
  {
    title: "Madencilik",
    img: "/normoil-sektorler-madencilik.webp",
    desc: "Normoil, madencilik endüstrisinde uzun yıllara dayanan deneyime sahiptir ve makinelerde kirlilik ile ilgili sorunları etkin bir şekilde azaltır.",
    href: "/sektorler/madencilik"
  },
  {
    title: "Mobil",
    img: "/normoil-sektorler-mobil.webp",
    desc: "Çimento pompaları, vinçler, müteahhitlik ekipmanları ve tarım ekipmanları gibi mobil makineler, zorlu ortamlarda çalışan gelişmiş hidrolik sistemlerdir.",
    href: "/sektorler/mobil"
  },
  {
    title: "Marin",
    img: "/normoil-sektorler-marin.webp",
    desc: "Sürekli yağ bakımı yaptırarak motorunuz, iticileriniz, yataklarınız, dişlileriniz, vinçleriniz, vb. üzerindeki kirlilik ile ilgili sorunları azaltırsınız.",
    href: "/sektorler/marin"
  },
  {
    title: "Deniz Motoru Madeni Yağ Arıtma Programı",
    img: "",
    desc: "Deniz motoru madeni yağ arıtma programı açıklaması",
    href: "/sektorler/deniz-motoru-madeni-yag-aritma-programi"
  },
  {
    title: "Klas Onayı/IACS Kuralları ve Denizcilik Yönetmelikleri",
    img: "",
    desc: "Klas onayı/IACS kuralları ve denizcilik yönetmelikleri açıklaması",
    href: "/sektorler/klas-onayi-iacs-kurallari-ve-denizcilik-yonetmelikleri"
  },
];
const solutions = [
  {
    title: "Hidrolik Hortum Presleme",
    desc: "Hidrolik hortum presleme, hortumun uçlarına uygun bağlantı elemanlarının (Fittings) takılması ve bu elemanların hortum üzerine sıkıca sabitlenmesi işlemidir. Özel presleme makineleri ile yapılan bu işlem, hortumun sızdırmazlığı ve dayanıklılığını sağlar.",
    href: "/hizmetlerimiz/hidrolik-hortum-presleme",
    img: "/anasayfa-yeni-cozumler-1.jpg"
  },
  {
    title: "Hidrolik Hortum Statik Testi",
    desc: "Statik test hizmetimiz, hidrolik hortumların sızdırmazlık ve yapısal bütünlüğünü, belirlenmiş sabit bir basınç altında denetler. Bu test, hortumun normal çalışma koşullarındaki performansını güvence altına alarak olası sızıntı ve zayıf noktaları önceden tespit eder. Amacımız, sisteminizin verimli ve emniyetli çalışmasını garanti etmektir.",
    href: "/hizmetlerimiz/hidrolik-hortum-statik-testi",
    img: "/anasayfa-yeni-cozumler-2.jpg"
  },
  {
    title: "Hidrolik Hortum Patlatma Testi",
    desc: "Patlama testi hizmetimiz, hidrolik hortumların dayanabileceği en yüksek basınç seviyesini ve nihai patlama noktasını tespit eder. Bu kritik test ile ürünün maksimum kapasitesi ve güvenli çalışma sınırları netleştirilir. Elde edilen veriler, ürün kalitesini doğrulamak ve sistem güvenliği için gerekli standartları belirlemek amacıyla kullanılır.",
    href: "/hizmetlerimiz/hidrolik-hortum-patlatma-testi",
    img: "/anasayfa-yeni-cozumler-3.jpg"
  },
  {
    title: "Yerinde Tespit ve Ölçü Alma",
    desc: "Yerinde tespit ve ölçü alma hizmetimiz, işletmenizde hidrolik hortumların ve bağlantı elemanlarının tam ölçüm ve değerlendirmesini yaparak doğru ürün seçimini sağlar. Uzman ekibimiz, yerinde gerçekleştirdiği bu hizmetle zaman kazandırır ve olası hataları minimize eder.",
    href: "/hizmetlerimiz/yerinde-tespit-ve-olcum-alma",
    img: "/anasayfa-yeni-cozumler-3.jpg"
  },
  {
    title: "Yerinde Mobil Hidrolik Filo Hizmeti",
    desc: "Yerinde Mobil Hidrolik Filo Hizmetimiz, işletmenize özel hidrolik çözümleri yerinde sunar. Mobil ekiplerimiz, hızlı ve etkili müdahale ile hortum değişimi, bakım ve onarım hizmetlerini gerçekleştirir. Bu sayede, iş kaybını minimuma indirir ve operasyonel verimliliğinizi artırır.",
    href: "/hizmetlerimiz/yerinde-mobil-hidrolik-filo-hizmeti",
    img: "/anasayfa-yeni-cozumler-4.jpg"
  }
]
//const blogs = data.filter((blog) => blog.type == "blog").slice(-2);
const services = [
  {
      title: "Hidrolik Hortum Presleme",
      desc: "Hidrolik Hortum Presleme Hizmeti Açıklaması",
      href: "/hizmetlerimiz/hidrolik-hortum-presleme",
      img: ""
  },
  {
      title: "Hidrolik Hortum Statik Testi",
      desc: "Hidrolik Hortum Statik Testi Hizmeti Açıklaması",
      href: "/hizmetlerimiz/hidrolik-hortum-statik-testi",
      img: ""
  },
  {
      title: "Hidrolik Hortum Patlatma Testi",
      desc: "Hidrolik Hortum Patlatma Testi Hizmeti Açıklaması",
      href: "/hizmetlerimiz/hidrolik-hortum-patlatma-testi",
      img: ""
  },
  {
      title: "Yerinde Tespit ve Ölçü Alma",
      desc: "Yerinde Tespit ve Ölçü Alma Hizmeti Açıklaması",
      href: "/hizmetlerimiz/yerinde-tespit-ve-olcum-alma",
      img: ""
  },
  {
      title: "Yerinde Mobil Hidrolik Filo Hizmeti",
      desc: "Yerinde Mobil Hidrolik Filo Hizmeti Açıklaması",
      href: "/hizmetlerimiz/yerinde-mobil-hidrolik-filo-hizmeti",
      img: ""
  },
]
export default function Home() {
  return (
    <>
      <BackgroundBubbles />
      <section className="min-h-[600px] py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div className="col-span-1 flex flex-col gap-4 justify-center px-8 lg:text-left text-center">
            <h1 className="text-5xl font-bold text-neutral-900 leading-tight" data-aos="fade-right" data-aos-duration="200">Hidrolik Sistemlerinizin <span className="text-[#ff8900]">Ömrünü Uzatıyoruz</span></h1>
            <p className="text-base text-neutral-900 mt-5" data-aos="fade-right" data-aos-duration="200">Gerçek zamanlı yağ analizleri, kullanıcı dostu kirlilik müdahale makineleri ve doğru hidrolik ekipmanları ile makinelerinizin kullanım ömrünü uzatıyoruz.</p>
            <div className="flex lg:mx-0 mx-auto gap-4 mt-5" data-aos="fade-right" data-aos-duration="200">
              <Link href="https://api.whatsapp.com/send?phone=+905330325348&amp;text=Merhaba, kapsamlı yağ yönetim sistemleri hakkında bilgi almak istiyorum." target="_blank" className="bg-[#ff8900] text-white font-semibold px-4 py-2 rounded-xl cursor-pointer hover:bg-[#ff8900]/80 transition-all duration-300">Ücretsiz Ön Görüşme</Link>
              <Link href="/hizmetlerimiz" className="bg-transparent border border-[#ff8900] text-[#ff8900] font-semibold px-4 py-2 rounded-xl cursor-pointer hover:bg-[#ff8900]/10 transition-all duration-300">Çözümlerimiz</Link>
            </div>
          </div>
          <div className="col-span-1">
            {/* <Image src="/hero-img.webp" className="max-w-[500px] lg:mx-0 mx-auto" alt="Normoil" width={1920} height={1080} data-aos="fade-left" data-aos-duration="200" loading="lazy" /> */}
          </div>
        </div>
        {/* <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff8900] filter blur-[120px] rounded-full -z-10 block"></div>
        <div className="absolute top-1/4 -left-40 w-60 h-60 bg-[#ff8900] filter blur-[120px] rounded-full -z-10 lg:block hidden"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 lg:block hidden"></div>
        <div className="absolute top-full -left-60 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 lg:block hidden"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ff8900] filter blur-[120px] rounded-full -z-10 lg:block hidden"></div>
        <div className="absolute top-1/4 -right-40 w-60 h-60 bg-[#ff8900] filter blur-[120px] rounded-full -z-10 block"></div>
        <div className="absolute top-1/2 -right-40 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 block"></div>
        <div className="absolute top-full -right-60 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 block"></div> */}
      </section>
        {/* <section className="py-20 bg-white">
          <div className="mx-auto py-4 container px-8">
            { productContent.map((product, index) => (
                <ProductContent key={index} title={product.title} img={product.img} desc={product.desc} order={index} href={product.href} />
              ))
            }
          </div>
        </section> */}

        <ParallaxBanner className="w-full min-h-[800px] mb-20">
          <ParallaxBannerLayer image="/gates-mxt-anasayfa.jpg" speed={-20} className=" brightness-50" />
          <ParallaxBannerLayer>
            <div className={`container h-full mx-auto py-20 place-content-center px-6 lg:px-8`}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 " data-aos="fade-right" data-aos-duration="200">
                    <div className="col-span-1">
                        <iframe src="https://www.youtube.com/embed/yli3FvtgsSU?autoplay=0&mute=0&modestbranding=0&rel=0&enablejsapi=1&" 
                        title="Gates MXT Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen 
                        className="w-full h-full min-h-[250px] lg:min-h-[350px] rounded-xl"></iframe>
                    </div>
                    <div className="col-span-1 flex flex-col gap-10">
                        <h2 className="pt-0 text-white text-4xl lg:text-7xl font-semibold tracking-wide uppercase" style={{ paddingTop: 0}}>
                            Gates MXT
                        </h2>
                        <p className="text-neutral-100 lg:text-base font-medium">
                          MXT, standart hortumdan %30’a kadar daha hafiftir, bu da ekipman ağırlığını azaltır ve kurulum sırasında yorgunluğu azaltır. %40 daha az bükme kuvvetiyle MXT, standart hortumdan daha hızlı kurulur ve daha kolay yönlendirilir. Ayrıca daha küçük dış çapa sahip olan MXT, daha küçük alanlara daha fazla güç sığdırabilir.
                        </p>
                        <Link href={"/downloads/katalog/filtrasyon-genel-katalog.pdf"} 
                          target="_blank" 
                          className="w-fit bg-orange-400 text-white text-xs lg:text-sm uppercase tracking-wide font-semibold px-10 py-2 rounded-xl shadow-sm ring-2 ring-orange-500 hover:ring-offset-2 hover:ring-offset-orange-500 hover:bg-orange-500 hover:shadow-[0_0_100px_0_rgba(255,137,0,0.3)] transition-all duration-300">
                            Kataloğu İncele
                        </Link>
                    </div>
                </div>
            </div>
          </ParallaxBannerLayer>
          {/* <Image src={'/gates-mxt-anasayfa.jpg'} width={1920} height={800} alt="gates mxt" className="absolute top-0 left-0 w-full h-full object-cover brightness-25"></Image> */}
        </ParallaxBanner>
{/* 
        <section className="bg-neutral-800 py-20 px-8 min-h-[300px] relative overflow-hidden">
            <div className={`container mx-auto`}>
                <div className="flex flex-wrap items-center gap-10" data-aos="fade-right" data-aos-duration="200">
                  <Image src={'/genel-filtrasyon-katalog.svg'} width={300} height={300} alt="filtrasyon genel kataloğu"></Image>
                  <div className="flex flex-col gap-10">
                      <div className="w-full block ">
                          <h2 className="text-white text-2xl font-bold mb-3">
                              Kapsamlı Filtrasyon Kataloğumuzu İnceleyin
                          </h2>
                      </div>
                      <div>
                          <Link href={"/downloads/katalog/filtrasyon-genel-katalog.pdf"} target="_blank" className="bg-[#ff8900] text-black font-semibold text-base px-10 py-3 rounded-xl hover:shadow-[0_0_100px_0_rgba(255,137,0,0.3)] transition-all duration-300">
                              Kataloğu İncele
                          </Link>
                      </div>
                  </div>
                </div>
            </div>
            <div className="absolute -bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 w-[800px] h-60 bg-[#ff8900] filter blur-[120px] rounded-full  lg:block hidden"></div>
        </section> */}

        <CardList header="YENİ ÇÖZÜMLER">
          { solutions.map((solution, index) => (
              <Card key={index} title={solution.title} img={solution.img} desc={solution.desc} link={solution.href} />
          ))}
        </CardList>

        <CardList header="HİZMETLERİMİZ" >
            { services.map((service, index) => (
                <Card key={index} img={service.img} title={service.title} desc={service.desc} link={service.href} />
            ))}
        </CardList>
        <CardList header="SEKTÖRLER" >
            { sectors.map((sector, index) => (
                <Card key={index} img={sector.img} title={sector.title} desc={sector.desc} link={sector.href} />
            ))}
        </CardList>
        {/* <BlogList header="BLOG YAZILARIMIZ">
          { blogs.map((blog, index) => (
              <Blog key={index} name={blog.name} date={blog.date} img={blog.img} desc={blog.desc} link={blog.link} />
          ))}
        </BlogList> */}
        <Contact />
        {/* <div className="bubble absolute top-40 left-1/2 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 lg:block hidden"></div>
        <div className="bubble absolute top-1/4 left-40 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 lg:block hidden"></div>
        <div className="bubble absolute top-10 -left-60 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 lg:block hidden"></div>
        <div className="bubble absolute top-3/5 left-60 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 lg:block hidden"></div>
        <div className="bubble absolute top-3/5 -right-60 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 lg:block hidden"></div>
        <div className="bubble absolute top-1/4 -right-20 w-60 h-60 bg-[#ff8900] filter blur-[150px] rounded-full -z-10 lg:block hidden"></div> */}
    </>
  );
}
