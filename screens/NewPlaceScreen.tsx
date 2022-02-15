import { useMutation } from "@apollo/client";
import { FunctionComponent, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";
import { ADD_PLACE } from "../graphql/places/AddPlace";

interface NewPlaceScreenProps {
  
}
 
const NewPlaceScreen: FunctionComponent<NewPlaceScreenProps> = () => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [addPlace, {data: addPlaceResponse, loading: addPlaceLoading, error: addPlaceError}] = useMutation(ADD_PLACE, {
    variables: {
      title: titleValue
    }
  });

  const savePlaceHandler = () => {
    addPlace();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={(text: string) => setTitleValue(text)}
          value={titleValue}/>
        <Button title="Save place" color={Colors.primary} onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4, 
    paddingHorizontal: 2
  }
});
 
export default NewPlaceScreen;