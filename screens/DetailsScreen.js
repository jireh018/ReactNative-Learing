import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button 
          title="Go To Details Screen again"
          onPress={() => navigation.push("Details")}
         />
         <Button 
          title="Go To Home Screen"
          onPress={() => navigation.navigate("Home")}
         />
         <Button 
          title="Go back"
          onPress={() => navigation.goBack()}
         />
         <Button 
          title="Go To the first screen"
          onPress={() => navigation.popToTop()}
         />
      </View>
    );
  }

  export default DetailsScreen;