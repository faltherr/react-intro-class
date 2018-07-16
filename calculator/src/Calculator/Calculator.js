// Create a basic react component called Calculator in the Calculator.js file you just created.

import React, {Component} from 'react';
// Import the calculator image from the root directory. ( hint: import varName from "picturepath.png" )
//     Call your variable calculatorImg.
import calculatorImg from '../../src/calculator.png';

// Paste the following JSX layout inside the render method of the Calculator component. ( Found below )
//     JSX Layout
class Calculator extends Component{
    constructor(){
        super();
            this.state = {
                header: 'Calculator',
                display: '0',
                operator: '',
                temp : 0,
                resetDisplay : false
                
            }
        }

    // Create a class method called updateHeader that takes val as a parameter.
    // This method should set the header property on state to the value of val. ( hint: this.setState({...}) )

    updateHeader(val){
        this.setState({header : val});
    }

    setDisplay(num){
        var display = (this.state.display === '0') ? num : this.state.display + num;
        this.setState ({display: (this.state.display.length < 13) ? display : this.state.display })
    }

    // If operator in its current state is an empty string (Falsey) then do the following
    // Use parseInt to pass a string and return an integer
    setOperator(operator){
        if (!this.state.operator){
            this.setState({operator:operator, temp: parseInt(this.state.display,10), display : '0'})
        }
    }

    //Perform a calculation based on what is specified by the user
    calculate(){
        if (!this.state.operator){
            return;
        }
        var result;
        switch(this.state.operator){
            case '+':
                result = this.state.temp + parseInt(this.state.display, 10);
                break;
            case '-':
                result = this.state.temp - parseInt(this.state.display, 10);
                break;
            case '/':
                result = this.state.temp / parseInt(this.state.display, 10);
                break;
            case '*':
                result = this.state.temp * parseInt(this.state.display, 10);
                break;
            default:
                break;
        }
        this.setState({display : String(result)});
    }

    clearDisplay(){
        this.setState({display : '0', operator : '', temp: 0, header:'Calculator' })
    }

    // Add an onChange event to the input element with an id of #header-input and make its value be an arrow function that receives a parameter e. This parameter represents the changeEvent object.

    render(){
        return (
            <div id="calculator-container">
              <input id="header-input" onChange={(e)=>{this.updateHeader(e.target.value);}}/> 
              <h1 id="header"> {this.state.header} </h1>
              <img className="remove-highlight" src={calculatorImg} alt="calculator" />
              <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                  <span className="total">{this.state.display}</span>
                </div>
          
                <div className="btn clear"  onClick = { () => {this.clearDisplay() ;} }></div>
          
                <div className="btn zero"   onClick = { () => {this.setDisplay('0');} }></div>
                <div className="btn one"    onClick = { () => {this.setDisplay('1');} }></div>
                <div className="btn two"    onClick = { () => {this.setDisplay('2');} }></div>
                <div className="btn three"  onClick = { () => {this.setDisplay('3');} }></div>
                <div className="btn four"   onClick = { () => {this.setDisplay('4');} }></div>
                <div className="btn five"   onClick = { () => {this.setDisplay('5');} }></div>
                <div className="btn six"    onClick = { () => {this.setDisplay('6');} }></div>
                <div className="btn seven"  onClick = { () => {this.setDisplay('7');} }></div>
                <div className="btn eight"  onClick = { () => {this.setDisplay('8');} }></div>
                <div className="btn nine"   onClick = { () => {this.setDisplay('9');} }></div>
          
                <div className="btn equal"    onClick = { (e) => {this.calculate() ;} }></div>

                <div className="btn multiply" onClick = { (e) => {this.setOperator('*') ;} }></div>
                <div className="btn divide"   onClick = { (e) => {this.setOperator('/') ;} }></div>
                <div className="btn subtract" onClick = { (e) => {this.setOperator('-') ;} }></div>
                <div className="btn add"      onClick = { (e) => {this.setOperator('+') ;} }></div>
              </div>
            </div>
          )
    }
}

// Export default the calculator component at the bottom of Calculator.js.

export default Calculator;