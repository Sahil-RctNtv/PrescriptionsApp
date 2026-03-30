import { View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getUserLocation } from "../../../Utils/LocationServices";
import { supabase } from "../../../SupaBase/SupaBase";
import { useState, useEffect } from "react";
import { pick, types } from "@react-native-documents/picker";
import Loader from "../../../components/Animation/Loader";
import Styles from "./UploadStyles";
import WavingHand from "../../../components/Animation/WaveHand";
import AnimatedContinueButton from "../../../components/Animation/AnimationButton";
import PharmacyList from "../../../Utils/PharmaList";
// import { useNavigation } from "@react-navigation/native";

import { handleUpload, uploadFromUrl } from "../../../Utils/uploadServices";

const UploadScreen = () => {
  const [location, setLocation] = useState<any>(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // const navigation = useNavigation<any>();
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [uploadType, setUploadType] = useState<any>(null);
  const [url, setUrl] = useState("");

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

      if (profile) {
        setName(profile.name);
      }
    };
    fetchUser();
  }, []);

  const handleGetLocation = async () => {
    setLoading(true);
    const data = await getUserLocation();
    setLocation(data);
    setLoading(false);
  };

  const handleLinkPress = () => {
  setUploadType("url");
  setSelectedFile(null);
  setShowOverlay(true);
};

const handleFilePress = async () => {
  try {
    const res = await pick({
      type: [
        types.images,
        types.pdf,
      ],
      allowMultiSelection: false,
    });

    const file = res[0];

    const formattedFile = {
      uri: file.uri,
      type: file.type,
      name: file.name,
    };

    setSelectedFile(formattedFile);
    setUploadType("file");
    setUrl("");
    setShowOverlay(true);

  } catch (err) {
    console.log("Picker error:", err);
  }
};
  const handleContinue = async () => {
    try {
      let result = null;

      if (uploadType === "file" && selectedFile) {
        result = await handleUpload(selectedFile);
      } else if (uploadType === "url" && url.trim()) {
        result = await uploadFromUrl(url.trim());
      } else {
        alert("Please select a file or enter a valid URL");
        return;
      }

      if (result) {
        Alert.alert("Success", "Uploaded successfully!");
        handleCancelUpload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelUpload = () => {
  setUploadType(null);
  setUrl("");
  setSelectedFile(null);
  setShowOverlay(false);
};


  return (

    <View style={{ flex: 1 }}>
      <SafeAreaView style={Styles.container}>
        <View style={Styles.container1}>
          <Image
            source={require("../../../assets/Iconbg.png")}
            style={Styles.iconbg}
          />

          <View style={Styles.city}>
            {location?.city && (
              <Image
                source={require("../../../assets/location.gif")}
                style={Styles.locicon}
              />
            )}

            <Text
  style={[
    Styles.headname,
    { marginLeft: location?.city ? 3 : 7 },
  ]}
>
  {location?.city ? (
    location.city
  ) : (
    <>
      Hey, {name}
      <WavingHand />
    </>
  )}
</Text>
          </View>

          <TouchableOpacity style={Styles.sunny}>
            <Ionicons name="sunny" color={"gold"} size={35} />
          </TouchableOpacity>
        </View>

        <View style={Styles.containerlist}>
          {location ? (
            <PharmacyList
              userLat={location?.latitude}
              userLon={location?.longitude}
            />
          ) : (
            <TouchableOpacity
              style={Styles.location}
              onPress={handleGetLocation}
            >
              <Image
                source={require("../../../assets/UserlocationBg.png")}
                style={Styles.map}
                resizeMode="contain"
              />
              <View style={Styles.center}>
                <Text style={Styles.text1}>
                  Find your <Text style={Styles.loc}>location</Text>
                </Text>
                <Text style={Styles.text2}>
                  Tap the map to instantly
                </Text>
                <Text style={Styles.text2}>
                  find nearby Healthcare Services &
                </Text>
                <Text style={Styles.text2}>
                  pinpoint your current city.
                </Text>
                <Text style={Styles.text3}>ENABLE LOCATION</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>


     {showOverlay && (
  <View
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 5,
    }}
  />
)}

<View
  style={{
    position: "absolute",
    bottom: 140,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  }}
>
  {uploadType === "url" ? (
    <View
      style={{
        borderWidth: 1,
        paddingHorizontal: 2,
        borderRadius: 15,
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgb(237, 231, 231)",
      }}
    >
      <TextInput
        placeholder="Paste prescription URL"
        placeholderTextColor={'black'}
        value={url}
        onChangeText={setUrl}
        style={[Styles.input, { flex: 1 }]}
      />

      <TouchableOpacity onPress={handleCancelUpload}>
        <Ionicons name="close-circle" size={28} color="red" />
      </TouchableOpacity>
    </View>
  ) : uploadType === "file" ? (
  <View
    style={{
      width: "60%",
      height:120,
      backgroundColor: "#fff",
      borderRadius: 15,
      padding: 15,
      alignItems: "center",
      position: "relative",
    }}
  >
    <TouchableOpacity
      onPress={handleCancelUpload}
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        zIndex: 10,
      }}
    >
      <Ionicons name="close-circle" size={27} color="red" />
    </TouchableOpacity>

    <Ionicons
      name={
        selectedFile?.type?.includes("pdf")
          ? "document-text"
          : "image"
      }
      size={50}
      color="#333"
    />

    {/* File Name */}
    <Text
      numberOfLines={1}
      style={{ marginTop: 10, fontWeight: "600" }}
    >
      {selectedFile?.name}
    </Text>

    <Text style={{ marginTop: 5, color: "gray", fontSize: 12 }}>
      Ready to upload
    </Text>
  </View>
) : (
    <View style={Styles.uploads}>
      <TouchableOpacity style={Styles.center} onPress={handleLinkPress}>
        <Image
          source={require("../../../assets/Link_Upload.gif")}
          style={Styles.uploadimg}
          resizeMode="contain"
        />
        <Text style={Styles.uploadText}>Upload Link</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.center} onPress={handleFilePress}>
        <Image
          source={require("../../../assets/file_upload.gif")}
          style={Styles.uploadimg}
          resizeMode="contain"
        />
        <Text style={Styles.uploadText}>Upload File</Text>
      </TouchableOpacity>
    </View>
  )}
</View>
  
  
  <View
  style={{
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 20,
    elevation: 10,
  }}
>
  <AnimatedContinueButton onPress={handleContinue} />
</View>


</SafeAreaView>
  {loading && ( 
    <View style={{ 
      position: "absolute", 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "rgba(255,255,255,0.5)", 
      }} > 
      <Loader /> 
      </View> )}
    </View>

  );
};

export default UploadScreen;