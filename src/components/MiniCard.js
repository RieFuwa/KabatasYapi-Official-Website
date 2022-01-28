import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import { BsFillPersonCheckFill,BsHandThumbsUpFill,BsFillBagCheckFill,BsFillChatRightDotsFill} from "react-icons/bs";
function MiniCard() {
    return (
        <div className='Minicard '>
            <h5 className='h5'>Her zaman sizinleyiz</h5>
            <h1 className='h1'>Değişmeyen İlkelerimiz</h1>
            <div className='Minicard2'>
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <Card className='cardminia'>
                           <BsFillPersonCheckFill className='c1'/>
                            <Card.Body>
                                <Card.Title>TECRÜBE</Card.Title>
                                <Card.Text className='at'>
                                1999 yılından bu yana sektörde en iyi hizmeti vermeye devam ediyoruz.
                                 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='cardminia'>
                           <BsHandThumbsUpFill className='c1'/>
                            <Card.Body>
                                <Card.Title>KALİTE</Card.Title>
                                <Card.Text className='at'>
                                Sektörün, en kaliteli markalarının, en kaliteli ürünlerini sizlere sunuyoruz.
                                   
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='cardminia'>
                           <BsFillBagCheckFill className='c1'/>
                            <Card.Body>
                                <Card.Title>UYGUN FİYAT</Card.Title>
                                <Card.Text className='at'>
                                Kalite ve uygun fiyat artık hayal değil. Hepsini bir noktada buluşturuyoruz.
                                  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='cardminia'>
                        <BsFillChatRightDotsFill className='c1'/>
                            <Card.Body>
                                <Card.Title>MEMNUNİYET</Card.Title>
                                <Card.Text className='at'>
                                %100 memnuniyet garantisi. Satış sonrası müşterilerimize destek veriyoruz.
                                  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                </Row>
            </div>
            <hr className='hr'></hr>
        </div>
    )

}

export default React.memo(MiniCard);
