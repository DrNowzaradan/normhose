import React from 'react';

function cardList({header, children}) {
    return (
        <div className="bg-[#f9f9f9]">
            <div className="mx-auto container py-16 px-8">
                <div className="title">
                    <h2 className="tracking-tight">{header}</h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default cardList;