import React from 'react';



class Statistics extends React.Component{

    renderLines() {
        return Array(10).fill(null).map((el,i)=>(
            <BarGraphLine
                Left={i*10}
                key={i}
            />
        ))
    }

    render(){
        return (
            <div>
                <h1>Estadisticas</h1>

                <div className={"barGraph"}>
                    <h3>Estatus</h3>
                    <div className={"graph"}>
                        <BarTextContent />
                        <div className={"bar-lines-container"}>
                            <RBar percent={50}/>
                            <PBar percent={30}/>
                            <CBar percent={20}/>
                            {this.renderLines()}
                        </div>
                    </div>
                </div>

            </div>

        );
    }

}

const BarGraphLine = ({Left}) => {
    return(
        <div className="BarGraphLine"
           style={{left: `${Left}%`}}
        />
    )

}

const BarTextContent = () => {
    return(
        <div className={"bar-text-content"}>
            <text className={"chartlabel"}>Revision</text>
            <div className={"labeldiv"}/>
            <text className={"chartlabel"}>En Progreso</text>
            <div className={"labeldiv"}/>
            <text className={"chartlabel"}>Cancelada</text>
        </div>
    )

}

const RBar = ({percent}) => {
  return(
      <div className={"rbar"} style={{width: `${percent}%`}}></div>
  )
}

const PBar = ({percent}) => {
    return(
        <div className={"pbar"} style={{width: `${percent}%`}}></div>
    )
}

const CBar = ({percent}) => {
    return(
        <div className={"cbar"} style={{width: `${percent}%`}}></div>
    )
}

export default Statistics;