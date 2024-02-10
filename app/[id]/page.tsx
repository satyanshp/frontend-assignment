import React from 'react';
import Image from 'next/image';
import vetstreet from '../_assets/vetstreet.webp'
import wikipedia from '../_assets/wikipedia.png'
import ImageLink from '../_components/Image';

type Params = {
    params: {
      id: string;
    }
};

const getData = async(id: string) => {
    const res = await fetch('https://api.thecatapi.com/v1/images/' + id)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
};

const Rating = (star:any) => {
  return(
    <div className='rating_container'>
      {Array.apply(null, Array(5)).map((_,index)=>(
        <div className='star' key={`start-${index}`} style={{background:((index+1)<=(star.star))?"#9EC8B9":"#FFFFFF20"}}></div>
      ))}
    </div>
  )
}

const page = async ({params:{id}}:Params) => {
    const data = await getData(id);
  return (
    <div className='container'>
      <div className='img_container'>
        <div className='img'>
          <Image src={data.url} alt="cat" width={data.width} height={data.height} />
        </div>
      </div>
      <div className='details_container'>
        <div className='field_container'>
          <h1>{data.breeds[0].name}</h1>
          <ImageLink src={wikipedia} alt="wikipedia" link={data.breeds[0].wikipedia_url} />
          <ImageLink src={vetstreet} alt="vetstreet" link={data.breeds[0].vetstreet_url} />
        </div>
        <div className='field_container'>
          <p className="details">{data.breeds[0].description}</p>
        </div>
        <div className='field_container'>
          <h2 className='label'>origin:</h2>
          <p className="details">{data.breeds[0].origin}</p>
        </div>
        <div className='field_container'>
          <h2 className='label'>temperament:</h2>
          <p className="details">{data.breeds[0].temperament}</p>
        </div>
        <div className='field_container'>
          <h2 className='label'>life span:</h2>
          <p className="details">{data.breeds[0].life_span} years</p>
        </div>
        <div className='field_container'>
          <h2 className='label'>weight:</h2>
          <p className="details">Imperial: {data.breeds[0].weight.imperial}kg <br/>Metric: {data.breeds[0].weight.imperial}kg</p>
        </div>
        <div className='field_container'>
          <h2 className='label'>country code:</h2>
          <p className="details">{data.breeds[0].country_code}</p>
        </div>
        <div className='all_ratings'>
          <div className='field_container'>
            <h2 className='label'>indoor:</h2>
            <Rating star={data.breeds[0].indoor}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>lap:</h2>
            <Rating star={data.breeds[0].lap}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>adaptability:</h2>
            <Rating star={data.breeds[0].adaptability}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>affection level:</h2>
            <Rating star={data.breeds[0].affection_level}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>child friendly:</h2>
            <Rating star={data.breeds[0].child_friendly}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>dog friendly:</h2>
            <Rating star={data.breeds[0].dog_friendly}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>energy level:</h2>
            <Rating star={data.breeds[0].energy_level}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>grooming:</h2>
            <Rating star={data.breeds[0].grooming}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>health issues:</h2>
            <Rating star={data.breeds[0].health_issues}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>intelligence:</h2>
            <Rating star={data.breeds[0].intelligence}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>shedding level:</h2>
            <Rating star={data.breeds[0].shedding_level}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>social needs:</h2>
            <Rating star={data.breeds[0].social_needs}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>stranger friendly:</h2>
            <Rating star={data.breeds[0].stranger_friendly}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>vocalisation:</h2>
            <Rating star={data.breeds[0].vocalisation}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>experimental:</h2>
            <Rating star={data.breeds[0].experimental}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>hairless:</h2>
            <Rating star={data.breeds[0].hairless}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>natural:</h2>
            <Rating star={data.breeds[0].natural}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>rare:</h2>
            <Rating star={data.breeds[0].rare}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>rex:</h2>
            <Rating star={data.breeds[0].rex}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>suppressed tail:</h2>
            <Rating star={data.breeds[0].suppressed_tail}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>short legs:</h2>
            <Rating star={data.breeds[0].short_legs}/>
          </div>
          <div className='field_container'>
            <h2 className='label'>hypoallergenic:</h2>
            <Rating star={data.breeds[0].hypoallergenic}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page