import React, { Component } from 'react'
import EditOrNewForm from './student-edit-form'

class Form extends Component {
 constructor(props) {
      super(props)
      this.state = {
        hasId: false,
        id: null,
        selector: null
      }
    }

    componentWillMount(){
      if(this.props.validator === 'yes'){
        this.setState({ hasId: 'has', id:this.props.match.params.id , selector: this.props.selector})
      } else {
        this.setState({ hasId: 'hasnot', id:null , selector: this.props.selector})
      }}

      render(){
        if(this.state.hasId === 'has'){
          return (
            <EditOrNewForm selector={this.state.selector} history={this.props.history} id={this.state.id} isEdit='has'/>
          )
        } else {
          return(
            <EditOrNewForm selector={this.state.selector} history={this.props.history} isEdit='hasnot'/>
          )
        }
}}

export default Form;
