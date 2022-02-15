import { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { HeaderButton } from "react-navigation-header-buttons";

const CustomHeaderButton: FunctionComponent<any> = (props) => {
  return (
    <HeaderButton
      {...props} 
      IconComponent={Ionicons} 
      iconSize={23} 
      color={Platform.OS === 'android' ? 'white' : Colors.primary} />
  );
};

export default CustomHeaderButton;
