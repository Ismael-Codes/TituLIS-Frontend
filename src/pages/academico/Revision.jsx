import React from 'react';

const Revision = () => {
    return (
        <div className="auxTable">
            <div className="table_header">
                <h3>
                    <span>Revisión</span>
                </h3>
            </div>


            {/*Botones Filtros*/}
            <div className="contenedor">
                <div className="contenido">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Metodo</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="contenido">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Estado</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="contenido">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Fecha</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="contenido">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Filtro</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="contenido floatR">
                    <input type="search" placeholder="Buscar..." className="form-control search-input"
                           data-table="customers-list"/>
                </div>
            </div>
            {/*Fin Botones Filtros*/}


            <div className="contenedor table_section">
                <table className="customers-list">
                    <thead>
                    <tr>
                        <th>Nombre Alumno</th>
                        <th>Nombre Tesis</th>
                        <th>Descripcion</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Brian</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td><a className="status status-completed">Completado</a></td>
                    </tr>
                    <tr>
                        <td>Gama</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td><a className="status status-pending">Pendiente</a></td>
                    </tr>
                    <tr>
                        <td>Misael</td>
                        <td>Ejemplo</td>
                        <td>Ejemplo</td>
                        <td><a className="status status-canceled">Cancelado</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Revision;