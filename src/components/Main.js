import React from 'react'
import logo from '../images/player.JPG'


export default function Main(props){
    return (
        <div className='main'>
            <div className='content'>
                <div className='content-img'>
                    <img src={props.item.imageUrl} alt='' />
                </div>
                <div className='info'>
                    <div className='location'>
                        <i className="fa fa-map-marker"> </i> 
                        <span className='country'>{props.item.location}</span>
                        <span><a href = {props.item.googleMapsUrl}> View on Google maps</a></span>
                    </div> 
                 
                    <div className='describe'>
                        <h3>{props.item.title}</h3>
                        <p><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
                        <p>{props.item.description}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}