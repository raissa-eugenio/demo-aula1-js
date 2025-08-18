import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
     <View style={styles.footer}>
            <Text>Raíssa CG3032311</Text>
          </View>
  )
}

const styles = StyleSheet.create({
  footer:{
    flex: 1,
    width: "100%",
    backgroundColor: "#f7498bff",
    alignItems: "center",
    justifyContent: "center",
  }
});

