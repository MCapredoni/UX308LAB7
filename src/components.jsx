import {hello, SQFeet2Acres} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts square feet to acres.
<h2>results</h2>
<p>SQFeet2Acres(1000000) == "{SQFeet2Acres(1000000)}"</p>
<p>SQFeet2Acres(1250000) == "{SQFeet2Acres(1250000)}"</p>
<p>SQFeet2Acres(35000000) == "{SQFeet2Acres(35000000)}"</p>
    </section>
}

export {Question1, Question2}