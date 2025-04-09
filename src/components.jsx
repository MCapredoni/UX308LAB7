import {hello, SQFeet2Acres, LawnSize, AirQualityIndex} from './functions.js';

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

function Question3(){
    return <section>
3. Write a function that converts lawn size to time needed to cut lawn.
<h2>results</h2>
<p>LawnSize(25, 30, 30) == "{LawnSize(25, 30, 30)}"</p>
<p>LawnSize(50, 50, 40) == "{LawnSize(50, 50, 40)}"</p>
<p>LawnSize(35, 45, 30) == "{LawnSize(35, 45, 30)}"</p>
    </section>
}

function Question4(){
    return <section>
4. Write a function that converts air quality to an index air type.
<h2>results</h2>
<p>AirQualityIndex(22) == "{AirQualityIndex(22)}"</p>
<p>AirQualityIndex(58) == "{AirQualityIndex(58)}"</p>
<p>AirQualityIndex(111) == "{AirQualityIndex(111)}"</p>
<p>AirQualityIndex(158) == "{AirQualityIndex(158)}"</p>
<p>AirQualityIndex(271) == "{AirQualityIndex(271)}"</p>
<p>AirQualityIndex(500) == "{AirQualityIndex(500)}"</p>
    </section>
}

export {Question1, Question2, Question3, Question4}