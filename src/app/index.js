import { View, Text, StyleSheet } from "react-native"; 

import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { Link } from 'expo-router'


export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Link href="contact"><Text>Contato</Text></Link>
      </View>

      <View>
        <Link href="about"><Text>Sobre</Text></Link>
      </View>

      <View>
        <Link href="about"><Text>Perfil</Text></Link>
      </View>
      <View style={styles.content}>
        <Card 
          title="Castelo Animado"
          desc="Howl's Moving Castle/ Studio Ghibli"
          img="https://images.justwatch.com/poster/265223874/s718/o-castelo-animado.jpg"
        />
        <Card
          title="A Viagem de Chihiro"
          desc="Spirited Away/ Studio Ghibli"
          img="https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg"
        />
        <Card
          title="Meu Amigo Totoro"
          desc="My Neighbor Totoro/ Studio Ghibli"
          img="https://saladerecursos.com.br/wp-content/uploads/2022/10/Meu-Amigo-Totoro-Poster-200x300.webp"  
        />
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#d4d4d4ff",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#f0ad56ff",
    padding: 15,
    gap: 15
  }
}) 