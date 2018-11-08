import React, { Component, Fragment } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card as CardNativeBase,
  CardItem,
  Thumbnail,
  Text as TextNativeBase,
  Button as ButtonNativeBase,
  Left,
  Body,
  Right,
  H3
} from "native-base";

export class TodoCard extends Component {
  todoType = type => {
    if (type.completed == true) {
      return true;
    } else {
      return false;
    }
  };

  goToStack = id => {
    this.props.navigation.navigate("Detail", { data: this.props.data });
  };

  render() {
    return (
      <Fragment>
        <TouchableOpacity onPress={this.goToStack}>
          <CardNativeBase>
            <CardItem>
              <Left>
                <Body>
                  <Text
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignContent: "center",
                      textAlign: "left",
                      fontSize: 15
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>By: </Text> User{" "}
                    {this.props.data.userId}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>Task: </Text>
                    {this.props.data.title}
                  </Text>
                </Body>
              </Left>
              <Right>
                {this.todoType(this.props.data) ? (
                  <Image
                    source={require("../icons/done.png")}
                    style={{ width: 40, height: 40 }}
                  />
                ) : (
                  <Image
                    source={require("../icons/notdone.png")}
                    style={{ width: 40, height: 40 }}
                  />
                )}
              </Right>
            </CardItem>
          </CardNativeBase>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

export default TodoCard;
