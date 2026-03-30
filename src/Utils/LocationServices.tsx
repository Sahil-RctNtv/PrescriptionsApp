import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";

export const getUserLocation = async () => {
  try {
    const hasPermission = await requestPermission();
    console.log("Permission:", hasPermission);
    if (!hasPermission) {
      throw new Error("Permission denied");
    }
    console.log("Step 2: Getting position");
    const position = await getCurrentPosition();
    console.log("Position:", position);
    const { latitude, longitude } = position.coords;
    const city = await getCity(latitude, longitude);
    return {
      city,
      latitude,
      longitude,
    };
  } catch (error: any) {
    console.log("Location Error:", error);
    return null;
  }
};

//-------------------------------------------------------------
const requestPermission = async () => {
  if (Platform.OS === "android") {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};

//---------------------------------------------------------------
const getCurrentPosition = () => {
  return new Promise<any>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error),
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  });
};

//--------------------------------------------------------------
const getCity = async (lat: number, lng: number) => {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
    const data = await res.json();
    return (
        data.city ||
        data.locality ||
        data.principalSubdivision ||
        "Unknown"
    );
    };