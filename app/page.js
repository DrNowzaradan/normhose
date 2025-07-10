"use client"
import Image from "next/image";
import CardList from "./components/cardList";
import Card from "./components/Card";
//import BlogList from "./components/blogList";
//import Blog from "./components/Blog";
import Contact from "./components/contact";
import Link from "next/link";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import BackgroundBubbles from "./components/BackgroundBubbles";
//import data from "../../../data.json"

const sectors = [
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
    title: "Endüstriyel",
    img: "/normoil-sektorler-endustriyel.webp",
    desc: "Birçok endüstriyel tesis, üretimin merkezinde yer alan hidrolik ekipman, dişliler veya yatakları kullanır. Endüstriden güvenilir ekipmanın bakımı, çok önemlidir.",
    href: "/sektorler/endustriyel"
  }, 
  {
    title: "Geri Dönüşüm",
    img: "/normoil-sektorler-geri-donusum.webp",
    desc: "Geri dönüşüm tesisleri, zorlu ortamlardaki karmaşık üretim tesisleridir ve güvenilir ekipman, yüksek verimi korumanın anahtarıdır.",
    href: "/sektorler/geri-donusum"
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
    title: "Marin",
    img: "/normoil-sektorler-marin.webp",
    desc: "Sürekli yağ bakımı yaptırarak motorunuz, iticileriniz, yataklarınız, dişlileriniz, vinçleriniz, vb. üzerindeki kirlilik ile ilgili sorunları azaltırsınız.",
    href: "/sektorler/marin"
  },
  {
    title: "Mobil",
    img: "/normoil-sektorler-mobil.webp",
    desc: "Çimento pompaları, vinçler, müteahhitlik ekipmanları ve tarım ekipmanları gibi mobil makineler, zorlu ortamlarda çalışan gelişmiş hidrolik sistemlerdir.",
    href: "/sektorler/mobil"
  },
  {
    title: "Savunma Sanayi",
    img: "",
    desc: "Savunma Sanayi Açıklaması",
    href: "/sektorler/savunma-sanayi"
  },
  {
    title: "Otomotiv ve OEM",
    img: "",
    desc: "Otomotiv Sektörü Açıklaması",
    href: "/sektorler/otomotiv"
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
            <h1 className="text-5xl font-bold text-neutral-900 leading-tight" data-aos="fade-right" data-aos-duration="200">Güvenilir Hidrolik Hortum ve <br></br><span className="text-[#ff8900]">Bağlantı Elemanı Tedarikçiniz</span></h1>
            <p className="text-base text-neutral-900 mt-5" data-aos="fade-right" data-aos-duration="200">ISO 9001 standartlarında güvenilir hidrolik hortum ve bağlantı elemanlarınızı zaman kaybetmeden hızla tedarik edin.</p>
            <div className="flex lg:mx-0 mx-auto gap-4 mt-5" data-aos="fade-right" data-aos-duration="200">
              <Link href="https://api.whatsapp.com/send?phone=+905330325348&amp;text=Merhaba, kapsamlı yağ yönetim sistemleri hakkında bilgi almak istiyorum." target="_blank" className="bg-[#ff8900] text-white font-semibold px-4 py-2 rounded-xl cursor-pointer hover:bg-[#ff8900]/80 transition-all duration-300">Danışmanımızla Görüşün</Link>
              <Link href="/hizmetlerimiz" className="bg-transparent border border-[#ff8900] text-[#ff8900] font-semibold px-4 py-2 rounded-xl cursor-pointer hover:bg-[#ff8900]/10 transition-all duration-300">Çözümlerimiz</Link>
            </div>
          </div>
          <div className="col-span-1">
            <Image src="/normhose-hero-bg.webp" className="max-w-[500px] lg:mx-0 mx-auto" alt="Normoil" width={1920} height={1080} data-aos="fade-left" data-aos-duration="200" loading="lazy" /> 
          </div>
        </div>
      </section>

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
        </ParallaxBanner>

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
