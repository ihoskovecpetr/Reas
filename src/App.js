import React, { Component } from 'react';
import './App.css';
import Okresy from './Okresy.js'
import {Data} from './data'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      kraj: null,
      indexKraj: undefined,
      okres: null,
      indexOkres: undefined,
    };
  }

  setKraj = (item, index) => {

      document.getElementById('error-kraj-id').classList.add("hide")

      if (this.state.indexKraj != undefined) {
          document.getElementById(this.state.indexKraj).classList.remove("active")
        }

      document.getElementById(index).classList.add("active")

      this.setState({ kraj: Data[item],
                      indexKraj: index,
                      okres: null,
                      indexOkres: undefined
                      })
    }

    setOkres = (okres, indexOkres) => {
      document.getElementById('error-okres-id').classList.add("hide")
      this.setState({okres: okres, indexOkres: indexOkres})
    }

    submitPokracujte = () => {
      if(!this.state.kraj){
        document.getElementById('error-kraj-id').classList.remove("hide")
      }
      else if(!this.state.okres){
        document.getElementById('error-okres-id').classList.remove("hide")
      }
      else{
        alert("SUCCESS! Form submitted")
      }
    }

  render(){

    console.log("reRENDER")
    const keys = Object.keys(Data)
    
      return (
        <div className="App">
          <div className="main-wrap">
            <h3 className="fst-header">
              Přemýšlíte o prodeji nemovitosti? <br />
              Zadejte, kde se nachází
            </h3>
            <p className="sec-header" >
              Klikněte na kraj a vyberte okres, ve kterém se vaše nemovitost nachází.
            </p>
              { keys.map((item, itemIndex) => {
                  return (
                    <div key={item} onClick={this.setKraj.bind(this, item, itemIndex)} className="container" id={`${itemIndex}`}>
                      
                      <span class="checkmark"></span>
                      <span className="cnt-txt">{item}</span>
                    </div>
                  )
                 }
                )
              }
            {this.state.kraj ? <Okresy {...this.state} setOkres={this.setOkres} /> : null} 
            <p className="error hide" id='error-kraj-id'> Vyberte prosím kraj</p>
            <p className="error hide" id='error-okres-id'> Vyberte prosím okres nebo městskou část</p>
            <div className="btn-pokracuj-wrap">
              <div className="btn-pokracuj" onClick={this.submitPokracujte} >
                Pokračovat
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default App;
