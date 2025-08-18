import { View, Text, StyleSheet} from "react-native"
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Card1 from "./src/components/Card1";
import Card2 from "./src/components/Card2";

export default function App (){
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Card1 />
        <Card2 />
        <View style={styles.saiba_mais}>
          <Text>Saiba mais</Text>
        </View>
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 2,
    backgroundColor: "#f88db6ff",
    justifyContent: "center",
    alignItems: "center"
  },
  header:{
    flex: 1,
    width: "100%",
    backgroundColor: "#f7498bff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  content:{
    flex: 7,
    width: "100%",
    backgroundColor: "#da7ea1ff",
    alignItems: "center" 
  },
  menu:{
    width:40,
    height:40,
    backgroundColor: "#000000ff"
  },
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
  card2:{
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#f7498bff",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    width: "95%",
    height: 80
  },
  image1:{
    width: 50,
    height: 50,
    backgroundColor: "#000000ff",
    marginRight: 16
  },
  image2:{
    width: 50,
    height: 50,
    backgroundColor: "#000000ff",
    marginRight: 16
  },
  saiba_mais:{
    width: "50%",
    height: 50,
    backgroundColor: "#f7498bff",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 8
  },
  footer:{
    flex: 1,
    width: "100%",
    backgroundColor: "#f7498bff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
