import logo from './logo.svg';
import './assests/app.scss'
import { useState } from 'react';
import DanhGia from './components/danhGia';
import CamKet from './components/camKet';

function App() {
  
  return (
    <div>
      {/* <DanhGia/> */}
      <CamKet/>
    </div>
  );
}

export default App;
