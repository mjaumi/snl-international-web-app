import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import SectionTitle from '../SectionTitle/SectionTitle';

const FootprintsAroundTheWorld = () => {
    // integration of react hooks here
    const [countries, setCountries] = useState({ features: [] });
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

        fetch('countries.geojson')
            .then(res => res.json())
            .then(setCountries)
    }, []);

    // rendering foot prints around the world component here
    return (
        <section className='bg-white py-10'>
            <SectionTitle titleText={'Our Footprints across the globe'} />
            <div className='w-[90%] mx-auto flex justify-center items-center'>
                <div className='w-1/2'>
                    <h1 className='text-9xl font-bold'>Hello World!!!</h1>
                </div>
                <div ref={targetDiv} className='w-1/2 h-[80vh] bg-primary overflow-hidden'>
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
                        polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
                        polygonAltitude={d => d === hoverD ? 0.12 : 0.01}
                        polygonCapColor={d => d === hoverD ? 'steelblue' : '#FAEAB1'}
                        polygonSideColor={() => '#E5BA73'}
                        polygonStrokeColor={() => '#C58940'}
                        polygonLabel={({ properties: d }) =>
                            `
                                <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
                                GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
                                Population: <i>${d.POP_EST}</i>
                            `
                        }
                        onPolygonHover={setHoverD}
                        polygonsTransitionDuration={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default FootprintsAroundTheWorld;