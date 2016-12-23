/**
 * Created by César Gutiérrez Yáñez on 12/22/16.
 */

import React, { Component } from 'react';
import './Column.css';
import {Card, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ActionDelete from 'material-ui/svg-icons/action/delete';

class Column extends Component{
  constructor(props){
    super(props);
    this.state = {
      numChildren: 0,
      itemsList:[],
      newItem: ''
    };
    this.addItemHandler = this.addItemHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
  }

  render(){
    return(
        <Card className="column">
          <CardTitle title={this.props.title} subtitle={this.state.numChildren + ' items'}/>
            <List>{this.state.itemsList}</List>
            <TextField
              ref="newItemTextField"
              hintText={"New " + this.props.title + " item"}
              floatingLabelText={"Add a new " + this.props.title + " Item"}
              onChange={this.textChangeHandler}
            />
            <FlatButton label="Add..." primary={true} onClick={this.addItemHandler}/>
        </Card>
    );
  }

  addItemHandler = function () {
    if(this.state.newItem !== ''){
      this.state.itemsList.push(<ListItem className="listItem" rightIcon={<ActionDelete key={'item_'+this.state.numChildren} onClick={this.deleteItemHandler} />} key={'item'+this.state.numChildren} primaryText={this.state.newItem} />);
      this.setState(state => ({newItem: ''}));
      this.refs.newItemTextField.getInputNode().value='';
      this.setState(state => ({numChildren: state.numChildren + 1}));
    }
  }

  textChangeHandler = function () {
    this.setState(state => ({newItem: this.refs.newItemTextField.getValue()}));
  }

  deleteItemHandler = function (e) {

  }
}
export default Column;
