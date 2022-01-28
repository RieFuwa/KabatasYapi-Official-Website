import React from 'react';
import Header from '../components/Header';
function Error() {
  return <div>
    <Header></Header>
    <div className='error'>
    <h1 className='errorA'>KABATAŞ YAPI MALZEMELERİ</h1>
    <h2 className='errorA'>Beklenmedik bir hata ile karşılaştık. Lütfen girdiğiniz linki kontrol edin.</h2>
    </div>
  </div>;
}

export default React.memo(Error);
