import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export interface iMovie {
  _id: string | number,
  title: string,
  year: string | number,
  users_rating: string | number,
  img_url: string,
  genre: string,
}

type MovieProps = {
  data: iMovie;
}

const Movie = ({data}: MovieProps) => {

    return (
      
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>{data.title}</Text>
                  <Text note>{data.year}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/*<Image source={this.props.img_url} />*/}
                <Text>
                  {data.users_rating}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
    );
}



const styles = StyleSheet.create({
    Image: {
        height: 200, width: 200, flex: 1

    }
  });

  export default Movie ;
  