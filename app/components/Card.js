import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
function Card({img, title, desc, link}) {
    return (
        <div className="col-span-1 sector-card ">
            <div className='flex flex-col justify-between border-bottom border-b-2 border-b-[#ff8900] bg-[#f9f9f9] rounded-xl h-full'>
                {img && 
                <div className="blognews">
                    <div className="item-img-wrap">
                        <Image src={img} className="img-fluid w-full max-h-[200px] object-cover rounded-ss-xl rounded-se-xl" alt="referans görsel" width={1000} height={1000} />
                    </div>
                </div>
                }
                <div className="py-4 px-5">
                    <h5 className="font-semibold text-neutral-800 mb-3" data-aos="fade-up">{title}</h5>
                    <p data-aos="fade-up">{desc}</p>
                </div>
                <div className="flex justify-between items-center h-[1px] w-auto bg-neutral-300 mt-auto mx-5"></div>
                <div className="px-5 py-6">
                    <Link
                        href={link}
                        className="w-full text-[#ff8900] rounded-md flex justify-start items-center gap-2 font-semibold group"
                    >
                        <span className="group-hover:underline transition-all duration-300">
                              Detaylı İncele
                            </span>{" "}
                            <FontAwesomeIcon
                              className="group-hover:translate-x-1 transition-all duration-300"
                              icon={faChevronRight}
                            />
                          </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;