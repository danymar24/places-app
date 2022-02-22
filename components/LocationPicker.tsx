import { FunctionComponent, useState } from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import * as Location from 'expo-location';
interface LocationPickerProps {
  
}
 
const LocationPicker: FunctionComponent<LocationPickerProps> = () => {
  const [pickedLocation, setPickedLocation] = useState<any>(null);
  const [isFetching, setIsFetching] = useState(false);
  
  const verifyPermissions = async () => {
    const result = await Location.getForegroundPermissionsAsync();
    if(result.status !== 'granted') {
      const askingPermissions = await Location.requestForegroundPermissionsAsync();
      if(askingPermissions.status !== 'granted') {
        Alert.alert(
          'Insufficient Permissions!', 
          'You need to grant location permissions to use this app.',
          [{text: 'Okay'}]
        );
        return false;
      }
    }
    return true;
  }

  const getLocationHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if(!hasPermissions) {
      return;
    }
    try{
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({});
      setPickedLocation(location);
    } catch (err) {
      Alert.alert('Could not fetch location!', 'Please try again later or pick a location on the map.',
      [{text: 'Okay'}]);
    }
    setIsFetching(false);
  }

  return (
    <View>
      <View>
        {isFetching ? 
          <ActivityIndicator size="small" /> :
          <Text>No location chosen yet!</Text>}
      </View>
      <View>
        {/* <Text>{pickedLocation}</Text> */}
      </View>
      <Button
        title="Get location"
        color={Colors.primary}
        onPress={getLocationHandler}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1
  }
});

export default LocationPicker;