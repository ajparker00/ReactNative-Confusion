import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

// {/* <Header leftComponent={{ text: 'Contact Us', style: { color: '#fff' } }} /> */}


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    };

    render() {
        return (

            <ScrollView>
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                    <Card
                        title='Contact Information'>
                        <Text>121, Clear Water Bay Road</Text>
                        <Text>Clear Water Bay, Kowloon</Text>
                        <Text>HONG KONG</Text>
                        <Text>Tel: +852 1234 5678</Text>
                        <Text>Tel: +852 1234 5678</Text>
                        <Text>Email:confusion@food.net</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>

        );

    }
}

export default Contact;