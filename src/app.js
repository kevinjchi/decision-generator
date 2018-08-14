
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp options={['Devils den', 'district']}/>, appRoot);


class OldSyntax {
    constructor() {
        this.name = 'mike';
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    }

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    }
  }

  let myBork = new Bork;
  //Property initializers are not on the prototype.
  console.log(myBork); // > undefined