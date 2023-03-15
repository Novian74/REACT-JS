import React, { useState } from 'react';
import useGet from '../Hook/useGet';
import { useForm } from "react-hook-form";

const Order = () => {
  let today = new Date().toISOString().slice(0, 10);
  const [awal, setAwal] = useState('2023-03-01');
  const [akhir, setAkhir] = useState(today);
  const { register, handleSubmit } = useForm();

  function cari(data) {
    setAwal(data.tawal);
    setAkhir(data.takhir);
  }
  const [isi] = useGet(`/order/${awal}/${akhir}`);

  let no = 1;

  return (
    <div>
      <div className="row">
        <div>
          <h2>Data Order</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit(cari)}>
            <div className="mb-3">
              <label htmlFor="tawal" className="form-label">Tanggal Awal :</label>
              <input type="date" className="form-control" name='tawal' {...register("tawal")} />
            </div>
            <div className="mb-3">
              <label htmlFor="takhir" className="form-label">Tanggal Akhir :</label>
              <input type="date" className="form-control" name='takhir' {...register("takhir")} />
            </div>
            <div className="mb-3">
              <input type="submit" className="btn btn-primary" name='submit' />
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div>
          <table className='table mt-4'>
            <thead>
              <tr>
                <th>No</th>
                <th>Pelanggan</th>
                <th>Tanggal Order</th>
                <th>Total</th>
                <th>Bayar</th>
                <th>Kembali</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                isi.map((val, index) => (
                  <tr key={index}>
                    <td>{no++}</td>
                    <td>{val.pelanggan}</td>
                    <td>{val.tglorder}</td>
                    <td>{val.total}</td>
                    <td>{val.bayar}</td>
                    <td>{val.kembali}</td>
                    <td>{val.status === 0 ? <button className='btn btn-danger'>Belum Bayar</button> : <p>Lunas</p>}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;