import React from 'react';

const Revision = () => {
    return (
   <div className="auxTable">
        <div className="table_header">
            <h3>
                <span>Revisión</span>
                <input type="search" placeholder="Buscar..." className="form-control search-input" data-table="customers-list"/>
            </h3>
        </div>
        <div className="table_section">
            <table className=" customers-list">
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
                    <td> <a className="status status-completed">Completado</a> </td>
                </tr>
                <tr>
                    <td>Gama</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-pending">Pendiente</a> </td>
                </tr>
                <tr>
                    <td>Misael</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-canceled">Cancelado</a> </td>
                </tr>
                <tr>
                    <td>Milton</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-completed">Completado</a> </td>
                </tr>
                <tr>
                    <td>Paco</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-pending">Pendiente</a> </td>
                </tr>
                <tr>
                    <td>Liz</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-canceled">Cancelado</a> </td>
                </tr>
                <tr>
                    <td>Angel</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-completed">Completado</a> </td>
                </tr>
                <tr>
                    <td>Karim</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-pending">Pendiente</a> </td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-canceled">Cancelado</a> </td>
                </tr>
                <tr>
                    <td>Ismael</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-completed">Completado</a> </td>
                </tr>
                <tr>
                    <td>Gabriel</td>
                    <td>Ejemplo</td>
                    <td>Ejemplo</td>
                    <td> <a className="status status-pending">Pendiente</a> </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
);
};

(function (document) {
    'use strict';

    var TableFilter = (function (myArray) {
        var search_input;

        function _onInputSearch(e) {
            search_input = e.target;
            var tables = document.getElementsByClassName(search_input.getAttribute('data-table'));
            myArray.forEach.call(tables, function (table) {
                myArray.forEach.call(table.tBodies, function (tbody) {
                    myArray.forEach.call(tbody.rows, function (row) {
                        var text_content = row.textContent.toLowerCase();
                        var search_val = search_input.value.toLowerCase();
                        row.style.display = text_content.indexOf(search_val) > -1 ? '' : 'none';
                    });
                });
            });
        }

        return {
            init: function () {
                var inputs = document.getElementsByClassName('search-input');
                myArray.forEach.call(inputs, function (input) {
                    input.oninput = _onInputSearch;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            TableFilter.init();
        }
    });

})(document);

export default Revision;