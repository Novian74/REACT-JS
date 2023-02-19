import useGet from '../Hook/useGet';
import useDelete from '../Hook/useDelete';

const Menu = () => {
    const [isi] = useGet('/menu');
    const { hapus, pesan } = useDelete('/menu/');
    let no = 1;

    return (
        <div>
            <div className="row">
                <h2>Data Menu</h2>
            </div>
            <div className="row">
                <div>
                    <p>{pesan}</p>
                </div>
            </div>
            <div className="row">
                <table className='table mt-2'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Kategori</th>
                            <th>Menu</th>
                            <th>Gambar</th>
                            <th>Harga</th>
                            <th>Hapus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isi.map((val, index) => (
                            <tr key={index}>
                                <td>{no++}</td>
                                <td>{val.kategori}</td>
                                <td>{val.menu}</td>
                                <td><img src={val.gambar} height="100" width="150" alt="" /></td>
                                <td>{val.harga}</td>
                                <td><button className="btn btn-danger" onClick={() => hapus(val.idmenu)}>Hapus</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Menu;
