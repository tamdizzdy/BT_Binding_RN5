import { Text, View , SafeAreaView, Button } from 'react-native'
import React, { Component } from 'react'
import { styles } from './style/DataBidingStyle'
import { faL } from '@fortawesome/free-solid-svg-icons';

const data = [
    "Gia tri 1",
    "Gia tri 2",
    "Gia tri 3",
    "Gia tri 4",
]

export default class DataBidingScreen extends Component {
    name = "hello databiding222";
    soA = 1;
    soB = 4;
    state = {
        tinhTong: 0,
        isRenderHelloES7: false
    }

    renderArray = () => {
        return data.map((value, index) => (
            <Text>{value}</Text>
        ));
    }
    renderHello = () => {
        if(this.state.isRenderHelloES7){
            return this.renderHelloES7();
        }
        return this.renderHelloReact();
    }
    renderHelloReact = () => {
        return <Text>Hello React</Text>
    }
    renderHelloES7 = () => {
        return <Text>Hello ES7</Text>
    }

    onPressSignIn = () => {
        this.setState({isRenderHelloES7: !this.state.isRenderHelloES7})
    }
    onPressTinhTong = () => {
       let kq = this.soA + this.soB;
       this.setState({tinhTong: kq}, () => {
        console.log(`call back Tinh tong ${kq}`)
       })
    }
    render() {
        return (
            <SafeAreaView>
                <Text>{this.name}</Text>
                <Text>{this.so}</Text>
                <Button
                    title="SIGN IN"
                    color="#841584"
                    onPress={this.onPressSignIn}
                />
                <Button
                title="tinh tong"
                onPress={this.onPressTinhTong}
                />
                <Text>Tong: {this.state.tinhTong}</Text>
                {this.state.isRenderHelloES7 ? <Text>True</Text> : <Text>False</Text>}
                {this.renderArray()}
            </SafeAreaView>
        )
    }
}

