import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  Text, TouchableOpacity,StyleSheet } from "react-native";
import { useState,useEffect } from "react";
import { supabase } from "../SupaBase/SupaBase";
import { useKeyboard } from "@react-native-community/hooks";
import HomeScreen from "../Screens/AppScreens/Home/HomeScreen";
import ReminderScreen from "../Screens/AppScreens/Reminder/ReminderScreen";
import UploadScreen from "../Screens/AppScreens/Upload/UploadScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import AnimatedHeaderTitle from "../components/Animation/HeaderAni";
const Tab = createBottomTabNavigator();

const TabNav=()=>{
  const [name, setName] = useState("");
  useEffect(() => {
      const fetchUser = async () => {
        const { data } = await supabase.auth.getUser();
        const user = data.user;
        if (!user) return;
  
        const { data: profile } = await supabase
          .from("profiles")
          .select("name")
          .eq("id", user.id)
          .single();
        if(profile) {
          setName(profile.name);
        }};
      fetchUser();
    },[]);
  
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#1A4372",
            tabBarInactiveTintColor: "#669999",
            tabBarStyle: {
                backgroundColor:"#f3f9ff",
                position: "absolute",           
                borderTopWidth: 0,             
                elevation: 5, 
                height: 50,
                borderTopStartRadius:25,
                borderTopRightRadius:25,
                
        },
        
        tabBarItemStyle: {
          paddingVertical: 5,
        },
            }}>
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                headerShown:false,
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home-sharp" color={color} size={30} />
                ),
                }}
        />
            <Tab.Screen name="Reminder" component={ReminderScreen}
            options={{
                  headerTitleAlign: 'center',
                headerLeft: () => (
             <TouchableOpacity style={Styles.left}>
                    <Text style={Styles.S}>{name ? name.charAt(0).toUpperCase() : ""}</Text>
                </TouchableOpacity>
            
          ),
       headerTitle: () => (
  <AnimatedHeaderTitle
    title="Reminders"
    style={Styles.Remain}
  />
),
          
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Ionicons name="sunny" size={35} color={"gold"} />
            </TouchableOpacity>
          ),
          

                tabBarIcon: ({ color }) => (
                <Ionicons name="document-text" color={color} size={30} />
            ),
            }}
            />
            <Tab.Screen name="Upload" component={UploadScreen}
            options={{
                headerShown:false,
                tabBarIcon: ({ color }) => (
            <Ionicons name="document-attach" color={color} size={29} />
          ),
            }}
            />
        </Tab.Navigator>
    );
}
export default TabNav;

const Styles=StyleSheet.create({
  left:{
                paddingHorizontal: 10,
                backgroundColor: "#62BCCC",
                borderRadius: 30,
                borderWidth: 1,
                borderColor: "#D1D1D1",
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "center",
                },
  S:{
                     fontSize:30,
                    fontWeight:'600',
                    color:"#FFFFFF",
                    letterSpacing: 1,
                },
  Remain:{
      fontSize: 32,
      fontWeight: "700",
      color: "#1A4372",
      
    },


})

