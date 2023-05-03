import React, { useEffect, useRef, useState } from 'react';
import ExporterCountryListItem from '../ExporterCountryListItem/ExporterCountryListItem';
import SectionTitle from '../SectionTitle/SectionTitle';
import SNLGlobe from '../SNLGlobe/SNLGlobe';

const FootprintsAroundTheWorld = () => {
    // integration of react hooks here
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
    const [exporterCountries, setExporterCountries] = useState([]);

    const targetDiv = useRef();

    // getting the targeted div dimensions
    useEffect(() => {
        if (targetDiv.current) {
            setDimensions({
                height: targetDiv.current.offsetHeight,
                width: targetDiv.current.offsetWidth
            });
        }

        fetch('exporterCountries.json')
            .then(res => res.json())
            .then(data => setExporterCountries(data));
    }, []);


    // rendering foot prints around the world component here
    return (
        <section className='bg-white py-10'>
            <SectionTitle titleText={'Our Footprints Across the Globe'} />
            <div className='w-[95%] md:w-[90%] mx-auto flex flex-col-reverse xl:flex-row justify-center items-center'>
                <div className='w-full xl:w-2/3'>
                    <h3 className='w-full xl:w-4/5 2xl:w-2/3 text-center xl:text-left text-lg font-semibold'>Throughout the years we have placed our footprints in many countries by exporting quality products.</h3>
                    <div className='w-4/5 mx-auto md:mx-0 2xl:mx-0 2xl:w-2/3 grid grid-cols-1 md:grid-cols-2 mt-10'>
                        <div>
                            {
                                exporterCountries.slice(0, Math.ceil(exporterCountries.length / 2)).map(country => <ExporterCountryListItem key={country._id} countryName={country.label} />)
                            }
                        </div>
                        <div>
                            {
                                exporterCountries.slice(Math.ceil(exporterCountries.length / 2), exporterCountries.length).map(country => <ExporterCountryListItem key={country._id} countryName={country.label} />)
                            }
                        </div>
                    </div>
                </div>
                <div ref={targetDiv} className='w-full xl:w-1/3 h-[50vh] xl:h-[60vh] 2xl:h-[80vh] overflow-hidden'>
                    <SNLGlobe dimensions={dimensions} exporterCountries={exporterCountries} />
                </div>
            </div>
        </section>
    );
};

export default FootprintsAroundTheWorld;