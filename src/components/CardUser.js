import { View, Text, StyleSheet, Pressable } from 'react-native'
import {Image} from 'expo-image'
import Feather from '@expo/vector-icons/Feather';

function CardUser({id, name, email, avatar, users, setUsers}) {

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3333/profile/${id}`, {
      method: "DELETE",
    });
    if(response.ok){
      console.log("Usuário deletado com sucesso");
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } else {  
      console.log("Erro ao deletar usuário");
  }
}
  
  return (
    <View style={styles.card}>
      <Image 
        style={styles.image}
        source={avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View>
        <Pressable onPress={handleDelete} >
        <Feather name="trash-2" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#cacacaff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: "90%", // 👈 todos ficam do mesmo tamanho
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    gap: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#c7c3c3ff",
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  email: {
    color: "#333",
  },
   image: {
    width: 50,
    height: 60,
    backgroundColor: "#000"
  }
});

export default CardUser