import React from 'react';
import Image from 'next/image';
import Breadcrumb from '../../components/breadcrumb';
import Head from 'next/head'

function Degerlerimiz() {
    const linkList = [
        {
            link_name: "Kurumsal",
            href: ""
        },
        {
            link_name: "Değerlerimiz",
            href: ""
        }
    ]
    return (
        <>
    <Head>
        <title>Normhose | Değerlerimiz</title>
    </Head>
        <section className='py-20'>
            <Breadcrumb linkList={linkList}></Breadcrumb>
            <h1 className='container mx-auto text-4xl font-medium text-neutral-900 px-5 lg:px-0 ' data-aos="fade-right" data-aos-duration="200">Temel Değerlerimiz</h1>
            <div className='container mx-auto mt-20 px-5 lg:px-0 '>
                <Image src="/degerlerimiz-1.jpg" alt="degerlerimiz" className='block lg:inline-block mx-auto lg:mx-0 lg:float-right pl-5' width={500} height={500} />
                <div className=''>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Türkiye&apos;ye Katkı Sağlamak</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Kurucu felsefesine sıkıca bağlı olduğumuz ülkemize yarar sağlayacak, ülkemizi geliştirecek ve milletimizin refahını sağlayacak çalışmaların içinde yer almak, “Bu ülke varsa biz de varız” yaklaşımı ile gerekirse bu çalışmalara gönüllü olarak katkı sağlamak ve bilişim alanında Büyük Önder Atatürk’ümüzün ifadesi ile “ülkemizin muasır medeniyet seviyesinin üstüne çıkmasına” katkı sağlamak,
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Müşterilerimiz</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Müşterilerimiz velinimetimizdir. Onlar için yeni ürün ve hizmetler geliştirmek, ürün ve hizmet kalitesinde sürekliliği tavizsiz sağlamak ve satış öncesi ve sonrasında müşterilerimizin yanında olmak,
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Yenilikçilik</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Yenilikçilik; yeni bakış açılarıyla ürün ve hizmetleri geliştirmektir. Buradan hareketle, bir teknoloji şirketi olarak ürün ve hizmetlerimizde yenilikçi yaklaşımı sürdürülebilir kılmak, çalışma arkadaşlarımızın uzmanlıklarını geliştirmek, tüm çalışanlarımızın inovasyon oluşturacak önerilerine açık olmak,
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Çevre Bilinci</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Çevreye en az zarar veren sektörler arasında yer alan bilişim sektöründe faaliyet gösteren bir şirket olarak; çevre duyarlılığına sahip olmak, hayvanlar, bitkiler ve insanlardan oluşan ekosistemin daha temiz olarak gelecek nesillere bırakılmasına katkı sağlamak ve bu konuda duyarlı olmak,
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Kadınlara Saygı</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Kadınların çalışma hayatında daha fazla yer alması için; kadın çalışan sayımızı yüksek tutmak ve onları çalışma hayatında desteklemek,
                    </p>
                </div>
                <Image src="/degerlerimiz-2.jpg" alt="degerlerimiz" className='block lg:inline-block mx-auto lg:mx-0 lg:float-left pr-10 mt-10' width={500} height={500} />
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Engelleri Kaldırmak</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Engelli vatandaşlarımızın sahip oldukları engeller; toplumla iç içe yaşamaları konusunda sorun teşkil etmemelidir. Engelli vatandaşlarımızın daha kaliteli yaşam sürmelerine katkı sağlayacak çabalar içinde olmak,
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Yaşam Boyu Öğrenmek</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Hiç durmamak üzere yola çıkanlar asla yorulmazlar” sözünü düstur alarak sürekli gelişimden yana olmak, sorgulayan, araştıran ve bilgiye dayalı eğitimi desteklemek ve yaşam boyu öğrenmeye inanmak,
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Güvenilir ve Dürüst Olmak</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Ahlaki değerlere önem vererek insan ve hizmet odaklı olmak, toplumun temel değerlerini korumak; kendimize, rakiplerimize ve müşterilerimize karşı güvenilir, tüm iş ve işlemlerinde dürüstlüğü öncelik edinmiş yapıda olmak,
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Ekip Çalışması</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Normhose Hidrolikte ki tüm çalışanlarımla aynı gemide olmanın bilinciyle birlikte; şirketimize ve ülkemize katkı sağlamak üzere müşterek çalışmayı, ‘’Benim işim’’den çok ‘’Bizim işimiz’’ düşüncesi ile çoğulculuğu ve katılımcılığı desteklemek, tüm çalışanların kimliklerine, bilgi birikimlerine, yetenek ve tecrübelerine saygı duymak,
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">İnsan Kaynağımızı Geliştirmek</h2>
                    <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Başarının dürüstlükten, hayal gücünden, ekip çalışmasından geçtiği ve çalışanların bilgi, beceri, özgüvenine bağlı olduğu gerçeğinden hareketle; gerek çalışma alanlarında gerekse kişisel, milli, yaşlılar, engelliler ve çevre gibi konularda çalışma arkadaşlarımızın, bayilerimizin duyarlılıklarını artırmak, gelişmelerine imkân sağlamak, potansiyellerini en iyi şekilde ortaya koyabilecekleri katılımcı bir şirket kültürünü mutlu, adil çalışma ortamı içerisinde oluşturmak ve adaletten ayrılmamak,
                    </p>
                </div>
            </div>
            <div className='bg-[#f9f9f9] py-20 mt-20'>
                <div className='container mx-auto px-5 lg:px-0 '>
                    <h2 className='text-4xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Etik Değerlerimiz</h2>
                    <div className='mt-20'>
                        <h3 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Normhose Hidrolik Etik Kurallar</h3>
                        <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Dürüstlük ve Doğruluk Kriterleri olup, ahlaki açıdan bakıldığında, bireysel ve sosyal ilişkilerin temelini oluşturur. Profesyonel etik, bireyler arası ilişkileri profesyonel bir grup ortamında ve topluluk içinde düzenlerken, örgütsel etik ise bir organizasyon içerisindeki tüzüğün tanımıdır. Örgütsel Etik ilkelerimize ilişkin kurallar, Şirketlerimizin ‘Personel Yönetmeliği’nde ayrıca belirtilmektedir.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Normhose Hidrolik İş Etiği Kuralları</h3>
                        <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Etik Çalışma Kuralları, şirketin temel davranış ilkelerini içermektedir. Yasal, toplumsal ve ekonomik koşullarda meydana gelen değişimlerin yanı sıra Normhose Hidrolik&apos;in değerlerini de içerir. Şirket personeli, görevlerini yerine getirirken “İş Etiği İlkelerine” uymak zorundadır. İş prosedürleri, kanun ve düzenlemeler, her türlü tutum ve davranışımızla yön gösterici olamayacağı bilinciyle, şirket değerlerimiz üzerinde kurulmuş olan iş etiği kurallarımız bulunur.
                        </p>
                    </div>
                </div>
            </div>
            <div className='py-20 mt-20'>
                <div className='container mx-auto px-5 lg:px-0 '>
                    <h3 className='text-2xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Normhose Hidrolik Etik Kurallar</h3>
                    <div className='mt-10'>
                        <h4 className='text-base font-bold text-neutral-900' data-aos="fade-right" data-aos-duration="200">A. Çerçeve</h4>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Normhose Hidrolik&apos;in İş Etiği Kuralları, Şirket politikaları, değerleri ve ilkeleri ile bütünlük içindedir. Yöneticiler dahil tüm çalışanların Normhose Hidrolik İş Etiği Kurallarına uyması gerekir.
                        </p>
                        <h4 className='text-base font-bold text-neutral-900' data-aos="fade-right" data-aos-duration="200">B. Dürüstlük ve Güvenilirlik</h4>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Normhose Hidrolik; ortaklarına, çalışanlarına, tedarikçilerine, iş ortaklarına, rakiplerine, çevre, toplum ve insanlığa karşı güvenilirlik ve saygınlık göstergesi olarak çalışmayı hedefler. Dürüstlük, sadakat ve güvenilirlik, çalışanlarımızın Normhose Hidrolik faaliyetleri üzerinde de etkisi olabilecek, şirket yönetimi tarafından izin verilmiş, özel faaliyetlerinin de vazgeçilmez ilkelerdendir. Çalışanlarımız şirket hedeflerine ulaşırken  yasalara, uluslararası hukuk kurallarına ve ahlak değerlerine uygun hareket eder.
                        </p>
                        <h4 className='text-base font-bold text-neutral-900' data-aos="fade-right" data-aos-duration="200">C. Gizlilik ve Ticari Sırların Korunması</h4>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                           <strong>c.1.</strong> Normhose Hidrolik tarafından sağlanan veya iș yerinde ulaşma ya da öğrenme olasılığı bulunan bilgi ve dokümanlar, ticari sırlar, kamuya açıklanmamıș mali ve diğer bilgiler, çalıșanların özlük haklarına ait ve üçüncü șahıslarla yapılmıș anlașmalardaki gizli bilgiler, gizlilik ve ticari sırların korunması çerçevesinde değerlendirilir. 
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                           <strong>c.2.</strong> Normhose Hidrolik, çalıșanlarına ve tüm paydașlarına ait kișisel bilgilerin korunmasına itina gösterir. Bu kapsamda bütün personelin özlük bilgileri ve șirket adına yapılan tüm elektronik posta yazıșmaları kayıt altına alınır. Normhose Hidrolik, çalıșanlarına ait kișisel bilgilere ve özel yașama müdahale etmez. Personele ait bilgiler sadece gereksinim durumunda belirlenen yetkiler dahilinde, yetkili kișilerce Normhose’un amaçları doğrultusunda kullanılır.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>c.3.</strong> Normhose Hidrolik&apos;e ait her türlü gizli bilgi ve/veya belgenin “Insider Trading” (içeriden öğrenenlerin ticareti) kapsamında içeriden sızdırılarak, borsa veya herhangi bir yolla menfaat elde edilmesi kesinlikle kabul edilmez.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>c.4.</strong> Bütün resmi açıklamalar, Șirketlerin belirlediği birimler aracılığı ile yatırımcılara, ortaklara ve kamuoyuna eșitlik ilkesi doğrultusunda, eksiksiz, eș zamanlı ve anlașılabilir biçimde duyurulur.
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>c.5.</strong> Herhangi bir nedenle şirketten ilişiğin kesilmesi durumunda da görev ve pozisyon nedeniyle sahip olunan her türlü belge, doküman ve gizlilik arz eden bilgilerin korunmasına ve bunların ileride şirket aleyhinde kullanılmaması için gerekli tedbirlerin alınmasına özen gösterilir.
                        </p>
                        <h4 className='text-base font-bold text-neutral-900' data-aos="fade-right" data-aos-duration="200">D. Çıkar Çatışması</h4>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Normhose Hidrolik, çalışanları çıkar çatışmasıyla sonuçlanacak faaliyetlerden itinayla kaçınır ve görevleri esnasında şirket yararını korumaya özen gösterir, kendilerine veya yakınlarına çıkar sağlama anlamına gelebilecek her türlü eylem ve davranıştan kaçınır. Şirket yararı ile kişisel menfaatlerin çatışması ve çalışanların konumlarından dolayı uygun olmayan kişisel menfaatler elde etmesine, yakınlarına veya 3. şahıslara çıkar sağlamasına hiç bir koşulda izin verilmez. 
                        </p>
                        <h4 className='text-base font-bold text-neutral-900' data-aos="fade-right" data-aos-duration="200">E. Sorumluluklarımız</h4>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Normhose Hidrolik, ülkemizin Hidrolik sektöründe faaliyet gösteren Sektörün Liderleri arasında yer alarak yasalara tam uyumun yanı sıra, kurumsal ve paydaşlarına karşı sorumluluk anlamında da en iyiler arasında yer almayı hedefler.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.1.</strong> Normhose Hidrolik, etik davranış standartlarına son derece bağlıdır. Tüm faaliyetlerini ulusal ve uluslararası yasa ve mevzuatlara tam bir uyum içinde sürdürür.
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.2.</strong> Şirketin hazırladığı her tür rapor, mali tablo veya kaydın, mevcut mevzuat doğrultusunda belirlenen ulusal ve uluslararası muhasebe ilkelerine göre tutulmasını sağlar.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.3.</strong> Her türlü faaliyetlerini ve yasal yükümlülüklerini yerine getirirken, tüm kurum ve kuruluşlara menfaat beklentisi olmaksızın yaklaşır. Sivil toplum kuruluşlarına, siyasi partilere karşı tarafsız ve eşit mesafede durur.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.4.</strong> Normhose Hidrolik Topluma ve Çevreye Karşı Sorumlulukların bilinci ile hareket eder. İnsan sağlığı, işletme güvenliği, çevrenin korunması standartlarını sürekli geliştirme ilkelerine sadık kalarak hareket eder.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.5.</strong> Rüşvet, yolsuzluk, görevi kötüye kullanma gibi etik dışı davranışlardan özenle kaçınır.
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.6.</strong> Karar ve faaliyetleri etkileyecek, işin gidişatına uygun olmayan ayrıcalık veya yarar sağlamaya yönelik hediye, ürün ve hizmetlerin verilmesi ve alınmasından kaçınır. 
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.7.</strong> Normhose Hidrolik çevrenin ve doğal hayatın korunması, tüketici hakları ve kamu sağlığı konularında duyarlı olur ve kurallara uyar. 
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.8.</strong> Normhose Hidrolik, en yüksek seviyede müşteri memnuniyeti sağlayacak şekilde tüm müşterilerine karşı dürüst ve adil davranır. Müşterilerinin problemlerine karşı duyarlı davranır, hızlı ve kalıcı çözümler üreterek, en üst seviyede müşteri güvenini hedefler. Sadece verebileceği ürün ve hizmetleri sunmayı teklif eder ve taahhütlerini yerine getirmek için gerekli çabayı gösterir. 
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.9.</strong> Normhose Hidrolik, mali disiplin ve hesap verebilirlik anlayışıyla, kaynak ve varlıkların en verimli şekilde yönetilmesini sağlar. Şirket hisse değerini maksimize etmeyi hedefleyen Normhose Hidrolik gereksiz ve yönetilemez risklerden kaçınarak, büyüme odaklı , kârlı ve değer yaratan şirket stratejilerini uygular. Görevlendirilenler dışında hiçbir çalışan Normhose Hidrolik ‘a temsilen sözlü ya da yazılı açıklamada bulunamaz. 
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.10.</strong> Normhose Hidrolik, ırk, etnik köken, milliyet, din ve cinsiyet ayrımı yapmaz. Eşit koșullardaki kișilere eşit fırsat sağlar. Ücretlendirme, tayin ve terfide performans ve verimlilik kriterlerini esas alır. Tüm süreçlerde şeffaf politikalar izler . Verilen görevleri yerine getirebilmeleri için gerekli yetkinliğe ve niteliklere uygun olanları yönetici seçer.  Çalışanlara güvenli ve sağlıklı bir çalışma ortamı sağlar.  Çalışanların bireysel ve mesleki konularda  eğitilmesini sağlar. Çalışanlarının birbirleriyle karşılıklı güven, saygı ve nezaket kuralları çerçevesinde iletişim kurmalarını ve işbirliği yapmalarını bekler.  Çalışanlarının karar alma sürecine katılımlarını sağlar.
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.11.</strong> Rakip sektör şirketleriyle sadece yasal ve etik olan zeminlerde ve karşılıklı saygı çerçevesinde rekabet eder ve Rekabet Hukuku’nun ihlalinden kaçınır. Rekabeti kısıtlamaya ya da sınırlamaya yönelik girişimleri desteklemez. 
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>e.12.</strong> Normhose Hidrolik çalışanları sosyal medya üzerinden girilen iletişimlerde dürüst olur ve kişisel bilgiler hakkında yanıltıcı beyanlarda bulunmaktan kaçınır. Sosyal medya araçları vasıtasıyla girilen iletişimlerin yansımaları konusunda, Normhose Hidrolik çalıșanları olarak, bilinçli olur. Normhose Hidrolik ile ilgili beyanda bulunma hakkı, Şirket yetkilileri ve kurullarına ait olduğundan, internet ortamında, herhangi bir biçimde Normhose Hidrolik adına beyanda ya da sorumluluk doğuracak yorumda bulunulmaması gerektiğini bilir. Her yerde olduğu gibi, sosyal medya araçları vasıtasıyla girilen iletişimlerde de hukuka aykırı olabilecek hiçbir davranış içine girilmemesi ve söylemde bulunulmaması gerektiği bilincindedir. Bu çerçevede, Normhose Hidrolik&apos;in bir mensubu olarak, sosyal medya üzerinden gerçekleștirilen tüm fiil ve söylemlerden, bu fiil ve söylemleri yapanların şahsen sorumlu olduğunu daima dikkate alır ve hukuken Normhose Hidrolik adına beyanda bulunulmasa dahi, Normhose Hidrolik çalışanı olunduğu anlaşılıyorsa, yapılan bu hukuka aykırı eylemden dolayı Normhose Hidrolik&apos;in kamuoyu önünde itibarının olumsuz yönde etkilenebileceğini bilir. İşbu sosyal medya etik kurallarının ihlalinin, Normhose Hidrolik‘un kamuoyu nezdinde itibarının ve/veya kurumsal kimliğinin olumsuz yönde etkilenmesi sonucunu doğurması halinde ve/veya mevzuattan kaynaklanan diğer sebeplerle, bu ihlali gerçekleştiren Normhose Hidrolik çalıșanlarının iş ilişkisi üzerinde hukuki bazı olumsuz yansımaları olabileceği konusunda bilinçli olunmalı ve hatta bu hareket ve davranıșın niteliğine göre, bașkaca hukuki ve/veya cezai sonuçlarla karșılașılabileceği hususunu bilir. Normhose Hidrolik çalıșanları sosyal medya araçlarındaki tüm paylașımlarından kanun ve yönetmelikler nezdinde bireysel sorumlu olduğunu bilir, olası cezai uygulamaların șirketi değil; eylemde bulunan bireyi bağladığını kabul eder ve sorumluluğunu bireysel tașır. Normhose Hidrolik, bahsi geçen hatalı uygulamalarda alınan cezai yaptırımlardan sorumlu değildir/tutulamaz.
                        </p>
                        <h4 className='text-base font-bold text-neutral-900' data-aos="fade-right" data-aos-duration="200">F. İş Ahlakı ve Davranışlar</h4>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.1.</strong> Normhose Hidrolik çalışanları görevlerini eşitlikçi, şeffaf, hesap verebilir ve sorumlu şekilde yürütür.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.2.</strong> Şirketin kaynakları ve olanakları, siyasi faaliyetleri desteklemek amacıyla kullanmaz. Şirket dahilinde siyasi faaliyet yürütmez, siyasi partilere bağış yapmaz ve siyasi kampanyalara destek verilmez.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.3.</strong> Siyasi, sosyal ve dini görüşler çalışma ortamında ifade edilmez ve tartışılmaz.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.4.</strong> Şirketin saygın imajının korunması ve geliştirilmesi için tüm çalışanlar üzerlerine düşen sorumlulukları yerine getirir. Bu çerçevede, tüm çalışanlar kişisel hal ve davranışlarının, kanunlar ve genel ahlak kuralları çerçevesinde olmasına özen gösterir.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.5.</strong> Çalışanlar, şirket hakkındaki gizli ve kamuya açık olmayan bilgileri kendileri ve başkaları lehine kullanamaz.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.6.</strong> Çalışanlar, şirket işleri ile ilgili doğrudan veya dolaylı hediye kabul edemez, menfaat sağlayamaz ve şirketin iş ilişkisinde olduğu şahıs veya firmalardan borç kabul edemez.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.7.</strong> Basın ve yayın kuruluşlarına demeç verilmesi, basında yazı yayınlanması ve konferanslara konuşmacı olarak katılması, Genel Müdür ve/veya Yönetim Kurulu Başkanı’nın onayının alınması suretiyle gerçekleşir.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.8.</strong> Şirket hesapları üzerindendin, dil, ırk, siyaset ve kişisel haklara saldırıda bulunan paylaşımlar yapamaz.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.9.</strong> Çalışanların çalışma ortamının verimliliğini ve güvenini bozan davranış, saldırgan tutum, tehditkar konuşma ve davranış biçimleri; taciz, rahatsız etme, ticari, politik ve dini amaçlı tanıtım yapması kabul edilemez.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.10.</strong> Çalışanlar tüm yasa, kural ve yönetmeliklere uygun hareket etmekle yükümlüdürler.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.11.</strong> Çalışanlar şirket varlıklarını korumalı ve verimli kullanılmalarını sağlamalıdır. Şirketin bütün varlıkları, sadece iş amaçlı kullanılmalıdır.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.12.</strong> Normhose Hidrolik çalıșanları görevlerini eșitlikçi, șeffaf, hesap verebilir ve sorumlu șekilde yürütür.
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.13.</strong> Șirketin kaynakları ve olanakları, siyasi faaliyetleri desteklemek amacıyla kullanmaz. Șirket dahilinde siyasi faaliyet yürütmez, siyasi partilere bağıș yapmaz ve siyasi kampanyalara destek verilmez.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.14.</strong> Siyasi, sosyal ve dini görüșler çalıșma ortamında ifade edilmez ve tartıșılmaz.
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.15.</strong> Șirketin saygın imajının korunması ve geliștirilmesi için tüm çalıșanlar üzerlerine düșen sorumlulukları yerine getirir. Bu çerçevede, tüm çalıșanlar kișisel hal ve davranıșlarının, kanunlar ve genel ahlak kuralları çerçevesinde olmasına özen gösterir.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.16.</strong> Çalıșanlar, șirket hakkındaki gizli ve kamuya açık olmayan bilgileri kendileri ve bașkaları lehine kullanamaz.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.17.</strong> Çalıșanlar, șirket ișleri ile ilgili doğrudan veya dolaylı hediye kabul edemez, menfaat sağlayamaz ve șirketin iș ilișkisinde olduğu șahıs veya firmalardan borç kabul edemez.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.18.</strong> Basın ve yayın kurulușlarına demeç verilmesi, basında yazı yayınlanması ve konferanslara konușmacı olarak katılınması, Genel Müdür ve/veya Yönetim Kurulu Bașkanı’nın onayının alınması suretiyle gerçekleșir.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.19.</strong> Șirket hesapları üzerinden din, dil, ırk, siyaset ve kișisel haklara saldırıda bulunan paylașımlar yapamaz.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.20.</strong> Çalıșanların çalıșma ortamının verimliliğini ve güvenini bozan davranıș, saldırgan tutum, tehditkar konușma ve davranıș biçimleri; taciz, rahatsız etme, ticari, politik ve dini amaçlı tanıtım yapması kabul edilemez.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.21.</strong> Çalıșanlar tüm yasa, kural ve yönetmeliklere uygun hareket etmekle yükümlüdürler.  
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>f.22.</strong> Çalıșanlar șirket varlıklarını korumalı ve verimli kullanılmalarını sağlamalıdır. Şirketin bütün varlıkları, sadece iș amaçlı kullanılmalıdır.  
                        </p>
                        <h4 className='text-base font-bold text-neutral-900' data-aos="fade-right" data-aos-duration="200">G. Denetim</h4>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>g.1.</strong> Şirket her yıl hesaplarını uluslararası kabul görmüş muhasebe standartlarına göre, bir bağımsız denetim şirketine denetletir.
                        </p>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            <strong>g.2.</strong> Çalışanlar etik kurallar dışı bir uygulama ile karşılaşmaları halinde bunu şirketin Genel Müdürüne yazılı ve / veya sözlü olarak bildirir. Dönemler halinde iletilen konular şirket üst yönetimine raporlanır.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#f9f9f9] py-20 mt-20'>
                <div className='container mx-auto px-5 lg:px-0 '>
                    <h2 className='text-4xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Çevre Politikalarımız</h2>
                    <div className='mt-20'>
                        <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Sektöründe lider olan Normhose Hidrolik Teknolojileri, İstanbul’da kurulu bulunan tesisinde, endüstriyel yağ filtrasyon (partikül temizlik) makineleri, yağ analizleri ve yağdan su ayırma ekipmanları üretiminde faaliyet göstermektedir. Protam Grup Şirketler Grubu’nun bir kuruluşu olan firmamızın çevre politikası, grup politikasındaki tüm ilkelere bağlı olup, çevre yönetim sistemimizin ve sürdürülebilirlik yaklaşımımızın en önemli parçalarından biridir.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Normhose olarak, çevre politikamız kapsamında aşağıdaki hususları taahhüt ederiz:</h3>
                        <ul className='list-disc list-inside text-neutral-900 mt-5 text-[1em] marker:text-[#ff8900]' data-aos="fade-right" data-aos-duration="200">
                            <li>Ürünlerimizin çevresel etkilerine ilişkin değerlendirmeleri, ürün tasarım sürecine dahil etmek, herhangi bir yeni süreci uygulamaya koymadan önce sürecin çevresel etkilerini değerlendirmek,</li>
                            <li className='mt-2'>Tüm yatırım ve tedariklerimizde çevresel etkiler ile risk ve fırsatları değerlendirmek ve mümkün olduğunca olumsuz etkilerin en aza indirilmesini sağlayacak mevcut en iyi teknikleri tercih etmek, ürün ve hizmet satın alırken de aynı özelliği dikkate almak,</li>
                            <li className='mt-2'>Teknolojik yeniliklerle ürettiğimiz akülerimiz, son kullanıcıların çevreye daha az zarar vermesine katkı sağlamaktadır. Aynı şekilde, çevrenin korunması ve iyileştirilmesine katkı sağlayacak benzer yeni teknolojileri yakından takip ederek, ürünlerimizi bu yönde geliştirmek,</li>
                            <li className='mt-2'>Üretim ve hizmet süreçlerimizin çevre üzerindeki olumsuz etkilerinin doğal ortama zarar vermesini önlemek için hava, su, gürültü ve toprak kirliliği konusunda sürekli iyileştirme ilkelerini uygulayarak, mümkün olan her yerde ve her zaman kirliliği kaynakta önlemek,</li>
                            <li className='mt-2'>Faaliyetlerimiz, ürünlerimiz ve hizmetlerimizin çevre üzerindeki etkisini en aza indirmek,</li>
                            <li className='mt-2'>Ürünlerimizin, ürün yaşam döngüsünün her aşamasında çevre üzerindeki olumsuz etkilerini en aza indirmek atık akülerin toplanması ve geri dönüşümü süreçlerini en iyi çevresel performansla uygulamak ve geliştirmek,</li>
                            <li className='mt-2'>Tüm üretim, geri kazanım ve hizmet faaliyetlerimiz süresince doğal kaynakları korumak için enerji ve su kullanımını en aza indirmek ve doğal kaynakları en verimli şekilde kullanmak, döngüsel ekonominin bir parçası olarak; geri kazanım, geri dönüşüm ve diğer uygun yöntemlerle doğal kaynakların korunmasını teşvik etmek için programlar geliştirmek,</li>
                            <li className='mt-2'>Tüm süreçlerimizin iklim değişikliği üzerindeki etkilerinin azaltılmasına ve sürdürülebilir kalkınma hedefine yönelik süreçlere ve çalışmalara katkı sağlamak,</li>
                            <li className='mt-2'>Çevre performansımızı artırmak için, çevre yönetim sistemimizi etkin bir şekilde uygulamak, düzenli olarak gözden geçirmek, gerekli hallerde güncellemek ve çevre yönetim sistemimizin sürekli iyileştirilmesini sağlamak,</li>
                            <li className='mt-2'>Çevre politikamızda benimsediğimiz taahhütleri ve çevresel ilkelerimizi; çalışanlarımız, yüklenicilerimiz, tedarikçilerimiz ve diğer çözüm ortaklarımız ile paylaşmak, eğitim programları ve çeşitli kanallar ile çevre bilinçlerini geliştirmektir.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-20 mt-20'>
                <div className='container mx-auto px-5 lg:px-0 flex justify-center items-center'>
                    <div className='w-full sm:w-[600px] h-28 border-4 border-[#ff8900] rounded-2xl'>
                        <div className='px-5 text-center text-neutral-900 text-sm sm:text-base md:text-xl font-medium bg-white w-4/5 mx-auto -mt-5 md:-mt-8 uppercase italic'>Çünkü bizim için mühendislik her şeyden önce dünyanın daha iyi bir yer olmasını sağlamaktan geçiyor.</div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f9f9f9] py-20 mt-20'>
                <div className='container mx-auto px-5 lg:px-0'>
                    <h2 className='text-4xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">İş Sağlığı ve Güvenliği Politikalarımız</h2>
                    <div className='text-neutral-900 mt-20 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Normhose Hidrolik Teknolojileri, tüm faaliyetlerinde insanı en değerli varlığı olarak kabul eder ve daha güvenli ve sağlıklı bir çalışma ortamı yaratarak, oluşabilecek her türlü kayıpları en aza indirmeyi öncelikli iş hedefi olarak benimser. İş sağlığı ve güvenliği yönetim sistemi; Normhose Hidrolik Teknolojileri, çalışanların sağlık düzeylerinin geliştirilmesi, iş veriminin gereği olarak görülür. İş Sağlığı ve Güvenliği Yönetim Sistemi uygulanarak, sistem periyodik olarak gözden geçirilir ve performansı izlenerek, sürekli olarak gelişmesi sağlanır. Bu amaçla; <br /><br />
                        Çalışanlarımız, taşeronlarımız ve ziyaretçilerimizin, kuruluşumuzun faaliyetleri esnasında maruz kalabilecekleri tehlikeleri en aza indirmek için uygun teknolojileri kullanır, koruyucu ve önleyici tedbirleri alırız. Kuruluşumuzda yürütülen faaliyetlerde yürürlükteki İş Kanunlarına ve yasal gerekliliklere uyumu sağlarız. <br /><br />
                        Kuruluşumuzun faaliyetlerinden ve işyeri dışından kaynaklanan İş Sağlığı ve Güvenliği tehlikeleri ile ilgili riskleri belirler ve bu riskleri kabul edilebilir seviyelere çekerek kontrol altında tutarız. İş Sağlığı ve Güvenliği Yönetim Sistemimizin, kuruluşumuz için çalışanlar ve taşeronlarımız tarafından benimsenmesi ve uygulanması için gerekli eğitim faaliyetlerini düzenleriz. ISO 45001:2018 İş Sağlığı ve Güvenliği Yönetim Sisteminin devamlılığını sağlar, periyodik belirlenen hedefler ve gözden geçirmelerle sürekli iyileştirir ve bu sayede, yaralanma ve iş hastalıklarını önlemeyi taahhüt ederiz.
                    </div>
                </div>
            </div>
            <div className='py-20 mt-20'>
                <div className='container mx-auto px-5 lg:px-0'>
                    <h2 className='text-4xl font-medium text-neutral-900 mb-20' data-aos="fade-right" data-aos-duration="200">Kalite Yönetim Sistemimiz</h2>
                    <Image src="/kalite-yonetim-sistemimiz.jpg" alt="kalite yönetim sistemimiz" className='block lg:inline-block mx-auto lg:mx-0 lg:float-right pl-10 pb-10' width={500} height={500} />
                    <div className=''>
                        <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                        Normhose Hidrolik Teknolojileri, tüm faaliyetlerinde insanı en değerli varlığı olarak kabul eder ve daha güvenli ve sağlıklı bir çalışma ortamı yaratarak, oluşabilecek her türlü kayıpları en aza indirmeyi öncelikli iş hedefi olarak benimser. İş sağlığı ve güvenliği yönetim sistemi; Normhose Hidrolik Teknolojileri, çalışanların sağlık düzeylerinin geliştirilmesi, iş veriminin gereği olarak görülür. İş Sağlığı ve Güvenliği Yönetim Sistemi uygulanarak, sistem periyodik olarak gözden geçirilir ve performansı izlenerek, sürekli olarak gelişmesi sağlanır. Bu amaçla; <br /><br />
                        Çalışanlarımız, taşeronlarımız ve ziyaretçilerimizin, kuruluşumuzun faaliyetleri esnasında maruz kalabilecekleri tehlikeleri en aza indirmek için uygun teknolojileri kullanır, koruyucu ve önleyici tedbirleri alırız. Kuruluşumuzda yürütülen faaliyetlerde yürürlükteki İş Kanunlarına ve yasal gerekliliklere uyumu sağlarız. <br /><br />
                        Kuruluşumuzun faaliyetlerinden ve işyeri dışından kaynaklanan İş Sağlığı ve Güvenliği tehlikeleri ile ilgili riskleri belirler ve bu riskleri kabul edilebilir seviyelere çekerek kontrol altında tutarız. İş Sağlığı ve Güvenliği Yönetim Sistemimizin, kuruluşumuz için çalışanlar ve taşeronlarımız tarafından benimsenmesi ve uygulanması için gerekli eğitim faaliyetlerini düzenleriz. ISO 45001:2018 İş Sağlığı ve Güvenliği Yönetim Sisteminin devamlılığını sağlar, periyodik belirlenen hedefler ve gözden geçirmelerle sürekli iyileştirir ve bu sayede, yaralanma ve iş hastalıklarını önlemeyi taahhüt ederiz.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#f9f9f9] py-20 mt-20'>
                <div className='container mx-auto px-5 lg:px-0'>
                    <h2 className='text-4xl font-medium text-neutral-900 mb-20' data-aos="fade-right" data-aos-duration="200">İK Politikaları ve Kurumsal İlkeler</h2>
                    <div className=''>
                        <p className='text-neutral-900 mt-10 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Şirket amaçlarının gerçekleşmesi için insan unsurunun belirleyiciliğine inanarak insan kaynakları politikamızı “önce insan” yaklaşımı çerçevesinde oluşturduk. <br /><br />
                            Bu çerçevede, insan kaynakları temel politikamız, çalışanlarımızın gelişmelerine fırsat ve katkı sağlayan sistem ve uygulamalarla, onların motivasyonları, iş tatmini ve mutlulukları ile birlikte verimliliğimizi arttırmaktır.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">İK Misyonumuz</h3>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            Modern İnsan Kaynakları sistemlerini hayata geçirerek, insan kaynağımızı geliştirmek ve nitelikli iş gücü tarafından tercih edilen bir firma haline gelmektir.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">İK Vizyonumuz</h3>
                        <p className='text-neutral-900 mt-5 text-[1em]' data-aos="fade-right" data-aos-duration="200">
                            İnsana değer vererek ve en önemli sermayenin çalışanlarımız olduğu gerçeğiyle hareket ederek, insan kaynağımızı geliştirmek, kariyer hedeflerine hazırlamak ve sonuç olarak başarılı çalışanlar ile şirket hedeflerine ulaşılmasına en büyük desteği vermektir.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Ana Hedefimiz</h3>
                        <ul className='list-disc list-inside text-neutral-900 mt-5 text-[1em] marker:text-[#ff8900]' data-aos="fade-right" data-aos-duration="200">
                            <li className='mt-2'>Değişime ve yeniliğe açık,</li>
                            <li className='mt-2'>Öğrenen ve sürekli kendini geliştirme çabası gösteren,</li>
                            <li className='mt-2'>Takım ruhu ve “Biz Bilinci” ile hareket ederek çabalarını kişisel performansın yanında şirket performansına yansıtan bir çalışan profili yakalamak,</li>
                            <li className='mt-2'>Grup şirketlerimizin tümünde “Toplam Kalite Yönetimi” ni hayata geçirmek,</li>
                            <li className='mt-2'>Çalışanlarımızın aidiyet duygularını güçlendirmek için onlara sağlanan gelişim olanakları ile, performansa dayalı ücret ve kariyer fırsatlarını şirket imkanlarına paralel olarak iyileştirmektir.</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <h3 className='text-xl font-medium text-neutral-900' data-aos="fade-right" data-aos-duration="200">Değerlerimiz &quot;Önce İnsan&quot; Yaklaşımı Çerçevesinde</h3>
                        <ul className='list-disc list-inside text-neutral-900 mt-5 text-[1em] marker:text-[#ff8900]' data-aos="fade-right" data-aos-duration="200">
                            <li className='mt-2'>Çalışanların insanlık onurlarına saygı duyar onlara güvenir, takdir eder ve başarıyı paylaşırız.</li>
                            <li className='mt-2'>Çalışanların kişisel bilgilerinin gizliliğine önem veririz.</li>
                            <li className='mt-2'>Sürdürülebilir bir gelecek için; çalışanlarımızın sağlık ve güvenlikleri başta olmak üzere tüm sorumluluklarımızı yerine getiririz.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Degerlerimiz;