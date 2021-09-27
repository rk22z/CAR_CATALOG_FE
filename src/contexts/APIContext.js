import React, { useState, createContext, useEffect } from 'react';

export const APIContext = createContext();

const APIContextProvider = (props) => {
    const [manufacturers, setManufacturers] = useState([]);


    const getDataFromApi = async () => {
        var responseObject = {};
        var url = 'https://private-anon-c2169b1ed6-carsapi1.apiary-mock.com/manufacturers'

        var requestOptions = {
            method: 'GET'
        }
        await fetch(`${url}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                responseObject = result
                setManufacturers(responseObject);
            })
            .catch(error => console.log('error', error))
        console.log('Am primit producatori')
    }

    useEffect(() => {
        getDataFromApi();
    }, []);

    return (
        <APIContext.Provider value={{ manufacturers }}>
            {props.children}
        </APIContext.Provider>
    );
}

export default APIContextProvider;