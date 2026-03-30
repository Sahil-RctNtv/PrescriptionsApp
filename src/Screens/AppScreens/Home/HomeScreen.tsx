import { View, Text,TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


import Styles from "./HomeStyle";
import SlideInView from "../../../components/Animation/SlideView";
import TwinkleText from "../../../components/Animation/TextTwinkle";
import AnimatedText from "../../../components/Animation/AnimatedText";
import AnimatedHeading from "../../../components/Animation/HeadingAni";
const HomeScreen=()=>{
    const navigation=useNavigation<any>();

    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.container1}>
                
            <TouchableOpacity >
                <Ionicons name="menu" size={40} color={"black"}/>
            </TouchableOpacity>

            <AnimatedHeading Styles={Styles} />
            <TouchableOpacity style={Styles.sun} onPress={() => dispatch(toggleTheme())}>
                <Ionicons name="sunny"
                size={35} 
                color={"yellow"}/>
            </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
                <View style={Styles.tabs}>
                <TouchableOpacity style={Styles.tab}>
                    <Text style={Styles.tabtext}>Questions</Text>
                <Image source={require("../../../assets/question.png")} style={Styles.img} 
                resizeMode="contain"
                />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.tab} onPress={()=>navigation.navigate('Reminder')}>
                    <Text style={Styles.tabtext}>Reminder</Text>
                <Image source={require("../../../assets/reminder.png")} style={Styles.img} 
                resizeMode="contain"
                />
                </TouchableOpacity>
                </View>
                <View style={Styles.tabs}>
                <TouchableOpacity style={Styles.tab}>
                    <Text style={Styles.tabtext}>Messages</Text>
                <Image source={require("../../../assets/message.png")} style={Styles.img} 
                resizeMode="contain"
                />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.tab}>
                    <Text style={Styles.tabtext}>Calander </Text>
                <Image source={require("../../../assets/calendar.png")} style={Styles.img} 
                resizeMode="contain"
                />
                </TouchableOpacity>
                </View>
            </View>
            
            <View style={Styles.uploadPres}>
                <Text style={Styles.head}>UPLOAD PRESCRIPTION</Text>
               
                <Text style={Styles.text1}>Upload a Prescription and tell us what you need. We will do the rest.!</Text>
                <View style={Styles.text2}>
                <TwinkleText text="Flat 25% Off on Medicine🔥" />
                <TouchableOpacity style={Styles.order}>
                    <Text style={Styles.ordertext}>ORDER NOW</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.background1}/>
            <View style={Styles.background2}/>

            <View>
           <SlideInView from="left" delay={200}>
                <View style={Styles.card1}>
                    <View style={Styles.width}>
                    <Text style={Styles.slidetext1}>Get the Best Medicine</Text>
                    <Text style={Styles.slidetext2}>
                        Get the best medicine with ease and confidence  
                        with our trusted pharmacies 
                        for you and your family's well-being.</Text>
                    </View>
                    <Image source={require("../../../assets/doctor2.jpeg")}
                        style={Styles.imag}/>
                </View>
            </SlideInView>

            <SlideInView from="right" delay={600}>
              <View style={Styles.card2}>
                <View>
                    <View style={Styles.viw}>
                    <Text style={Styles.texts1}>Upto</Text>
                     <AnimatedText text="80% OFF" />
                    <Text style={Styles.text}>Offer</Text>
                    <Text style={Styles.texts3}>On Health Products</Text>
                    </View>
                    <TouchableOpacity style={Styles.shop}>

                        <Text style={Styles.shoptxt}>
                            Shop now
                        </Text>
                    </TouchableOpacity>
                </View>
                <Image source={require("../../../assets/tabletss.png")}
                 style={Styles.imag1}
                    resizeMode="contain"/>
                
            </View>
        </SlideInView>
    </View>
            
 </SafeAreaView>
)}
export default HomeScreen;


    