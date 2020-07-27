import React,{Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Random:(Math.floor(Math.random()*100)),
      occurence:[0]
    }
  }
  updateState(guess){
    const diff = Math.abs(guess - this.state.Random)
    console.log(diff)
    if(diff === 0 ){
      alert("Correct")
      this.setState({occurence:this.state.occurence.push})
    }
  }

  render(){
    let count = this.state.occurence
    return(
      <div className="App">
      <Navbar/>
      <div className="container">
      { count.map((c,k) => (
        <Form key={k} GuessTop={guess =>this.updateState(guess)}/>
      ))
      }
      </div>
      <div className="btnc">
        <button className="quit">QUIT</button>
        <p className="copy">&copy;DeborahMendes2020</p>
      </div>
    </div>
    )
  }
}

