import React from 'react';
import Header from '../components/Header';
import { Table } from 'react-bootstrap'
import './Styles.css';
import { BsCheckLg } from "react-icons/bs";
import Footer from '../components/Footer';
import ev from '../assets/ev.png'
function Service() {
  return <div className='Service'>
    <Header></Header>
    <img class="card-img-top" alt="..." src={ev} height={550}></img>
    <div className='container'>
      <h1 className='h1ser'>KABATAŞ YAPI MALZELERİ</h1>
      <h2 className='h2ser'>ÜRÜN LİSTESİ</h2>
      <Table striped bordered hover variant="secondary" className='table'>
        <thead>
          <tr>

            <th colSpan={3}> İNŞAAT MALZEMELERİ</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Menfezler</td>
            <td><BsCheckLg className='a'></BsCheckLg> Plastik Borular</td>
            <td><BsCheckLg className='a'></BsCheckLg> Yapıştırıcı</td>


          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Parkeler</td>
            <td><BsCheckLg className='a'></BsCheckLg> Alçı</td>
            <td><BsCheckLg className='a'></BsCheckLg> Derz</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="secondary" className='table'>
        <thead>
          <tr>

            <th colSpan={3}> SU TESİSATI ÜRÜNLERİ</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Armatür</td>
            <td><BsCheckLg className='a'></BsCheckLg> Musluk</td>
            <td><BsCheckLg className='a'></BsCheckLg> Bataryalar</td>


          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Banyo Dolap ve Aksesuarları</td>
            <td><BsCheckLg className='a'></BsCheckLg> Duş Sistemleri</td>
            <td><BsCheckLg className='a'></BsCheckLg> Sıhhi Tesisat Malzemeleri</td>
          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> PVC Borular</td>
            <td><BsCheckLg className='a'></BsCheckLg> Klozet/Rezervuar ve İç Takımı</td>
            <td><BsCheckLg className='a'></BsCheckLg> Sifonlar</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="secondary" className='table'>
        <thead>
          <tr>

            <th colSpan={3}> YAPI KİMYASALLARI</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Yapıştırıcılar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Derz Dolgular</td>
            <td><BsCheckLg className='a'></BsCheckLg> Sıvalar</td>


          </tr>
          <tr>
            <td><BsCheckLg className='a'></BsCheckLg> Su Yalıtım Malzemeleri</td>

            <td><BsCheckLg className='a'></BsCheckLg> Astarlar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Katkılar ve Yardımcı Maddeler</td>
          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Zemin Malzemeleri</td>
            <td><BsCheckLg className='a'></BsCheckLg> Döşeme Bileşikleri</td>
            <td><BsCheckLg className='a'></BsCheckLg> Tamir Harçları</td>


          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="secondary" className='table'>
        <thead>
          <tr>

            <th colSpan={3}> HIRDAVAT ÜRÜNLERİ</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Elektrikli El Aletleri</td>
            <td><BsCheckLg className='a'></BsCheckLg> Kaynak Ekipmanları</td>
            <td><BsCheckLg className='a'></BsCheckLg> Takım Çantaları</td>


          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Hırdavat Malzemeleri</td>
            <td><BsCheckLg className='a'></BsCheckLg> Eldivenler</td>
            <td><BsCheckLg className='a'></BsCheckLg> Ölçü Aletleri</td>
          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Slikon ve Mastikler</td>
            <td><BsCheckLg className='a'></BsCheckLg> Yapıştırıcı ve Bantlar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Mekanik El Aletleri </td>


          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="secondary " className='table'>
        <thead>
          <tr>

            <th colSpan={3}> BOYA MALZEMELERİ</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> İç Cephe Boyaları</td>
            <td><BsCheckLg className='a'></BsCheckLg> Tinerler</td>
            <td><BsCheckLg className='a'></BsCheckLg> Dış Cephe Boyaları</td>


          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Dekoratif Boyalar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Ahşap Boyalar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Metal Boyaları</td>
          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Tavan Boyaları</td>
            <td><BsCheckLg className='a'></BsCheckLg> Astarlar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Fırçalar, Rulolar</td>
          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Fırça Sapları, Boya Kovaları ve Malzemeleri</td>

          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="secondary" className='table'>
        <thead>
          <tr>

            <th colSpan={3}> SERAMİK BANYO ÜRÜNLERİ</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Banyo Mobilyaları</td>
            <td><BsCheckLg className='a'></BsCheckLg> Duş Sistemleri</td>
            <td><BsCheckLg className='a'></BsCheckLg> Ankastre Setler</td>


          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Klozet Kapakları</td>
            <td><BsCheckLg className='a'></BsCheckLg> Gömme Rezervuar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Armatürler</td>
          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Klozetler</td>
            <td><BsCheckLg className='a'></BsCheckLg> Tamamlayıcı Ürünler</td>
            <td><BsCheckLg className='a'></BsCheckLg> Yer Karoları</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="secondary" className='table'>
        <thead>
          <tr>

            <th colSpan={3}> ELEKTRİK & AYDINLATMA ÜRÜNLERİ</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Ampuller</td>
            <td><BsCheckLg className='a'></BsCheckLg> Prizler & Anahtarlar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Grup Prizler</td>


          </tr>
          <tr>

            <td><BsCheckLg className='a'></BsCheckLg> Sigortalar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Enerji Kabloları, Kablo Kanalları ve Buatlar</td>
            <td><BsCheckLg className='a'></BsCheckLg> Dağıtım Üniteleri</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <Footer></Footer>
  </div>;
}

export default React.memo(Service);
