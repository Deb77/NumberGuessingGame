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
      percentage:0,
      count:[],
      counter:200
    }
  }
  componentDidMount(){
    this.setState({Random:(Math.floor(Math.random()*100)+1),color:"#fff", percentage:0})
  }
  updateState(guess){
    const diff = Math.abs(guess - this.state.Random)
    const counter = this.state.counter;
    console.log(counter)
    console.log(diff)
    if(diff === 0 ){
      
      this.setState(prevState => ({color:"#fff", percentage:0,count:[...prevState.count,diff], Random:(Math.floor((Math.random() * (counter)) + 1))}))
      this.setState({counter:(this.state.counter+100)})
    }
    else if(diff>0 && diff<=4){
      this.setState({color:"#EF5350", percentage:75})
    }
    else if(diff>4 && diff<=15){
      this.setState({color:"#FFEB3B", percentage:50})
    }
    else{
      this.setState({color:"#03DAC5", percentage:25})
    }
  }

  render(){
    const count = this.state.count;
    return(
      <div className="App">
      <Navbar/>
      <div className="container">
        {count.map((c,k) => (<div key={k} className="container1">
            <Form GuessTop={guess =>this.updateState(guess)} counter={k}/>
            <Progress color={'#4CAF50'} percentage={100}/>
          </div>))
        }
        <div className="container1">
          <Form GuessTop={guess =>this.updateState(guess)} counter={this.state.counter}/>
          <Progress color={this.state.color} percentage={this.state.percentage}/>
        </div>
      </div>
      <div className="btnc">
        <p className="copy">&copy;DeborahMendes2020</p>
      </div>
    </div>
    )
  }
}

