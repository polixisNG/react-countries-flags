# react-countries-flags

#What is this?

Easy way to display world country flags in various operating systems. 

#Installation

`npm i react-countries-flags`

or

`yarn add react-countries-flags`

Then...

```
import ReactCountriesFlags from "react-countries-flags";

const App = () => {
  return (
    <div className="App">
      <ReactCountriesFlags isoCode = 'am'/>
    </div>
  );
}

export default App;

```
#Options

<ReactCountriesFlags/> takes 4 parameters
* *isoCode* - its country iso code
* *alt* - its image description
