import React, { useEffect, useState } from 'react';
import { getHotels, getApartments, getLoges } from '../../api/api';

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
  title: string;
  address: string;
  distance: number;
  description: string
}

function PlaceList() {

  //const places: Place[] = [];
  const [places, setPlaces] = useState<Place[]>([])

  useEffect(() => {

    Promise.allSettled([getHotels(), getApartments(), getLoges()])
      .then((values) => {
        console.log(values)
        if (values[0].status === 'fulfilled' && values[0].value !== {}) {
         
            values[0].value.forEach((value: Hotel) => {
              let v: Place = {
                title: value.title,
                address: value.address,
                distance: value.distance,
                description: value.about
              }
                setPlaces(oldValue => [...oldValue, v])
            })
          
          
        }
        if (values[1].status === 'fulfilled' && values[1].value !== {}) {
          
            values[1].value.forEach((value: Apartment) => {
              let v: Place = {
                title: value.title,
                address: value.address,
                distance: value.distance,
                description: value.description
              }
                setPlaces(oldValue => [...oldValue, v])
            })
          
        }
        if (values[2].status === 'fulfilled' && values[2].value !== {}) {
          values[2].value.forEach((value: Lodge) => {
            let v: Place = {
              title: value.title,
              address: value.address,
              distance: value.distance,
              description: value.description
            }
              setPlaces(oldValue => [...oldValue, v])
          })
        }

      }).catch(error => alert(error))


  }, [])



  return (
    <div>
      <div className="ui cards">
        {
          places.map((place, key) =>
            <div className="ui card" key={key}>
              <div className="content">
                <div className="header">{place.title}</div>
                <div className="meta">{place.distance}</div>
                <div className="description">{place.description}</div>
              </div>
            </div>

          )
        }
      </div>
    </div>
  );
}

export default PlaceList;
