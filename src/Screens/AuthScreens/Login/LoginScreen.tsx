import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from "./LogStyles";
import { useNavigation } from "@react-navigation/native";
import { signIn } from "../../../Utils/AuthService";
import Loader from "../../../components/Animation/Loader";

const LoginScreen=()=>{
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  
 const handleLogin = async () => {
  if (!email || !password) {
    setError("Email and Password are required");
    return;
  }

  try {
    setLoading(true);
    const result = await signIn(email, password);
    if (result.error) {
      setError(result.error);
      return;
    }
    setError("");
  } catch (err: any) {
    setError("Something went wrong");
    console.log(err);
  } finally {
    setLoading(false);
  }
};

  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.key}>
      <View style={Styles.container}>
        <Image
          source={require("../../../assets/Medigo.png")}
          style={Styles.imge}
          resizeMode="contain"
        />
      <View style={Styles.container2}>
        <View style={Styles.log}>
          <Text style={Styles.logIn}>Login</Text>
          <View style={Styles.textBox}>
            <Ionicons name="person" color={"grey"} size={22} />
            <TextInput
              placeholder="Enter your Email"
              placeholderTextColor={"grey"}
              style={Styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={Styles.textBox}>
            <View style={Styles.clip}>
            <Ionicons name="clipboard" color={"grey"} size={22} />
            <TextInput
              placeholder="Enter your Password"
              placeholderTextColor={"grey"}
              style={Styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            </View>
              <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              onPress={() => setShowPassword(!showPassword)}
              size={20}
              color="grey"/>
           
          </View>
            
            {error ? (
              <Text style={Styles.error1}>{error}.</Text>
            ) : null}

          <View style={Styles.Forget}>
            <Text style={Styles.Fortext}>
              Forget Password?
            </Text>
          </View>
          <TouchableOpacity style={Styles.logbutton} onPress={handleLogin} disabled={loading}>
            {loading ? (<Loader /> ) : (<Text style={Styles.LN}>Log In</Text> )}
          </TouchableOpacity>
        </View>
        <View style={Styles.haveAccount}>
          <Text style={Styles.Sign}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={Styles.signText}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </KeyboardAvoidingView>
  );
}

export default LoginScreen;

