import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet
} from "react-native";
import { fetchNearbyPlaces } from "./Pharmacy"

const PharmacyList = ({ userLat, userLon }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  if (!userLat || !userLon) return;
     if (places.length > 0) return;
  const loadData = async () => {
    setLoading(true);
    const data = await fetchNearbyPlaces(userLat, userLon);
    if (data.length > 0) {
    setPlaces(data);
  }
    setLoading(false);
  };

  loadData();
}, [userLat, userLon]);
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let stars = "";
  for (let i = 0; i < fullStars; i++) {
    stars += "★";
  }
  if (hasHalf) {
    stars += "☆";
  }
  while (stars.length < 5) {
    stars += "☆";
  }
  return stars;
};

  const renderItem = ({ item }) => (
    <View
      style={Styles.container}>
      <View style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }}>
  <Image
    source={{ uri: item.image }}
    style={Styles.img}
    resizeMode="cover"
  />
</View>
      <View style={Styles.txtview}>
        <Text numberOfLines={1} style={Styles.lines}>{item.name}</Text>
        <Text style={Styles.distance}>
           {item.distance}km away
        </Text>
        <View style={Styles.starr}>
          <Text style={Styles.star}>{renderStars(item.rating)}</Text>
          <Text style={Styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </View>
  );
  
  return (
    <View >
      <Text
        style={Styles.containertxt}>Nearby 
        <Text style={Styles.containertxt2}> Pharmacies</Text> 
        </Text>

       {loading && <ActivityIndicator size="small" style={Styles.load} />}

        {!loading && places.length === 0 && (
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        No nearby places found
      </Text>
    )}

      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.content}
      />
    </View>
  );
};
export default PharmacyList;

const Styles=StyleSheet.create({
  containertxt:{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 5,
          marginBottom: 5,
          color:'#1A4372'
        },

  containertxt2:{
    color:'#14B8A6'
  },
  content:{ 
    paddingHorizontal: 10,
    paddingBottom: 20,
  },

  container:{
        width: 230,
        marginRight: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth:0,
        elevation: 3,
        
      },
  img:{
      width: "100%",
      height: 135,
  },

  txtview:{ padding: 10 },
  lines:{ fontSize: 16, fontWeight: "bold" },
  distance:{ color: "#aaa", marginTop: 5 },
  ratings:{ marginTop: 5 },
  load:{ marginTop: 50 },
  star:{ color: "#FFD700", fontSize: 15 },
  starr:{ flexDirection: "row", marginTop: 5 },
  rating:{ marginLeft: 5  }

})





