import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const SNLGlobe = ({ dimensions }) => {
    // integration of react hooks here
    const [countries, setCountries] = useState({ features: [] });
    const [exporterCountries, setExporterCountries] = useState([]);
    const [hoverD, setHoverD] = useState();

    const globeEl = useRef();

    const markerSvg =
        `
            <svg viewBox="-4 0 36 36">
                <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
                <circle fill="#FAEAB1" cx="14" cy="14" r="7"></circle>
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

        fetch('exporterCountries.json')
            .then(res => res.json())
            .then(data => setExporterCountries(data));
    }, []);


    return (
        <Globe
            ref={globeEl}
            height={dimensions.height}
            width={dimensions.width}
            showAtmosphere={true}
            globeImageUrl='//i.ibb.co/99GJTFG/globe.jpg'
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
            polygonCapColor={() => '#FAEAB1'}
            polygonSideColor={() => '#E5BA73'}
            polygonStrokeColor={() => '#C58940'}
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