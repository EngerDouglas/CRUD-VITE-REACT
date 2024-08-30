import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-light' style={{ minHeight: '100vh', width: '100vw', padding: '20px' }}>
            <div className='border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3 className="text-center">Detail of User</h3>
                <div className='mb-2'>
                    <strong>Name: {data.name}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Email: {data.email}</strong>
                </div>
                <div className='mb-3'>
                    <strong>Phone: {data.phone}</strong>
                </div>
                <div className='text-center'>
                    <Link to={`/update/${id}`} className='btn btn-success me-2'>Edit</Link>
                    <Link to="/" className='btn btn-primary'>Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Read;
