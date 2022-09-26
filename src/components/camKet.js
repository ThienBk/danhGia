import React, { useState } from 'react'

export default function CamKet() {

    const [commitment, setCommitment] = useState([
        {
            id: 1,
            name: 'Mark',
            buoiTrongTuan: 2,
        },
        {
            id: 2,
            name: 'Otmad',
            buoiTrongTuan: 10,
        },
    ])

    return (

        <div className='mt-5'>
            <h1>Bảng cam kết số buổi trong suốt quá trình thực tập ( Điểm danh )  </h1>
            <span>
                <h3>Tên lớp: </h3>
                <h3>Tuần: </h3>
            </span>
            <table class="table table-bordered text-center border-dark">
                <thead>
                    <tr>
                        <th className='pb-4' colspan="1" rowspan="2">STT</th>
                        <th className='pb-4' rowspan="2" scope="col">Họ và tên</th>
                        <th className='pb-4' rowspan="2" scope="col">Cam kết số buổi trong tuần</th>
                        <th colspan="2" scope="col">Thứ hai</th>
                        <th colspan="2" scope="col">Thứ 3</th>
                        <th colspan="2" scope="col">Thứ 4</th>
                        <th colspan="2" scope="col">Thứ 5</th>
                        <th colspan="2" scope="col">Thứ 6</th>
                    </tr>
                    <tr>
                        <th scope="col">Sáng </th>
                        <th scope="col">Chiều</th>
                        <th scope="col">Sáng </th>
                        <th scope="col">Chiều</th>
                        <th scope="col">Sáng </th>
                        <th scope="col">Chiều</th>
                        <th scope="col">Sáng </th>
                        <th scope="col">Chiều</th>
                        <th scope="col">Sáng </th>
                        <th scope="col">Chiều</th>
                    </tr>
                </thead>
                <tbody>
                    {commitment.map((commit, i) => (
                        <tr>
                            <td> {commit.id} </td>
                            <td> {commit.name} </td>
                            <td> {commit.buoiTrongTuan} </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
