import React, { useState } from 'react';
import useGet from '../Hook/useGet';
import { useForm } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement('#root');
const Order = () => {
  let today = new Date().toISOString().slice(0, 10);
  const [mopen, setMopen] = useState(false);
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
      <Modal isOpen={mopen} onRequestClose={() => setMopen(false)} style={{
        overlay: { background: 'transparent !important' }, content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '40%'
        }
      }}>
        <div className="row">
          <h2>Pembayaran</h2>
        </div>
        <div className="row">
          <div className='col'>
            <form>
              <div className="mb-3">
                <label htmlFor="total" className="form-label">Total :</label>
                <input type="number" className="form-control" name='total' placeholder="total" {...register("total", { required: true })} />
              </div>
              <div className="mb-3">
                <label htmlFor="bayar" className="form-label">Bayar :</label>
                <input type="number" className="form-control" name='bayar' placeholder="bayar" {...register("bayar", { required: true })} />
              </div>
              <div className="mb-3">
                <input type="submit" className="btn btn-danger mr-2" name='batal' value={"Batal"} onClick={() => setMopen(false)}/>
                <input type="submit" className="btn btn-primary ms-2" name='simpan' value={"Bayar"}/>
              </div>
            </form>
          </div>
        </div>
      </Modal>
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
                    <td>{val.status === 0 ? <button className='btn btn-danger' onClick={() => setMopen(true)}>Belum Bayar</button> : <p>Lunas</p>}</td>
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
