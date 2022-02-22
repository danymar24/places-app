import { FunctionComponent, useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import * as ImagePicker from 'expo-image-picker';

interface ImgPickerProps {
  onImageTaken: any
}
 
const ImgPicker: FunctionComponent<ImgPickerProps> = ({onImageTaken}: ImgPickerProps) => {
  const [image, setImage] = useState<any>(null);

  const verifyPermissions = async () => {
    const result = await ImagePicker.getCameraPermissionsAsync();
    console.log(result);
    if(result.status !== 'granted') {
      const requestingPermissions = await ImagePicker.requestCameraPermissionsAsync();
      if(requestingPermissions.status !== 'granted') {
        Alert.alert(
          'Insufficient Permissions!', 
          'You need to grant camera permissions to use this app.',
          [{text: 'Okay'}]
        );
        return false;
      }
    }
    return true;
  }

  const takeImageHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if(!hasPermissions) {
      return;
    }
    const takenImage = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setImage(takenImage);
    onImageTaken(takenImage);
  };

  return (
    <View style={styles.imagePicker}>
      {!image && <View style={styles.imagePreview}><Text>No image picked yet.</Text></View>}
      {!!image && <Image style={styles.image} source={{uri: image.uri}}/>}
      <Button 
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginBottom: 10
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 300
  }
});
 
export default ImgPicker;