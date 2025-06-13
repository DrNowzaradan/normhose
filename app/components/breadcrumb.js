import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
const Breadcrumb = ({linkList, className}) => {
    return (
<nav className={`container mx-auto ${className} -mt-10  mb-10 flex`} aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2">
    <li className="inline-flex items-center">
      <Link href={"/"} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#ff8900] transition duration-300">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </li>
    {
        linkList.map((link, index) => (
            <li key={index}>
            {link.href == "" ? (
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className='text-sm text-neutral-500 mx-1 ' />
                    <span className="ms-1 text-sm font-medium text-neutral-800 md:ms-2">{link.link_name}</span>
                </div>
              ):(
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className='text-sm text-neutral-500 mx-1' />
                    <Link href={link.href} className="ms-1 text-sm font-medium text-gray-700 hover:text-[#ff8900] md:ms-2">{link.link_name}</Link>
                </div>
              )}
              </li>
        ))
    }
  </ol>
</nav>

    );
}

export default Breadcrumb;

