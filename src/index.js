import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
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

marginEngine = (overall_height, divider) => {
  return overall_height/divider
}

calculateMargin = (divider) => {
    return this.marginEngine(this.props.Height, divider);
}
  render() {
    let margin_top = this.calculateMargin(3);

    return (
      <div className={styles.overall} style={{backgroundColor:this.props.BackgroundColor, height: this.props.Height, width:this.props.ButtonWidth}}>
        <div className={styles.header} style={{paddingLeft:20, paddingTop:margin_top, fontSize:this.props.HeaderTextSize, color:this.props.HeaderTextColor }}>{this.props.HeaderText}</div>
        <div className={styles.subheader}  style={{ paddingLeft:20, fontSize:this.props.SubHeaderTextSize, color:this.props.SubHeaderTextColor}}>{this.props.SubHeaderText}</div>
        <div className={styles.positioner} style={{right: 32, position: 'absolute', top: margin_top}}>
        <a href={this.props.ButtonLink} className={styles.button} style={{backgroundColor: this.props.bgColorButton, color:this.props.buttonTextColor}}>Contact Us</a>
        </div>
      </div>
    )
  }
}
