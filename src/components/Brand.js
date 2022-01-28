import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import log1 from '../assets/logo1.png'
import log2 from '../assets/logo2.png'
import log3 from '../assets/logo3.png'
import log4 from '../assets/logo4.png'
import log5 from '../assets/logo5.png'
import log6 from '../assets/logo6.png'
import log7 from '../assets/logo7.png'
import log8 from '../assets/logo8.png'
function Brand() {
    return (
        <div>
            <div className='Minicard '>
                <h5 className='h5'>Çalıştığımız Ürün Gruplarımız</h5>
                <h1 className='h1'>Markalarımız</h1>
                <div className='Minicard2'>
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card className='cardmini'>
                                <Card.Img className='brandimg' variant="top" src={log1} />

                            </Card>
                        </Col>
                        <Col>
                            <Card className='cardmini'>
                                <Card.Img className='brandimg' variant="top" src={log2} />

                            </Card>
                        </Col>
                        <Col>
                            <Card className='cardmini'>
                                <Card.Img className='brandimg' variant="top" src={log3} />

                            </Card>
                        </Col>
                        <Col>
                            <Card className='cardmini'>
                                <Card.Img className='brandimg' variant="top" src={log4} />

                            </Card>
                        </Col>
                        <Col>
                            <Card className='cardmini'>
                                <Card.Img className='brandimg'  variant="top" src={log5} />

                            </Card>
                        </Col>
                        <Col>
                            <Card className='cardmini'>
                                <Card.Img className='brandimg' variant="top" src={log6} />

                            </Card>
                        </Col>
                        <Col>
                            <Card className='cardmini'>
                                <Card.Img className='brandimg' variant="top" src={log7} />

                            </Card>
                        </Col>
                        <Col>
                            <Card className='cardmini'>
                                <Card.Img className='brandimg' variant="top" src={log8} />

                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default React.memo(Brand);
