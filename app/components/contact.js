"use client"
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faUser, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';
import axios from 'axios'
import Loading from './loading';

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        setLoading(true)

        // Form verilerini backend'e gönderiyoruz
        try {
          const response = await axios.post('https://protam-api.onrender.com/send-email', {
            to: 'NORMOIL',
            name,
            message,
            email,
            phone
          })
          setLoading(false)
          if (response.status === 200) {
            setStatus('Mesajınız başarıyla gönderildi.');
            setError('')
          }
        } catch (error) {
          setLoading(false)
          setError('Mesaj gönderilirken bir hata oluştu.');
          setStatus('')
        }
    };

    return (
        <section className="contact-section" id='contact-section'>
            <div className="container bg-white rounded-2xl py-10 px-10 mx-auto">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8" data-aos="fade-in">
                    <div className="col-span-2">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-neutral-900 capitalize font-medium" data-aos="fade-right">Bize Ulaşın</h3>
                        </div>
                    </div>
                    
                    <div className="col-span-2 lg:col-span-1 cinfo">
                        <address className='font-semibold' style={{fontStyle: 'normal'}} data-aos="fade-right">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2 text-[#ff8900]' />Ramazanoğlu, Öğrenci Sk. No:28, 34906 Pendik/İstanbul</p>
                            <p><FontAwesomeIcon icon={faPhone} className='mr-2 text-[#ff8900]' />0(216) 415 19 00</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className='mr-2 text-[#ff8900]' />info@normhose.com.tr</p>
                        </address>
                        <div className="block lg:hidden pt-5"></div>
                        <div id="map-canvas" data-aos="fade-right">
                            <iframe 
                                width="520" 
                                height="400" 
                                id="gmap_canvas" 
                                src="https://maps.google.com/maps?width=520&height=400&hl=en&q=ramazano%C4%9Flu%20mahallesi,%20%C3%B6%C4%9Frenci%20sokak,%20no:28%20Istanbul+(Normoil)&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                            />
                            <Script 
                                src="https://embedmaps.com/google-maps-authorization/script.js?id=66fa000de137eeb26497f2e4d35ff1decf7ee563"
                                strategy="afterInteractive"
                            />
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 relative" data-aos="fade-left">
                        {loading && (<Loading className='absolute top-0 left-1/2 -translate-x-1/2 z-10 '></Loading>)}
                        <form name="contactform" id="contactform" onSubmit={handleSubmit} className={` ${loading ? ' opacity-60 ' : ''}`}>
                            <fieldset>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2 xl:gap-x-8">
                                    <div className="col-span-2">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="name">İsim<br /></label>
                                            <div className="inner-addon left-addon">
                                                <FontAwesomeIcon icon={faUser} className='mr-2 text-neutral-500 input-icon' />
                                                <input type="text" onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-neutral-300 rounded-lg placeholder:text-neutral-500 focus:border-[#ff8900] transition duration-300 required " placeholder="İsminiz.." name="name"
                                                    id="name" data-name="Name" disabled={loading} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="email">Email<br /></label>
                                            <div className="inner-addon left-addon">
                                                <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-neutral-500 input-icon' />
                                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-neutral-300 rounded-lg placeholder:text-neutral-500 focus:border-[#ff8900] transition duration-300 required  required-email"
                                                    placeholder="Email" name="email" id="email" data-name="Email" disabled={loading} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="name">Telefon<br/></label>
                                            <div className="inner-addon left-addon">
                                                <FontAwesomeIcon icon={faPhone} className='mr-2 text-neutral-500 input-icon' />
                                                <input type="tel" onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 border border-neutral-300 rounded-lg placeholder:text-neutral-500 focus:border-[#ff8900] transition duration-300" placeholder="Telefon numaranız.." name="phone"
                                                    id="phone" data-name="Phone" disabled={loading} />
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col-span-2">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="message">Mesaj<br /></label>
                                            <div className="inner-addon left-addon">
                                                <FontAwesomeIcon icon={faComment} className='mr-2 text-neutral-500 input-icon' />
                                                <textarea rows="13" onChange={(e) => setMessage(e.target.value)} name="message" id="message" className="w-full px-3 py-2 border border-neutral-300 rounded-lg placeholder:text-neutral-500 focus:border-[#ff8900] transition duration-300 required"
                                                    placeholder="Mesajınız.." data-name="Message" disabled={loading} required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:gap-x-8 mt-3">
                                    <div className="col-span-1">
                                        <button type="submit" name="submit" id="submitButton" disabled={loading}
                                            className="px-8 py-3 font-semibold uppercase text-white bg-[#ff8900] hover:bg-[#b96301] rounded-xl cursor-pointer relative transition"
                                            title="Click here to submit your message!">
                                                {!loading ? (
                                                    <>
                                                        <FontAwesomeIcon icon={faPaperPlane} className='mr-2' /> Gönder
                                                    </>
                                                ) : (
                                                    <>
                                                        <FontAwesomeIcon icon={faPaperPlane} className='mr-2' /> GÖNDERİLİYOR
                                                    </>
                                                )}
                                        </button>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <div className="alert alert-danger" role="alert" id="alertform">...</div>
                                    </div>
                                    {status && <p className='col-span-2 p-3 bg-green-100 border border-green-300 text-green-800 rounded-lg'>{status}</p>}
                                    {error && <p className='col-span-2 p-3 bg-red-100 border border-red-300 text-red-800 rounded-lg'>{error}</p>}
                                </div>
                            </fieldset>
                        </form>
                        <p>&nbsp;</p>
                    </div>
                </div>
             </div>
        </section>
    );
}

export default Contact;

