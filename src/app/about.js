import { View, Text, Button, StyleSheet } from "react-native"
import { router } from "expo-router"

export default function About() {
    return(
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button title="Home"
            onPress={() => router.replace('/')}  
            />
             <Button title="Contato" onPress={() => router.push("contact")} />
                 <Button title="Profile" onPress={() => router.push("profile")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
  
})