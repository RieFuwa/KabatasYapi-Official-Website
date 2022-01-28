import React from 'react';
import { Card, Row, Col,ListGroup} from 'react-bootstrap'
import { ImLinkedin, ImGithub,ImHome,ImMail } from "react-icons/im";
function Footer() {
    return (
        <div className='Lower bg-dark'>
            <div className='container '>
               
                <div className='Lower2'>
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card className='cardd bg-secondary'>
                                <p>KABATAŞ YAPI<br></br>
                                    İnşaat ve Yapı Malzemeleri ve Ticaret Limited Şirketi, 1999 yılında hırdavat malzemesi tedariği sağlamak amacı ile kurulmuş olup, günümüzde sizlere hizmet vermektedir.
                                    </p>
                                    <br></br>
                            </Card>
                        </Col>
                        <Col>
                        <ListGroup variant="flush" >
                                <ListGroup.Item className='cardd bg-secondary '>ÇALIŞMA SAATLERİMİZ</ListGroup.Item>
                                <ListGroup.Item className='cardd bg-secondary '>Pazartesi-Cumartesi 07.00-20.00</ListGroup.Item>
                                <ListGroup.Item className='cardd bg-secondary'>Pazar&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;10.00-20.00</ListGroup.Item>
                                <ListGroup.Item className='cardd bg-secondary'></ListGroup.Item>
                                <ListGroup.Item className='cardd bg-secondary'></ListGroup.Item>
                               
                                
                            </ListGroup>
                        </Col>
                        <Col>
                        <ListGroup variant="flush" >
                                <ListGroup.Item className='cardd bg-secondary'>BİZE ULAŞIN</ListGroup.Item>
                                <ListGroup.Item className='cardd bg-secondary'>Telefon: 0216 311 84 09</ListGroup.Item>
                                <ListGroup.Item className='cardd bg-secondary'>Adres: Fatih, 34885 Sancaktepe/İst.</ListGroup.Item>
                                <ListGroup.Item className='cardd bg-secondary'></ListGroup.Item>
                                <ListGroup.Item className='cardd bg-secondary'></ListGroup.Item>
                                
                                
                            </ListGroup>
                        </Col>
                        <Col>
                            <Card className='cardd bg-secondary'>
                                <p>2022-2023 KABATAŞ YAPI® TESCİLLİ MARKADIR VE TÜM HAKLARI SAKLIDIR. DESIGNED & CODED BY <a href="https://riefuwaofficial.netlify.app/" target="_blank" className='alink'>RIE FUWA</a> <br></br><br></br>
                                </p>
                                
                                <div className="share">
                                    <a href="https://www.linkedin.com/in/bkabatas/" target="_blank" rel="noreferrer"><ImLinkedin className="sharea" /></a>&ensp;
                                    <a href="https://github.com/RieFuwa" target="_blank" rel="noreferrer"><ImGithub className="sharea" /></a>&ensp;
                                    <a href="mailto:bedirhankabatas1@gmail.com" target="_blank" rel="noreferrer"><ImMail className="sharea"   /></a>                                
                                    <a href="https://riefuwaofficial.netlify.app/"  target="_blank" rel="noreferrer"><ImHome className="sharea"/></a>
                                    <br></br>
                                    <br></br>
                                  
                                </div>
                            </Card>
                        </Col>
                        
                    </Row>
                 
                </div>
               
            </div>
           
          
        </div>
    )
}

export default React.memo(Footer);