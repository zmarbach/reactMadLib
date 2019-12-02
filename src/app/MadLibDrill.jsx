import React from 'react';
import {MadLibSolution} from './MadLibSolution';

export class MadLibDrill extends React.Component{

    state= {
        city : '',
        noun : '',
        ingVerb : '',
        verb2 : '',
        color : '',
        number: 0,
        btnClicked : false
    }

    render(){
        return <>
            <div className="container">
                <h1>Mad Libs!</h1>
                <br/>
                <form>

                    <label for="city">Type a city</label>
                    <input type="text" name="city" id="city" className = "form" placeholder = "city..." value = {this.state.city} onChange={e => this.setState({city: e.target.value})}></input>
                    <br/>

                    <label for="noun">Type a noun</label>
                    <input type="text" name="noun" id="noun" placeholder = "noun..." value={this.state.noun} onChange = {e => this.setState({noun: e.target.value})}></input>
                    <br/>

                    <label for="ingVerb">Type a movement verb that ends in -ing </label>
                    <input type="text" size = "35" name="ingVerb" id="ingVerb" placeholder = "Ex: swimming, running, hopping, etc." value= {this.state.ingVerb} onChange = {e => this.setState({ingVerb: e.target.value})}></input>
                    <br/>

                    <label for="verb2">Type a past tense verb</label>
                    <input type="text" name="verb2" id="verb2" placeholder = "past tense verb..." value = {this.state.verb2} onChange = {e => this.setState({verb2: e.target.value})}></input>
                    <br/>

                    <label for="color">Type a color</label>
                    <input type="text" name="color" id="color" placeholder = "color..." value={this.state.color} onChange = {e => this.setState({color: e.target.value})}></input>
                    <br/>
                    <br/>

                    <p>Pick a number</p>
                    <label for="radio1">2</label>
                    <input type="radio" name="radio1" id="radio1" value="2" onChange = {e => this.setState({number: e.target.value})}></input>
                    <br/>

                    <label for="radio1">3</label>
                    <input type="radio" name="radio1" id="radio2" value="3" onChange = {e => this.setState({number: e.target.value})}></input>
                    <br/>

                    <label for="radio1">99</label>
                    <input type="radio" name="radio1" id="radio3" value="99" onChange = {e => this.setState({number: e.target.value})}></input>
                    <br/>
                    <br/>

                    <button type="button" class = "btn btn-danger border-dark" onClick = {e => this.setState({btnClicked: true})}>Create Mad Lib</button>
                    <br/>
                    <br/>
                    
                    <button type="button" class = "btn btn-danger border-dark" onClick = {e => this.clearState()}>Reset</button>

                </form>
                <br/>
                
                <div style = {{ "display": this.state.btnClicked ? "block" : "none"} }>
                    <h3>Solution:</h3>
                    <MadLibSolution words = {this.state}/>
                </div>
            
            </div>
        </>
    }

    clearState(){
        this.setState({city: ''});
        this.setState({noun: ''});
        this.setState({ingVerb: ''});
        this.setState({verb2: ''});
        this.setState({color: ''});
        this.setState({number: 0});
        this.setState({btnClicked: false});
    }
}