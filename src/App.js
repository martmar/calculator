import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: null,
      b: null,
      symbol: null,
      result: null
    };
  }


  onNumberClick(number) {
    if (!this.state.symbol){
      this.setState({a: this.state.a?this.state.a+''+number:number});
    } else {
      this.setState({b: this.state.b?this.state.b+''+number:number});
    }

  }

  onSymbolClick(symbol) {
    this.setState({symbol: symbol});
  }

  onResultClick() {
    //if(!this.state.a&&!this.state.b&&!this.state.symbol) {
      let res = '0';
      let a = this.state.a;
      let b = this.state.b;
      let sym = this.state.symbol;
      if (sym == '+'){
        res = parseInt(a) + parseInt(b);
      } else if (sym == '-') {
        res = parseInt(a) - parseInt(b);
      } else if (sym == '/') {
        res = parseInt(a) / parseInt(b);
      } else if (sym == 'x') {
        res = parseInt(a) * parseInt(b);
      }
      this.setState({result: res});
    //}

  }

  onClearClick() {
    this.setState({
      a: null,
      b: null,
      symbol: null,
      result: null
    });
  }

  render() {
    let value = this.state.a;

    if (this.state.b) {
      value = this.state.b;
    }

    if (this.state.result){
      value = this.state.result;
    }

    return (
      <div className="App">
        <header className="App-header">

          <div>
            <input type="text" defaultValue={value} readOnly/>
          </div>
          <div>
            <button onClick={()=>this.onNumberClick(9)}>9</button>
            <button onClick={()=>this.onNumberClick(8)}>8</button>
            <button onClick={()=>this.onNumberClick(7)}>7</button>
            <button onClick={()=>this.onSymbolClick('x')}>x</button>
          </div>
          <div>
            <button onClick={()=>this.onNumberClick(6)}>6</button>
            <button onClick={()=>this.onNumberClick(5)}>5</button>
            <button onClick={()=>this.onNumberClick(4)}>4</button>
            <button onClick={()=>this.onSymbolClick('/')}>/</button>
          </div>
          <div>
            <button onClick={()=>this.onNumberClick(3)}>3</button>
            <button onClick={()=>this.onNumberClick(2)}>2</button>
            <button onClick={()=>this.onNumberClick(1)}>1</button>
            <button onClick={()=>this.onSymbolClick('+')}>+</button>
          </div>
          <div>
            <button onClick={()=>this.onNumberClick(0)}>0</button>
            <button onClick={()=>this.onResultClick()}>=</button>
            <button onClick={()=>this.onClearClick()}>C</button>
            <button onClick={()=>this.onSymbolClick('-')}>-</button>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
