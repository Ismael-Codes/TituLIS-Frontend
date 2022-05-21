import React from 'react';

const Notifications = () => {
    return (
        <div className="auxTable">
            <div className="table_header">
                <h3>
                    <span>Notificación</span>
                    <input type="search" placeholder="Buscar..." className="form-control search-input"
                           data-table="customers-list"/>
                </h3>
            </div>
            <div className="table_section">
                <table className=" customers-list">
                    <thead>
                    <tr>
                        <th>Asunto</th>
                        <th>Remitente</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Brian</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Leído
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Gama</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Leído
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Misael</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Leído
                                    </label>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};






export default Notifications;