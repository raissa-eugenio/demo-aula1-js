import { View, Text, Button, StyleSheet } from "react-native"
import { router } from "expo-router"

export default function Profile() {
    return(
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Button title="Home"
            onPress={() => router.replace('/')}  
            />
             <Button title="Contato" onPress={() => router.push("contact")} />
            <Button title="About" onPress={() => router.push("about")} />
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