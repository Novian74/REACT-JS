import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";

const Side = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-header">
                            Menu Aplikasi
                        </div>
                        <ul className="list-group list-group-flush">
                            <Link to="kategori">
                                <li className="list-group-item">Kategori</li>
                            </Link>
                            <Link to="menu">
                                <li className="list-group-item">Menu</li>
                            </Link>
                            <Link to="pelanggan">
                                <li className="list-group-item">Pelanggan</li>
                            </Link>
                            <Link to="order">
                                <li className="list-group-item">Order</li>
                            </Link>
                            <Link to="detail">
                                <li className="list-group-item">Order Detail</li>
                            </Link>
                            <Link to="admin-page">
                                <li className="list-group-item">Admin</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='col-1'>
                    <Outlet />
                </div>
            </div>
        </div>

    );
}

export default Side;
