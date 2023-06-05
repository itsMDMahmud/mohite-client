import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import useTitle from '../hook/useTitle';

const Services = () => {
    useTitle('Booked Services');
    const loadServices = useLoaderData();
    const [services, setServices] = useState(loadServices)
    return (
        <div>
            
            <h2 className="text-5xl py-10 font-semibold text-center">Remaining service list</h2>
            <div className='grid md:grid-cols-3 m-10'>
                {
                    services.map(service => <ServiceCard 
                        service={service} 
                        services={services} 
                        setServices={setServices} 
                        key={service._id}/>)
                }
            </div>
        </div>
    );
};

export default Services;
