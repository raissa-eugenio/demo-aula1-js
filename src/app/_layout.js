import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
    return(
        <Tabs screenOptions={{
             tabBarActiveTintColor: "#ff7b00",
             tabBarInactiveTintColor: "#313131ff",
        }}>
        <Tabs.Screen 
            name="index" 
            options={{
                title: "Home",
                //tabBarShowLabel: false,
                tabBarLabelStyle: {fontSize: 8},
                headerShown: false,
                tabBarIcon: ({color, size}) => <Ionicons name="home" size={20} color={color} />
            }}
            />
             <Tabs.Screen 
            name="about" 
            options={{
                title: "Sobre",
                 //tabBarShowLabel: false,
                 tabBarLabelStyle: {fontSize: 8},
                tabBarIcon: ({color, size}) => <FontAwesome5 name="house-user" size={20} color={color}/>
                
            }}
            />
             <Tabs.Screen 
            name="contact" 
            options={{
                title: "Contato",
                 //tabBarShowLabel: false,
                 tabBarLabelStyle: {fontSize: 8},
                 tabBarActiveTintColor: "#ff7b00",
                tabBarIcon: ({color, size}) => <MaterialIcons name="contacts" size={20} color={color} />
            }}
                />
                 <Tabs.Screen 
            name="profile" 
            options={{
                title: "profile",
                 //tabBarShowLabel: false,
                 tabBarLabelStyle: {fontSize: 8},
                 tabBarActiveTintColor: "#ff7b00",
                tabBarIcon: ({color, size}) => <MaterialIcons name="contacts" size={20} color={color} />
            }}
                />
            
        
        </Tabs>
    )
}