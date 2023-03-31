import React from 'react';

export default function ReactCountriesFlags({isoCode, alt = "flag", width = 25, height = 15}) {
    let flag;
    let iso = isoCode?.toString().toLowerCase();
    try {
        flag = require(`../src/flags/${iso}.png`);
    } catch (e) {
        iso ? console.warn(`Flag for ${iso} not found. Using default flag instead.`) : console.warn(`Using default flag instead.`)
        flag = require(`../src/flags/default.png`);
    }
    return (
        <div className="reactCountriesFlags"
             style={{
                 width: width + "px",
                 height: height + "px",
                 margin: 0,
                 padding: 0,
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
             }}>
            <img src={flag}
                 alt={alt}
                 style={{
                     width: "100%",
                     height: "100%",
                     border: "1px solid #eeeeee",
                     backgroundPosition: "center",
                     backgroundSize: "contain",
                     backgroundRepeat: "no-repeat",
                 }}
            />
        </div>
    );
};
