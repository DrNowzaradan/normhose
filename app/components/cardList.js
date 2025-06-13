import React from 'react';

function cardList({header, children}) {
    return (
        <div className="bg-white container mx-auto">
            <div className="mx-auto py-16 px-8">
                {header && (
                    <div className="title mb-10">
                        <h2 className="tracking-tight">{header}</h2>
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