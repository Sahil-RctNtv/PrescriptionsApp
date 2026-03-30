import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor:"#FFFFFF"
  },
  err:{
    color: "red"
  },
  regcontainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,

  },
  header:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30,
    marginTop:30,
  },
  medi:{
    fontSize:50,
    fontWeight:'700',
    color:'#337AC0'
  },
  go:{
    color:"#62BCCC"
  },
  regtext:{
    fontSize:30,
    fontWeight:'500',
    color:'#62BCCC',
    letterSpacing:1

  },

  hanReg:{ 
    color: "#fff", 
    fontSize: 20 

  },

  container2: {
    marginHorizontal:5,
    backgroundColor:  "#cee2f6",
    paddingTop:8,
    borderRadius:30,
    paddingHorizontal:10,
    elevation:3
  },
  heading: {
    fontSize: 17,
    fontWeight: "500",
    color:"#1A4372"
  },

  textBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    borderWidth: 0,
    elevation:3,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    borderColor: "#D1D1D1",
    backgroundColor:"#FFFFFF",
    marginBottom:13
  },
  input: {
    fontSize: 16,
    fontWeight: "400",
    color: "#020202",
  },
  logbutton: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0,
    padding: 10,
    backgroundColor: "#4A81A4",
    borderRadius: 10,
    marginBottom: 50,
    elevation: 5,
  },
});
export default Styles;
