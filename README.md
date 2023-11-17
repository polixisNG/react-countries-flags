# react-countries-flags

## What is this?

A simple React component for displaying country flags in various operating systems.

## Installation

You can install this component using npm or yarn:

`npm i react-countries-flags`

or

`yarn add react-countries-flags`

## Usage

To use this component, import it into your React component:

```javascript
import ReactCountriesFlags from "react-countries-flags";

const App = () => {
    return (
        <div className="App">
            <ReactCountriesFlags isoCode='am'/>
        </div>
    );
}

export default App;

```

You can also customize the alt text, width, and height of the flag:

for example

```javascript
<ReactCountriesFlags isoCode={'am'} alt={'flag'} width={50} height={30}/>
```

## Options

If the flag for the specified ISO code is not found, the component will display a default flag instead.

<ReactCountriesFlags/> takes 4 parameters

| Prop name | Type   | Default value | Description                         |
|-----------|--------|---------------|-------------------------------------|
| `isoCode` | string | none          | The ISO code for the country's flag |
| `alt`     | string | `"flag"`      | The alt text for the flag           |
| `width`   | number | `25`          | The width of the flag in pixels     |
| `height`  | number | `15`          | The height of the flag in pixels    |

This package should work on all operating systems that support React.

## ISO_3166-2

https://en.wikipedia.org/wiki/ISO_3166-2

# TypeScript Compatibility
## Usage with TypeScript
If you encounter type-related issues when using react-countries-flags with TypeScript, follow these steps to address potential problems:

1. Create TypeScript Declaration File:

Create a new TypeScript declaration file, e.g., react-countries-flags.d.ts, in the root directory of your project.

Add the following content to the declaration file:
```javascript
declare module 'react-countries-flags' {
    import React from 'react';
    const ReactCountriesFlags: React.ComponentType<{
        isoCode?: string;
        alt?: string;
        width?: number;
        height?: number;
    }>;
    export default ReactCountriesFlags;
}
```
2. Include Declaration File in TypeScript Configuration:

Update your tsconfig.json file to include the declaration file by adding it to the "include" section:
```javascript
{
  "compilerOptions": {
    // your compiler options...
  },
  "include": [
    "react-countries-flags.d.ts" // or the name of your TypeScript declaration file
  ]
}
```