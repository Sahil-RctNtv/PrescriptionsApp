import { StyleSheet } from "react-native";

const Styles=StyleSheet.create({
    container: {
    flex: 1,
  },
  key:{ 
    flex: 1 ,
    backgroundColor:"#FFFFFF"
  },
  imge:{ 
    width: 200, 
    height: 220,
    alignSelf:'center' 
  },
  log: {
    padding: 5,
  },
  logIn: {
    fontSize: 28,
    alignSelf:'center',
    fontWeight: "500",
    color: "#14B8A6",
    marginBottom: 20,
  },
  container1: {
    justifyContent: "center",
    alignItems: "center",
    
  },
  container2: {
    flex:1,
    backgroundColor: "#cee2f6",
    borderRadius: 30,
    padding: 7,
    marginTop: -10,
    overflow: "hidden",
    borderWidth:0,
    marginHorizontal:10,
    marginVertical:5
  },
  textBox:{
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 0,
    borderRadius: 15,
    borderColor: "grey",
    backgroundColor:"#FFFFFF",
    elevation:2,
    paddingHorizontal:5
  },
  input: {
    marginLeft: 1,
    fontSize: 16,
    fontWeight: "400",
    color: "#020202",
  },
  error1:{
    fontSize:12,
    marginLeft:8,
    color: "red", 
    marginBottom:5
  },
  clip:{flexDirection:'row',alignItems:'center',width:'91%'},
  logbutton: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: "#4A81A4",
    borderRadius: 10,
    marginBottom: 130,
    elevation: 3,
  },
  LN:{ 
    color: "#FFFFFF", 
    fontSize: 20
  },
  haveAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    
  },
  Sign: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "400",
    paddingRight: 3,
  },
  Forget:{ 
    marginBottom: 30, 
    alignItems: "flex-end" 
  },
  Fortext:{ 
    color: "#669999", 
    fontSize: 13
  },

  signText:{ 
    color: "#4A81A4", 
    fontWeight: "400", 
    fontSize: 15
  }
})


export default Styles;

export const COLORS = {
  textPrimary: '#1A4372', 
  textAccent: '#669999',  
  buttonPrimary: '#4A81A4', 
  backgroundMain: '#E3EDF7', 
  backgroundCard: '#FFFFFF',
  borderInput: '#D1D1D1',
  textPlaceholder: '#9EA0A4',
};
