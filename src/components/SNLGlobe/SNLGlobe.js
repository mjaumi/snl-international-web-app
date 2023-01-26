import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const SNLGlobe = ({ dimensions, exporterCountries }) => {
    // integration of react hooks here
    const [countries, setCountries] = useState({ features: [] });

    const [hoverD, setHoverD] = useState();

    const globeEl = useRef();

    const markerSvg =
        `
            <svg viewBox="-4 0 36 36">
                <path fill="#285430" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
                <circle fill="#E5D9B6" cx="14" cy="14" r="7"></circle>
            </svg>
        `;

    // loading countries data here
    useEffect(() => {

        // to auto rotate the globe
        globeEl.current.controls().enableZoom = false;
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.7;
        globeEl.current.pointOfView({
            lat: 23.6850,
            lng: 90.3563,
            altitude: 2.5
        }
            , 0);

        fetch('countries.geojson')
            .then(res => res.json())
            .then(setCountries);
    }, []);


    return (
        <Globe
            ref={globeEl}
            height={dimensions.height}
            width={dimensions.width}
            showAtmosphere={true}
            globeImageUrl='https://i.ibb.co/jgDJG3d/globe2.jpg'
            backgroundColor={'#FFFFFF'}
            atmosphereColor={'#FAEAB1'}
            animateIn={true}
            lineHoverPrecision={0}

            htmlElementsData={exporterCountries}
            htmlElement={d => {
                const el = document.createElement('div');
                el.innerHTML = markerSvg;
                el.style.color = '#C58940';
                el.style.width = `24px`;

                el.style['pointer-events'] = 'auto';
                el.style.cursor = 'pointer';
                el.onmouseenter = () =>
                    `
                        <b style="color:#3A3627">${d.name}</b>
                    `;
                return el;
            }}

            polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
            polygonAltitude={d => d === hoverD ? 0.06 : 0.01}
            polygonCapColor={() => '#A4BE7B'}
            polygonSideColor={() => '#5F8D4E'}
            polygonStrokeColor={() => '#285430'}
            polygonLabel={({ properties: d }) =>
                `
                    <b style="color:#3A3627">${d.ADMIN} (${d.ISO_A2})</b>
                `
            }
            onPolygonHover={setHoverD}
            polygonsTransitionDuration={300}
            pointOf
        />
    );
};

export default SNLGlobe;