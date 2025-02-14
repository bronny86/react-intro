// var Tooltip = require("rc-tooltip"); //CommonJS
// import Tooltip from "rc-tooltip"; // Modern JavaScript import export syntax

import { Copyblock } from "react-code-blocks";

let favouriteFruits = [

    "papaya",

    "cherries",

    "oranges",

    "mangoes",

    "peaches"

];

let exampleJavaScriptCode = `

console.log("Hello world!");

let someNumber = 1;

console.log("Some number is: " + 1);

`;

export function FruitList(){

    return(

        <div className="fruitList">

            
                <h1>Favourite Fruits:</h1>

            <ul>

                {favouriteFruits.map((fruit) => {

                    return <li key={fruit}>{fruit}</li>

                })}

            </ul>


        </div>

    );

}

