import React,{Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Progress from './components/ProgressBar/ProgressBar';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Random:0,
      color:"fff",
      percentage:0
    }
  }
  componentDidMount(){
    this.setState({Random:(Math.floor(Math.random()*100)),color:"#fff", percentage:0})
  }
  updateState(guess){
    const diff = Math.abs(guess - this.state.Random)
    console.log(diff)
    if(diff === 0 ){
      this.setState({color:"#00FF00",percentage:100})
    }
    else if(diff>0 && diff<=4){
      this.setState({color:"#FF0000", percentage:75})
    }
    else if(diff>4 && diff<=15){
      this.setState({color:"#FFFF00", percentage:50})
    }
    else{
      this.setState({color:"#00FFFF", percentage:25})
    }
  }

  render(){
    return(
      <div className="App">
      <Navbar/>
      <div className="container">
        <div className="container1">
          <Form GuessTop={guess =>this.updateState(guess)}/>
          <Progress color={this.state.color} percentage={this.state.percentage}/>
        </div>
        <p>Hot</p>
      </div>
      <div className="btnc">
        <p className="copy">&copy;DeborahMendes2020</p>
      </div>
    </div>
    )
  }
}

