import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const SNLGlobe = ({ dimensions }) => {
    // integration of react hooks here
    const [countries, setCountries] = useState({ features: [] });
    const [exporterCountries, setExporterCountries] = useState([]);
    const [hoverD, setHoverD] = useState();

    const globeEl = useRef();

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
            pointsData={exporterCountries}
            pointRadius={0.4}
            pointAltitude={'size'}
            pointColor={() => '#C58940'}
            pointLabel={(country) =>
                `
                                <b style="color:#3A3627">${country.label}</b>
                            `
            }
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