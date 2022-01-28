import React from 'react';
import Header from '../components/Header';
import { Form, Button, Card } from 'react-bootstrap'
import Footer from '../components/Footer';
import bir2 from '../assets/biri.jpg'

function Contact() {
  return <div className='Contact'>
    <Header></Header>
    <div className='map'>
      <div className='maps'>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1RDcYbaxPWEUGRtIpPvpzC4vEB4TIZlq6&ehbc=2E312F" width="100%" height="550" overflow='hidden'></iframe>
      </div>
      <div className='container'>
        <Card className='contanctabout' style={{ width: '18rem' }}>
          <Card.Img  style={{ marginLeft: "0.1%" }} variant="top" src={bir2} />
          <Card.Body>
            <Card.Title>İLETİŞİM</Card.Title>
            <Card.Text>
              TELEFON: 0216 311 84 09
            </Card.Text>
            <Card.Text>
              ADRES: Yakacık Cad., No:63B, Sancaktepe/İst.
            </Card.Text>
            <Card.Text>
              E-POSTA: kabatasyap@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
        <div className='shortstyle'>
          <h3 className='formh3'>Bizimle İletişime Geçin</h3>
          <Form>
            <form action="https://formspree.io/f/xknygerz" method='POST'>
              <Form.Group className="mb-3">
                <Form.Label for='name'>Adınız</Form.Label>
                <Form.Control type="text" name="name" id="name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label for="mail">Email Adresi</Form.Label>
                <Form.Control type="email" name="mail" id="mail" placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label for="konu">Konu</Form.Label>
                <Form.Control type="text" name="konu" id="konu" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label for="mesaj">Mesaj</Form.Label>
                <Form.Control type="text" name="mesaj" id="mesaj" rows={3} required />
              </Form.Group>
              <Button className="mb-2" variant="light" type="submit">GÖNDER</Button>
              <Button className="mb-2" variant="light" type='reset'>TEMİZLE</Button>
            </form>
          </Form>


        </div>
      </div>
    </div>
    <Footer></Footer>
  </div >;
}

export default React.memo(Contact);
