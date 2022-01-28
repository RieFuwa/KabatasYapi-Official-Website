import React from 'react';
import bir from '../assets/one.jpg'
import iki from '../assets/two.jpg'
import uc from '../assets/three.jpg'
import dort from '../assets/four.jpg'
function CardGroups() {
    return (
        <div class="card-group  ">
            <h1 className='h1'>Ürün Gruplarımız</h1>
            <div class="card-group  ">
                <div class="card">
                    <img src={bir} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Hırdavat Ürünleri</h5>
                        <p class="card-text"> Evinizde ve işinizde bulunması gereken günlük el aletlerinin yanı sıra iş yerinizde ihtiyacınız olan mekanik el aletlerine Kabataş Yapı güvencesi ile sahip olabilirsiniz. </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Ürün Grupları #1</small>
                    </div>
                </div>
                <div class="card">
                    <img src={iki} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Boya Malzemeleri</h5>
                        <p class="card-text">Sahip olduğumuz seçkin boya markasına ait bayilik ile sizi standartlardan uzaklaştırıp zevkinize uygun dilediğiniz boyayı üretip kullanabilmeniz için gereken tüm malzemeler ile size sunuyoruz.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Ürün Grupları #2</small>
                    </div>
                </div>
                <div class="card">
                    <img src={uc} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Elektrik & Aydınlatma Ürünleri</h5>
                        <p class="card-text">Projelerinizde veya günlük yaşantınızda ihtiyacınız olan ürününe Kabataş Yapı ile ulaşabilirsiniz. Tüm seçkin markaların ürününü perakende satın alabilirsiniz.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Ürün Grupları #3</small>
                    </div>
                </div>
                <div class="card">
                    <img src={dort} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Su Tesisatı Ürünleri</h5>
                        <p class="card-text">Su tesisatınız için gereken her şeye Kabataş Yapı ile ulaşabilirsiniz. Tüm seçkin markaların perakende satın alabilirsiniz.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Ürün Grupları #4</small>
                    </div>
                </div>
            </div>
            <hr className='hr'></hr>
        </div>

    )

}

export default React.memo(CardGroups);
