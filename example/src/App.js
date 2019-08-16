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
