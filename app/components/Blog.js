import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

function Blog({name, date, img, desc, link}) {
    return (
        <article className="col-span-2 md:col-span-1 mt-5 flex flex-col justify-between" data-aos="fade-right">
            <header className='flex flex-col'>
                <div className="post-thumbnail">
                    <Image src={img} alt="Blog image" className='object-cover max-h-[350px] rounded-2xl' width={1000} height={350} />
                </div>
                <h4 className="font-semibold text-2xl mb-5 hover:text-[#ff8900] cursor-pointer">
                    <Link href={link}>
                        <FontAwesomeIcon icon={faLink} className='mr-2 text-lg'></FontAwesomeIcon>
                        {name}
                    </Link>
                </h4>
                <p className="">
                    <FontAwesomeIcon icon={faCalendar} className='mr-2 text-[#ff8900]' />
                    {date} tarihinde yayınlandı
                </p>
            </header>
            <div className="flex flex-col gap-2">
                <p className='mb-10'>{desc} ...</p>
                <Link href={link} className="py-2 px-4 font-semibold rounded-lg btn-primary-corp w-fit">Devamını Oku <FontAwesomeIcon icon={faChevronRight} /></Link>
            </div>
        </article>
    );
}

export default Blog;