import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { Image, StyleSheet } from 'react-native';


export default class HeaderTitleExample extends Component {
  render() {
    return (
      
        <Header style={styles.header}>
          <Left/>
          <Body>
            <Title>Movie Explorer</Title>
          </Body>
          <Right />
        </Header>
      
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "blue"
    }
  });
