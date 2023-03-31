import React from 'react';

export default function ReactCountriesFlags({isoCode ='default.png', alt = "flag", width = 25, height = 15}) {
    let url;
    try {
        url = require(`../flags/${isoCode.toLowerCase()}.png`);
    } catch (error) {
        console.warn(`Flag for ${isoCode.toLowerCase()} not found. Using default flag instead.`);
        url = require("../flags/default.png");
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
            <img src={url}
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
