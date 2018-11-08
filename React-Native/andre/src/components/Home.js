import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { Picker, Item, Icon, Spinner, Text as TextNativeBase } from 'native-base';
import { connect } from "react-redux";
import { getTodo } from "../store/action/todoAction";

import TodoCard from '../components/TodoCard'

export class Home extends Component {
  componentDidMount = () => {
    this.props.getTodo()
    console.log(this.props)
  };

  render() {
    return (
        <Fragment>
            <ScrollView>
                {
                    !this.props.isLoading ? <Spinner color= 'blue' /> : 
                    (
                        <FlatList 
                            data={this.props.todos}
                            keyExtractor={(index) => index.id}
                            keyExtractor={(index) => index.id}
                            renderItem={({ item }) => (
                              <Fragment>
                                  {
                                    <TodoCard data={item}{...this.props}/>
                                  }
                              </Fragment>
                            )}
                        />
                    )
                }
            </ScrollView>
        </Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
        doneTodos: state.todoReducer.doneTodos,
        notDoneTodos: state.todoReducer.notDoneTodos,
        isLoading: state.todoReducer.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getTodo: () => dispatch(getTodo())
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
