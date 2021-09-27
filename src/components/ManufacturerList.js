import React,{useContext, useState} from 'react';
import Collapsible from '../../../carcatalogapp1/src/components/Collapsible';
import { APIContext } from '../contexts/APIContext';

const ManufacturerList = () => {
    
    const {manufacturers}=useContext(APIContext);
    const [cars, setCars]=useState([]);

    const handleClick=async()=>{
        var responseObject = {};
        var url = 'https://private-anon-c2169b1ed6-carsapi1.apiary-mock.com/cars'

        var requestOptions = {
            method: 'GET'
        }
        await fetch(`${url}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                responseObject = result
                setCars(responseObject);
            })
            .catch(error => console.log('error', error))
        console.log('Am primit masini')
    }


    return ( 
        <div className='manufacturer-list' onClick={()=>handleClick()}>
            {manufacturers && manufacturers.map(manufacturer=>{
                return(
                    <div className='manufacturers' key={manufacturer.id}><Collapsible label={manufacturer.name}> 
                        <div className='car-list'>
                            {cars && cars.length &&
                             cars.map(car=>{
                                return(
                                    <li key={car.id}>
                                            {car.make === manufacturer.name && (
                                                <div>
                                                    <ul>
                                                    <li className='image'><img src={car.img_url} alt={car.model} /></li>
                                                    <li className='car-info'>{car.make} {car.model}</li>
                                                    <li className='HP'>{car.horsepower}HP</li>
                                                    <li className='car-info'>Year {car.year}, price {car.price}$ </li>
                                                    </ul>
                                                    <hr />
                                                </div>)
                                            }
                                    </li>
                             ) 
                            })}
                        </div>    
                    </Collapsible></div>
                )
            })}
        </div>
     );
}
 
export default ManufacturerList;

