import React, { Component } from "react";
// import Calculator from './Calculator';
import "./css/style.css";

class Application extends Component{

    render() {
        return (
            <div class="calc">
                <div class="row">
                    <button class="action">C</button>
                    <input class="calcInput" type="number" disabled></input>
                </div>
                <div class="row">
                    <button class="number">9</button>
                    <button class="number">8</button>
                    <button class="number">7</button>
                    <button class="action">X</button>
                </div>
                <div class="row">
                    <button class="number">6</button>
                    <button class="number">5</button>
                    <button class="number">4</button>
                    <button class="action">+</button>
                </div>
                <div class="row">
                    <button class="number">3</button>
                    <button class="number">2</button>
                    <button class="number">1</button>
                    <button class="action">-</button>
                </div>
                <div class="row">
                    <button class="number">0</button>
                    <button class="number">.</button>
                    <button class="action">=</button>
                    <button class="action">/</button>
                </div>
            </div>
        )
    }
}

export default Application;