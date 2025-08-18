import { View, Text, StyleSheet } from 'react-native';

export default function Card1() {
  return (
      <View style={styles.card1}>
              <View style={styles.image1}></View>
              <View style={styles.texto}>
                  <Text>Titulo</Text>
                  <Text>Texto</Text>
              </View>
            </View>
  )
}

const styles = StyleSheet.create({
   card1:{
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#f7498bff",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    width: "95%",
    height: 80
  },
  texto:{
    flex: 1,
    justifyContent: "center",
    display: "column",
    alignItems: "center",
    backgroundColor: "#f7498bff"
  },

  image1:{
    width: 50,
    height: 50,
    backgroundColor: "#000000ff",
    marginRight: 16
  },
 
  
});