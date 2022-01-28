import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from 'react-bootstrap'
import uc from '../assets/uc.png';
import './Styles.css';
function About() {

  return <div className='about'>
    <Header></Header>
    <img class="card-img-top" alt="..." src={uc} height={550}></img>
    <div className='container'>
      <Card className='aboutcard bg-dark'>
        <Card.Header>Hakkımızda</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Kabataş İnşaat ve İnşaat Malzemeleri ve Ticaret Limited Şirketi, 1999 yılında hırdavat malzemeleri tedariği sağlamak amacı ile kurulmuştur. Hırdavat malzemeleri satışı ile iş yaşamına başlayan kurumumuz, zamanla sektörün saygısını kazanıp birçok seçkin firmanın bayiliğini üstlenmiştir. Bu bağlamda kurumumuzdaki ürün yelpazesinin rakip firmalara oranla geniş olması ve stok kapasitesinin yüksekliği müşterilerimizin üzerinde market etkisi yaratması sebebi ile kurumumuz Kabataş Yapı Market ismini bünyesine katarak ticari faaliyetlerine devam etmiştir. Kurumumuz inşaat ve inşaat malzemeleri satış faailiyetleri dışında günümüzde 50 adetin üzerinde anahtar teslim konut yapımı gerçekleştirerek bu sektörde de hizmet vermeye devam etmektedir.{' '}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">KABATAŞ YAPI</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>

      <Card className='aboutcard bg-dark'>
        <Card.Header>Misyonumuz</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Malzemenin tüm teknik detaylarını önemseyerek doğru kullanılmasını sağlayan firmamız, bu sayede tüketicimizinde bilinçlendirilmesinde ciddi katkılar sunmaktadır. Kurumumuz bu düşünceleri benimseyerek, hızlı ve güvenilir çalışmalarına gelecek yıllarda da devam ettireceğine inanmaktadır.{' '}
            </p>

          </blockquote>
        </Card.Body>
      </Card>
      <Card className='aboutcard bg-dark'>
        <Card.Header>Vizyonumuz</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Piyasanın her zaman en iyisi olan iş ortaklarımızı arttırarak kaliteli ürünleri uygun fiyata sizlerle buluşturmak.{' '}
            </p>

          </blockquote>
        </Card.Body>
      </Card>
    </div>
    <br></br>

    <Footer></Footer>
    
  </div>;
}

export default React.memo(About);
