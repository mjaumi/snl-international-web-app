import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import SectionTitle from '../SectionTitle/SectionTitle';

const FootprintsAroundTheWorld = () => {
    // integration of react hooks here
    const [countries, setCountries] = useState({ features: [] });
    const [exporterCountries, setExporterCountries] = useState([]);
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
    const [hoverD, setHoverD] = useState();

    const globeEl = useRef();
    const targetDiv = useRef();

    // loading countries data here
    useEffect(() => {

        if (targetDiv.current) {
            setDimensions({
                height: targetDiv.current.offsetHeight,
                width: targetDiv.current.offsetWidth
            });
        }

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

    // rendering foot prints around the world component here
    return (
        <section className='bg-white py-10'>
            <SectionTitle titleText={'Our Footprints across the globe'} />
            <div className='w-[95%] md:w-[90%] mx-auto flex flex-col-reverse xl:flex-row justify-center items-center'>
                <div className='w-full xl:w-2/3'>
                    <h1 className='2xl:text-9xl font-bold'>Hello World!!!</h1>
                </div>
                <div ref={targetDiv} className='w-full xl:w-1/3 md:h-[50vh] xl:h-[60vh] 2xl:h-[80vh] overflow-hidden'>
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
                </div>
            </div>
        </section>
    );
};

export default FootprintsAroundTheWorld;