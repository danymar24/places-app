import { useQuery } from "@apollo/client";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { FunctionComponent, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loader from "../components/Loader";
import { GET_PLACE } from "../graphql/places/GetPlace";

interface PlaceDetailScreenProps {
  navigation: NavigationProp<any>,
  route: RouteProp<any>
}
 
const PlaceDetailScreen: FunctionComponent<PlaceDetailScreenProps> = ({navigation, route}: PlaceDetailScreenProps) => {
  const placeId = route?.params?.id;
  const {data, loading, error} = useQuery(GET_PLACE, {
    variables: {
      placeId
    }
  })
  const place = data && data.place;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: place && place.title
    })
  }, [navigation, route, place]);

  if(loading) {
    return <Loader />
  }

  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
 
export default PlaceDetailScreen;