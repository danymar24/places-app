import { FunctionComponent } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

interface LoaderProps {
  
}
 
const Loader: FunctionComponent<LoaderProps> = () => {
  return (
    <ActivityIndicator size="large" style={styles.loader}/>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
export default Loader;