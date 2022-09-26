import logo from './logo.svg';
import './assests/app.scss'
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'Mark',
      loTrinh: 'Chậm',
      camNhan: 'Tốt',
      danhGia: 'Tự tin',
      dongGop: 'Lộ trình nâng cao',
      nhanXetNHD: 'Nhiệt Tình',
    },
    {
      id: 2,
      name: 'Mark',
      loTrinh: 'Chậm',
      camNhan: 'Tốt',
      danhGia: 'Tự tin',
      dongGop: 'Lộ trình nâng cao',
      nhanXetNHD: 'Nhiệt Tình',
    },
    {
      id: 3,
      name: 'Mark',
      loTrinh: 'Chậm',
      camNhan: 'Tốt',
      danhGia: 'Tự tin',
      dongGop: 'Lộ trình nâng cao',
      nhanXetNHD: 'Nhiệt Tình',
    },
  ])
  return (
    <div className='mt-5'>
      <h2 className='text-center'>BẢNG ĐÁNH GIÁ TRAINING TUẦN</h2>
      <div>
        <h5>Tuần: </h5>
        <h5>Tên lớp: </h5>
        <h5>Người phụ trách: </h5>
      </div>
      <table className="table table-bordered border-dark text-center">
        <thead>
          <tr>
            <th className='pb-5' scope="col">STT</th>
            <th className='pb-4' scope="col">Họ và tên</th>
            <th scope="col">Lộ trình training:
              <br />
              (Nhanh ; Chậm; Vừa sức)</th>
            <th className='pb-4' scope="col"> Nêu Cảm nhận của bản thân sau một tuần training:
              Tốt ; Không tốt</th>
            <th className='pb-3' scope="col">Đánh giá mức độ tự tin, năng lực của mình sau một tuần:
              <br />
              (Tự tin ; Không tự tin)</th>
            <th scope="col">Đóng góng góp ý kiến cho lộ trình tuần sau tới.
              <br />
              (Theo lộ trình cũ; Lộ trình nâng cao)</th>
            <th className='pb-4' scope="col">Đóng góp ý kiến về người đang hướng dẫn mình.
              <br />
              (Nhiệt tình ; Không nhiệt tình)</th>
          </tr>
        </thead>
        <tbody>
          {list.map((li, i) => {
            return (
              <tr>
                <th> {li.id} </th>
                <td> {li.name} </td>
                <td> {li.loTrinh} </td>
                <td> {li.camNhan} </td>
                <td> {li.danhGia} </td>
                <td> {li.dongGop} </td>
                <td> {li.nhanXetNHD} </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  );
}

export default App;
