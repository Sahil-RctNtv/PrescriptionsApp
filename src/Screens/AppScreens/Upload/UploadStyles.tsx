import { StyleSheet } from "react-native";

const Styles=StyleSheet.create({
    container:{flex:1,backgroundColor:"#F8FAFC"},

    container1:{
        width:"100%",
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',  
        },
    locicon:{ width: 25, height: 35 },
    iconbg:{height:80,width:55},
    sunny:{marginRight:10},
    loc:{color:"#14B8A6"},
    
    headname:{
        fontSize:25,
        fontWeight:"600",
        color:"#1A4372",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'67%',
    },
    
    city:{ 
        flex: 1, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center" },

    containerlist:{
        marginHorizontal:5,
    },
    location:{
        marginHorizontal:10,
        borderWidth:0,
        elevation:3,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        padding:10, 
        backgroundColor:"#FFFFFF",
        paddingBottom:35
        },
    map:{
        height:140,
        width:"98%",
        backgroundColor:'hsl(195, 100%, 98%)',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderWidth:0,
        elevation:2,
        marginBottom:3
        },

    text1:{fontSize:20,color:'#367296',fontWeight:'700'},
    text2:{fontSize:12,color:"#1A4372",fontWeight:'500'},
    text3:{
        fontSize:15,
        fontWeight:'600',
        borderRadius:25,
        backgroundColor:'#367296',
        color:"#FFFFFF",
        paddingVertical:10,
        paddingHorizontal:15,
        position:'absolute',
        bottom:-55
    },

    uploads:{
        marginTop:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:0,
        elevation:3,
        width:'90%',
        padding:10,
        height:150,
        borderRadius:20,
        paddingHorizontal:40,
        backgroundColor:"#FFFFFF"
        },
    
    uploadText:{fontSize:15,fontWeight:'500',color:"#1A4372"},
    uploadimg:{ width: 70, height: 70 },
    continue:{
        marginTop:30,
        backgroundColor:"#14B8A6",
        padding:7,
        width:'50%',
        alignItems:'center',
        borderRadius:15,
        borderWidth:0,
        elevation:3
        },
    context:{fontSize:22,fontWeight:'500',color:"#FFFFFF"},
    center:{alignItems:'center'},
        
})
export default Styles;

