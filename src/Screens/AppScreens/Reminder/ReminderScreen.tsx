import { View, Text, FlatList, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { supabase } from "../../../SupaBase/SupaBase";
import PrescriptionCard from "../../../components/prescriptionCard";
import Loader from "../../../components/Animation/Loader";
const ReminderScreen = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    setLoading(true);

    const user = (await supabase.auth.getUser()).data.user;

    const { data, error } = await supabase
      .from("prescriptions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setFiles(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchFiles();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <Loader/>
      </View>
    );
  }

  if (files.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No prescriptions uploaded yet 💊</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#EEF3FF", "#F5F2ED", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
     <FlatList
  data={files}
  keyExtractor={(item) => item.id}
  contentContainerStyle={styles.contain}
  nestedScrollEnabled={true}  
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <PrescriptionCard item={item} onDelete={fetchFiles} />
  )}
/>
    </LinearGradient>
  );
};

export default ReminderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contain:{
    padding: 16,
    paddingBottom: 100,
    flexGrow: 1,
  }
});