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
        <View style={[styles.pdfBox, { backgroundColor: '#e0f7fa' }]}>
          <Text style={styles.pdfText}>🔗 Link</Text>
        </View>
      ) : (
        <Image source={{ uri: item.file_url }} style={styles.image} />
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
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  pdfBox: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pdfText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 10,
  },
  title: {
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: 'gray',
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
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteBtn: {
    flex: 1,
    marginLeft: 5,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
    alignItems: 'center',
  },
  viewText: {
    color: '#fff',
    fontWeight: '600',
  },
  deleteText: {
    color: '#fff',
    fontWeight: '600',
  },
});