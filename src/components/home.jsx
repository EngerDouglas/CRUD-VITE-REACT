import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log("Error fetching data:", err));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm("¿Quieres eliminar este usuario?");
        if (confirm) {
            axios.delete(`http://localhost:3000/users/${id}`)
                .then(() => {
                    // Actualiza el estado en lugar de recargar la página
                    setData(data.filter(d => d.id !== id));
                })
                .catch(err => console.log("Error deleting user:", err));
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-white" style={{ minHeight: '100vh', width: '100vw', padding: '20px' }}>
            <h1>Lista de usuarios</h1>
            <div className="w-100 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end">
                    <Link to='/create' className="btn btn-success">Add +</Link>
                </div>
                <table className="table table-dark table-striped mb-0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d) => (
                                <tr key={d.id}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>
                                        <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">
                                            Read
                                        </Link>
                                        <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(d.id)} className="btn btn-sm btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
