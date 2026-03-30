import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Styles from "../Register/RegStyles";

import { signUp } from "../../../Utils/AuthService"; 
import { validationRegistration, RegistrationErrors } from "../../../Utils/Validation";

const RegisterScreen = () => {
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    const validationErrors = validationRegistration(
      username,
      email,
      phone,
      password,
      confirmPassword
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const result = await signUp(email, password, username, phone);

    if (result.error) {
      Alert.alert("Error", result.error);
    } else {
      Alert.alert("Success", "Account created successfully");
      console.log("User:", result.user);
      Navigation.goback();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.container1}
    >
      <ScrollView>
      <View style={Styles.header}>
        <Text style={Styles.medi}>Medi 
          <Text style={Styles.go}>Go

          </Text>
          </Text>
      </View>
        <View style={Styles.container2}>
          
          <View style={Styles.regcontainer}>
            <Text style={Styles.regtext}>Registration</Text>
          </View>
          
          <Text style={Styles.heading}>UserName</Text>
          <View style={Styles.textBox}>
            <Ionicons name="person" size={22} color="grey" />
            <TextInput
              placeholder="What's your Name"
              placeholderTextColor={"#ccc"}
              style={Styles.input}
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setErrors((prev) => ({ ...prev, username: undefined }));
              }}
            />
          </View>

          {errors.username && <Text style={Styles.err}>{errors.username}</Text>}

          <Text style={Styles.heading}>Email</Text>
          <View style={Styles.textBox}>
            <Ionicons name="mail" size={22} color="grey" />
            <TextInput
              placeholder="Enter your Email"
              placeholderTextColor={"#ccc"}
              style={Styles.input}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {errors.email && <Text style={Styles.err}>{errors.email}</Text>}

          
          <Text style={Styles.heading}>Phone Number</Text>
          <View style={Styles.textBox}>
            <Ionicons name="call" size={22} color="grey" />
            <TextInput
              placeholder="+91 XXXXXXXXXX"
              placeholderTextColor={"#ccc"}
              style={Styles.input}
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              keyboardType="number-pad"
            />
          </View>
          {errors.phone && <Text style={Styles.err}>{errors.phone}</Text>}

          <Text style={Styles.heading}>Password</Text>
          <View style={Styles.textBox}>
            <Ionicons name="lock-closed" size={22} color="grey" />
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={"#ccc"}
              style={Styles.input}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              secureTextEntry
            />
          </View>
          {errors.password && <Text style={Styles.err}>{errors.password}</Text>}

          
          <View style={Styles.textBox}>
            <Ionicons name="lock-closed" size={22} color="grey" />
            <TextInput
              placeholder="Re-Enter Password"
              placeholderTextColor={"#ccc"}
              style={Styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
          {errors.confirmPassword && (
            <Text style={Styles.err}>{errors.confirmPassword}</Text>
          )}

          <TouchableOpacity style={Styles.logbutton} onPress={handleRegister}>
            <Text style={Styles.hanReg}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;