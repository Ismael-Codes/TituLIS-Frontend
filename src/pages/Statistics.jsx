import React from 'react';
import { PieChart, Pie} from 'recharts';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';


class Statistics extends React.Component{


    render(){

        const data = [
            {name: 'Revision', solicitudes: 30},
            {name: 'En Progreso', solicitudes: 15},
            {name: 'Cancelada', solicitudes: 7},
        ];

        const renderCustomizedLabel = ({ x, y, name}) => {
            return (
                <text x={x} y={y} fill="white" textAnchor="start" dominantBaseline="central">
                    {name}
                </text>
            );
        };

        return (
            <div>
                <h1>Estadisticas</h1>

                <div className={"quickStatsSection"}>
                    <div className={"block"}>
                        <h4 className={"blockLabel"}>Stats</h4>
                        <text className={"blockStats"}>0</text>
                    </div>
                    <div className={"block"}>
                        <h4 className={"blockLabel"}>Stats</h4>
                        <text className={"blockStats"}>0</text>
                    </div>
                    <div className={"block"}>
                        <h4 className={"blockLabel"}>Stats</h4>
                        <text className={"blockStats"}>0</text>
                    </div>

                </div>

                <div className={"graphsSection"}>

                    <div className={"barChart"}>
                        <BarChart width={600} height={300} data={data} barSize={40}>
                            <Bar dataKey="solicitudes" fill="#841816"/>
                            <XAxis dataKey="name" />
                            <YAxis />400
                        </BarChart>
                    </div>


                    <div className={"pieChart"}>
                        <PieChart width={500} height={300}>
                            <Pie data={data} dataKey="solicitudes" label={renderCustomizedLabel} outerRadius={100} fill="#841816" />
                        </PieChart>
                    </div>

                    <div className={"barTable"}>
                        <table>
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Revisiones</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Brian</td>
                                <td>Alumnos</td>
                                <td>Revisados</td>
                            </tr>
                            <tr>
                                <td>Gama</td>
                                <td>Alumnos</td>
                                <td>Revisados</td>
                            </tr>
                            <tr>
                                <td>Misael</td>
                                <td>Alumnos</td>
                                <td>Revisados</td>
                            </tr>

                            <tr>
                                <td>Misael</td>
                                <td>Alumnos</td>
                                <td>Revisados</td>
                            </tr>

                            <tr>
                                <td>Misael</td>
                                <td>Alumnos</td>
                                <td>Revisados</td>
                            </tr>

                            <tr>
                                <td>Misael</td>
                                <td>Alumnos</td>
                                <td>Revisados</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </div>


            </div>

        );
    }

}


export default Statistics;
