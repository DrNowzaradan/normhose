import React from 'react';

function cardList({header, children}) {
    return (
        <div className="my-20 container mx-auto">
            <div className="mx-auto">
                {header && (
                    <div className="title mb-10" data-aos="fade-right" data-aos-duration="200">
                        <h2 className="tracking-wide">{header}</h2>
                    </div>
                )}

                <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default cardList;