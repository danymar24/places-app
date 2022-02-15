import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FunctionComponent } from "react";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlacesListScreen from "../screens/PlacesListScreen";

const Stack = createNativeStackNavigator();

interface StackNavigationProps {
  
}
 
const StackNavigation: FunctionComponent<StackNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'black'
      }}>
        <Stack.Screen name='Places List' component={PlacesListScreen} />
        <Stack.Screen name='Map' component={MapScreen} />
        <Stack.Screen name='New Place' component={NewPlaceScreen} />
        <Stack.Screen name='Place Detail' component={PlaceDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default StackNavigation;