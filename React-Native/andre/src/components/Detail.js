import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight
} from "react-native";
import {
  Content,
  Container,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
  H3,
  Right
} from "native-base";
import axios from "axios";

class Detail extends Component {
  state = {
    userId: this.props.navigation.state.params.data.userId
  };

  deleteTodo = () => {
    console.log("kedelete");
    axios({
      method: "delete",
      url: "https://jsonplaceholder.typicode.com/posts/1"
    })
      .then(() => {
        alert("success delete this task");
      })
      .catch(err => {
        console.log(err);
      });
  };

  editTodo = () => {
    axios({
      method: "put",
      url: "https://jsonplaceholder.typicode.com/posts/1"
    })
      .then(() => {
        alert("success update this task");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let { data } = this.props.navigation.state.params;
    return (
      <Fragment>
        <Content>
          <Card style={{ flex: 1, paddingBottom: 28 }}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "http://pluspng.com/img-png/png-of-a-note-sticky-note-png-500.png"
                  }}
                  style={{ height: 50, resizeMode: "contain" }}
                />
                <Body>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20
                    }}
                  >
                    {data.title}
                  </Text>
                  <Text note style={{ fontWeight: "bold" }}>
                    By: User {data.userId}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Content>
                <Button full warning onPress={this.editTodo()}>
                  <Text style={{ fontWeight: "bold", color: "white" }}>
                    Edit
                  </Text>
                </Button>
                <Button full danger onPress={this.deleteTodo()}>
                  <Text style={{ fontWeight: "bold", color: "white" }}>
                    Delete
                  </Text>
                </Button>
              </Content>
            </CardItem>
          </Card>
        </Content>
      </Fragment>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Details"
    };
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnLeft: {
    marginTop: 20,
    flexDirection: "column",
    maxWidth: "60%"
  },
  columnRight: {
    flexDirection: "column",
    minWidth: "40%",
    alignItems: "center"
  }
});

export default Detail;
