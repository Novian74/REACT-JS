import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';
import Side from './Side';

const Back = () => {
    return (
        <>
            <div className="row">
                <div><Nav /></div>
            </div>
            <div className="row">
                <div className='col-4'><Side /></div>
            </div>
            <div className="row">
                <div><Footer /></div>
            </div>
        </>
    );
}

export default Back;
