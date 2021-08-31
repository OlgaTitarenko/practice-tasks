import React from 'react';
import {getHotels, getApartments, getLoges} from '../../api/api';

interface Hotel {
  id: string,
  index: number,
  guid: string,
  distance: number,
  title: string,
  email: string,
  phone: string,
  address: string,
  about: string,
  image: string,
  price: string,
  rate: number,
  stars: number
}

interface Apartment {
  id: string,
  index: number,
  guid: string,
  distance: number,
  title: string,
  address: string,
  description: string,
  image: string,
  price: string,
  rate: number
}


interface Lodge {
  id: string,
  index: number,
  guid: string,
  distance: number,
  title: string,
  address: string,
  description: string,
  image: string,
  price: string,
  rate: number,
  starts: number
}

interface Place {
  title: string,
  address: string,
  distance: number,
  description: string
}

function PlaceList() {
  
  const places: Place[] = [];

  Promise.allSettled([getHotels(), getApartments(), getLoges()])
      .then((values) => {
        console.log(values[0].value)
     
     


      }).catch(error => alert(error))
  


    return (
      <div>
          Render list of all places here
      </div>
    );
}

export default PlaceList;
