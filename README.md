# react-countries-flags

#What is this?

A simple React component for displaying country flags in various operating systems. 

## Installation

You can install this component using npm or yarn:

`npm i react-countries-flags`

or

`yarn add react-countries-flags`

## Usage

To use this component, import it into your React component:

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

You can also customize the alt text, width, and height of the flag:

for example 

```
<ReactCountriesFlags isoCode = {'am'} alt = {'flag'} width = {50} height = {30}/>
```

#Options

If the flag for the specified ISO code is not found, the component will display a default flag instead.

<ReactCountriesFlags/> takes 4 parameters

| Prop name | Type | Default value | Description |
| --------- | ---- | ------------- | ----------- |
| `prop1`   | Type | Default value | Description |
| `prop2`   | Type | Default value | Description |
| `prop3`   | Type | Default value | Description |

#Default values

* *isoCode* - default.png
* *alt* - 'flag'
* *width* - '25'
* *height* - '15'
