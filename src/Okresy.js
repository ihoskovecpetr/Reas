import React from 'react';

class Okresy extends React.Component{

componentDidMount(){
    document.getElementById('okres-wrap-id').classList.add("no-border")
}

setOkres = (item, itemIndex) => {
    if (this.props.indexOkres != undefined) {
        document.getElementById(this.props.indexOkres).classList.remove("active")
      } 
        document.getElementById(itemIndex + 100).classList.add("active")
        this.props.setOkres(item, itemIndex + 100)
    }

render(){
        console.log("Okresy component PROPS: ", this.props)
        return <div className="okresy-wrap" id="okres-wrap-id"> 
                <h3>Vyberte Okres</h3>
                    {this.props.kraj.map((item, itemIndex) => (
                        <div key={item} onClick={this.setOkres.bind(this, item, itemIndex)} className="container" id={`${itemIndex + 100}`}>
                            <span class="checkmark"></span>
                            <span className="cnt-txt">{item}</span>
                        </div>
                        )
                    )}
                </div>
    }
}

export default Okresy;
