import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const BookmarkScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Bookmark Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default BookmarkScreen;