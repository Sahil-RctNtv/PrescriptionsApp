import { StyleSheet } from "react-native";

const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F8FAFC",
        
    },
    sun:{
        padding:7
    },
    contain:{padding:10},      
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:5
    },
    medi:{
        fontSize:35,
        fontWeight:'600',
        color:'#337AC0',
        },
    go:{
        color:"#62BCCC",
        fontWeight:'700'
        },
    tabs:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:"center",
        marginBottom:10
    },
    tab:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:3,
        paddingHorizontal:8,
        borderWidth:0,
        elevation:3,
        backgroundColor:"#FFFFFF",
        borderRadius:12,
        gap:10
    },
    tabtext:{
        fontSize:20,
        color:"#1A4372",
        fontWeight:'500'
    },
    img:{
        height:30,
        width:30
    },

    uploadPres:{
        backgroundColor:"#FFFFFF",
        padding:12,
        marginHorizontal:10,
        borderRadius:20,
        borderWidth:0,
        elevation:3,
        zIndex:10,
    },
    head:{
        fontSize:17,
        fontWeight:'700',
        color:"#14B8A6",
    },
    
    text1:{fontSize:14,fontWeight:'600',color:"#325b8a"},
    text2:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:7
    },
    
    order:{backgroundColor:"#337AC0",padding:8,borderRadius:10,elevation:3},
    
    ordertext:{fontSize:12,color:"#FFFFFF",fontWeight:'600'},

    background1:{
        backgroundColor:"#d8f2f8",
        height:150,
        width:"40%",
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        position:'absolute',
        left:0,
        bottom:200,
        zIndex: 0   
    },

background2:{
        backgroundColor:"#E3EDF7",
        height:150,
        width:"40%",
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        position:'absolute',
        right:0,
        bottom:70,
        zIndex: 0   
},
    card1: {
        height: 160,
        backgroundColor: "#FFFFFF",
        marginTop: 10,
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 15, 
        position: "relative",  
        zIndex: 20,
        elevation:3,
        padding:15,
        marginBottom:10
    },
    
    slidetext1: {
        color: "#5399e9",
        fontSize: 18,
        fontWeight: "bold",
    },
    slideText2:{fontSize:13,fontWeight:'500',color:"#060505"},
    imag:{height: "100%", width:"39%",borderRadius: 10,elevation:3},
    imag1:{height: "100%", width:"39%",borderRadius: 10},
    card2:{
         height: 160,
        backgroundColor: "#f4dff4",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: "center",
        borderRadius: 15, 
        position: "relative",  
        zIndex: 20,
        elevation:3,
        padding:15,
        
        
    },
    viw:{marginBottom:5,padding:1},
    text: {
        color: "#3d7fbd",
        fontSize: 18,
        fontWeight:"700",
        lineHeight:20
    },
    texts1: {
        color: "#14B8A6",
        fontSize: 16,
        fontWeight:"600",
        lineHeight:20
    },
    texts2: {
        color: "#3d7fbd",
        fontSize: 25,
        fontWeight:"800",
        lineHeight:38
    },
    texts3: {
        color: "#14B8A6",
        fontSize: 15,
        fontWeight:"600",
        lineHeight:15
    },
    width:{ width:"63%"},
    shop:{
        backgroundColor:'#e8833c',
        alignItems:'center',
        borderRadius:15,
        width:'60%',
        paddingVertical:5,
        elevation:3,
        marginTop:1
    },
    shoptxt:{fontSize:13,fontWeight:'500',color:"#FFFFFF"}
    })

export default Styles;