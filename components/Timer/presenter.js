import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button';

export default class Timer extends React.Component {
    render(){
        const { isPlaying, elapsedTime, timeDuration} = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
             </View>
                <View style={styles.lower}>
                    { !isPlaying && <Button iconName="play-circle" onPress= { () => { alert('play 버튼 클릭됨') } } /> }
                    { isPlaying && <Button iconName="stop-circle" onPress= { () => { alert('pause 버튼 클릭됨') } } /> }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#c21807'
    },
    upper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    lower: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        color: 'white',
        fontSize: 100
    }
})