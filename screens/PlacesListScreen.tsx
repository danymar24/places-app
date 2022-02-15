import { useQuery } from "@apollo/client";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { FunctionComponent, useLayoutEffect } from "react";
import { ActivityIndicator, Button, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Loader from "../components/Loader";
import { GET_PLACES } from "../graphql/places/GetPlaces";

interface PlacesListScreenProps {
  navigation: NavigationProp<any>,
  route: RouteProp<any>
}
 
const PlacesListScreen: FunctionComponent<PlacesListScreenProps> = ({navigation, route}: PlacesListScreenProps) => {
  const {data, error, loading} = useQuery(GET_PLACES);
  const places = data && data.places;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item 
            title='Add Place' 
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => navigation.navigate('New Place')}/>
        </HeaderButtons>
      )
    })
  }, [navigation, route]);

  const renderPlace = ({item}: any) => {
    console.log(item.title);
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Place Detail', {id: item.id})}>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  if(error) {
    console.log('error', error)
  }

  if(loading) {
    return <Loader />
  }

  return (
    <View>
      <Text>PlacesListScreen</Text>
      <FlatList data={places} renderItem={renderPlace}/>
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
 
export default PlacesListScreen;