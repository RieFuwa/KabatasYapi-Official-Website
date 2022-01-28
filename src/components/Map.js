import React from 'react';
import {ListGroup } from 'react-bootstrap'

function Map() {
    return (
        <div className='container'>


            <div className='map '>
                <h1 className='h1'>İletişim</h1>
                <div className='maps'>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1RDcYbaxPWEUGRtIpPvpzC4vEB4TIZlq6&ehbc=2E312F" width="100%" height="400" overflow='hidden'></iframe>

                </div>
                <ListGroup variant="flush" className='listgroup2'>
                    <ListGroup.Item className='cardmini'>TELEFON: 0216 311 84 09</ListGroup.Item>
                    <ListGroup.Item className='cardmini'>ADRES: Fatih, 34885 Sancaktepe/İstanbul</ListGroup.Item>
                    <ListGroup.Item className='cardmini'>E-POSTA: kabatasyap@gmail.com</ListGroup.Item>                
                </ListGroup>
            </div>
        </div>
    );
}

export default React.memo(Map);
