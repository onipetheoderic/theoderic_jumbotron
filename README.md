# theoderic_jumbotron

> 

[![NPM](https://img.shields.io/npm/v/theoderic_jumbotron.svg)](https://www.npmjs.com/package/theoderic_jumbotron) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save theoderic_jumbotron
yarn add theoderic_jumbotron
```
## Description
A very responsive Jumbotron with a button and a customizable link

## Usage

```jsx
import React, { Component } from 'react'

import ExampleComponent from 'theoderic_jumbotron'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent HeaderText= "Default Header"
    BackgroundColor= "#cb4335"
    SubHeaderText= "Default SubHeaderText Default SubHeaderText Default SubHeaderTextDefault SubHeaderTextDefault SubHeaderTextDefault SubHeaderText"
    Height= {300}
    ButtonColor= 'orange'
    HeaderTextColor= 'white'
    SubHeaderTextColor= 'white'
    HeaderTextSize= {40}
    SubHeaderTextSize= {20}
    ButtonLink= "https=//github.com/onipetheoderic"
    buttonTextColor= 'white'
    bgColorButton= 'yellow' />
      </div>
    )
  }
}

```
## PropTypes
  static propTypes = {
    HeaderText: PropTypes.string,
    BackgroundColor: PropTypes.string,
    SubHeaderText: PropTypes.string,
    ButtonWidth: PropTypes.string,
    ButtonHeight: PropTypes.string,
    ButtonColor: PropTypes.string,
    HeaderTextColor: PropTypes.string,
    SubHeaderTextColor: PropTypes.string,
    ButtonRadius: PropTypes.number,
    HeaderTextSize: PropTypes.number,
    SubHeaderTextSize: PropTypes.number,
    buttonTextColor: PropTypes.string,
    bgColorButton: PropTypes.string
 }

 static defaultProps = {
    HeaderText: "Default Header",
    BackgroundColor: "#e5e7e9",
    SubHeaderText: "Default SubHeaderText",
    Height: 300,
    ButtonColor: 'orange',
    HeaderTextColor: 'black',
    SubHeaderTextColor: 'black',
    HeaderTextSize: 40,
    SubHeaderTextSize: 20,
    ButtonRadius: 0,
    ButtonLink: "https://github.com/onipetheoderic",
    buttonTextColor: 'white',
    bgColorButton: 'orange'
}
## License

MIT © [onipetheoderic](https://github.com/onipetheoderic)
