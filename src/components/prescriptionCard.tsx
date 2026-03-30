import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { supabase } from '../SupaBase/SupaBase';

const PrescriptionCard = ({ item, onDelete }) => {
  const openFile = () => {
    Linking.openURL(item.file_url);
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from('prescriptions')
        .delete()
        .eq('id', item.id);

      if (error) {
        console.log(error);
      } else {
        onDelete && onDelete();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.card}>
      {item.file_type === 'application/pdf' ? (
        <View style={styles.pdfBox}>
          <Text style={styles.pdfText}>PDF</Text>
        </View>
      ) : item.file_type === 'link' ? (
        <View style={[styles.pdfBox, { backgroundColor: '#d9f1f4' }]}>
          <Text style={styles.pdfText}>🔗 Link</Text>
        </View>
      ) : (
        <Image
          source={{ uri: item.file_url }}
          style={styles.image}
          onError={() => console.log("Image failed:", item.file_url)}
/>
      )}

      <View style={styles.info}>
        <Text style={styles.title}>{item.file_name}</Text>
        <Text style={styles.date}>
          {new Date(item.created_at).toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.viewBtn} onPress={openFile}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PrescriptionCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    elevation: 7,
  },
  image: {
    width: '98%',
    height: 150,
    borderRadius: 10,
  },
  pdfBox: {
    height: 150,
    width:"98%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bc2323',
    borderRadius: 10,
    elevation:3,
    alignSelf:'center'
  },
  pdfText: {
    fontSize: 36,
    fontWeight: '800',
  },
  info: {
    marginTop: 10,
  },
  title: {
    color:"#da1414",
    marginLeft:10,
    fontSize:17,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    marginLeft:10,
    color: 'gray',
    marginVertical:5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  viewBtn: {
    flex: 1,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#275691',
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteBtn: {
    flex: 1,
    marginLeft: 5,
    padding: 10,
    backgroundColor: '#5bb5ab',
    borderRadius: 8,
    alignItems: 'center',
  },
  viewText: {
    fontSize:15,
    color: '#fff',
    fontWeight: '600',
  },
  deleteText: {
    fontSize:15,
    color: '#fff',
    fontWeight: '600',
  },
});