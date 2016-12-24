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
  }

  render(){
    return(
        <Card className="column">
          <CardTitle title={this.props.title} subtitle={this.state.numChildren + ' items'}/>
            <List>
              {this.state.itemsList.map(function (item) {
                return <ListItem className="listItem" key={'item'+item.id} primaryText={item.text} />
              })}
            </List>
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
      var newItem = {
        id: this.state.numChildren,
        text: this.state.newItem
      }
      this.state.itemsList.push(newItem);
      debugger;
      this.setState(state => ({newItem: ''}));
      this.refs.newItemTextField.getInputNode().value='';
      this.setState(state => ({numChildren: state.numChildren + 1}));
    }
  }

  textChangeHandler = function () {
    this.setState(state => ({newItem: this.refs.newItemTextField.getValue()}));
  }
}
export default Column;
