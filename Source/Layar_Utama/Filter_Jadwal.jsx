import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Jadwal_Terbang, Maskapai_Bandara, Detail_Bandara } from '../Data_Pesawat/Data_Pesawat'; 

const Pencarian = (awal, akhir) => {
  const jadwal = Jadwal_Terbang.filter(function(Airport){
    return Airport.bandara_awal == awal && Airport.bandara_akhir == akhir;
 }).map(function({id, bandara_awal, bandara_akhir, id_maskapai_bandara}){
     return {id, bandara_awal, bandara_akhir, id_maskapai_bandara};
 });
  return jadwal;
}

const Detail = ({ awal, akhir, id_maskapai_bandara, tanggal }) => (
  <View style={styles.airport}>
    <View style={styles.baris}>
        <Text style={styles.colom1}>{Detail_Bandara[awal].nama_detail_bandara}</Text>
        <Text style={styles.colom1}> - </Text>
        <Text style={styles.colom1}>{Detail_Bandara[akhir].nama_detail_bandara}</Text>
        
    </View>
    <View style={styles.baris}>
    
      <Text style={styles.colom}>
        {Maskapai_Bandara[id_maskapai_bandara].nama_maskapai_bandara}
        </Text>
      <Text style={styles.colom}>{tanggal}</Text>
    </View>
  </View>
  
);

const Filter_Jadwal = ({navigation, route}) => {
  const {awal, akhir, tanggal} = route.params;
  const renderDetail = ({ Airport }) => (
    <Detail awal={Airport.bandara_awal} akhir={Airport.bandara_akhir} id_maskapai_bandara={Airport.id_maskapai_bandara} tanggal={tanggal}/>
  );

  return (
    <SafeAreaView style={styles.utama}>
      <Text style={styles.tanggal}>
        {tanggal}
      </Text>
      <FlatList
        jadwal={Pencarian(awal, akhir)}
        renderItem={renderDetail}
      />
      <View style={styles.nama_nim}>
          <Text>Copyright Rian Andri Waskito - 119140030</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  utama: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#D1D1D1',
    position: 'relative',
  },
  airport: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  baris: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  colom1: {
    width: '25%',
    alignItems: 'center',
    textAlign: 'center',
  },
  colom:{
    width: '40%',
    fontWeight: 'bold',
  },
  tanggal: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    backgroundColor: '#88b454',
  },
  nama_nim: {
    alignItems: 'center',
  },
  nama_nim: {
    marginBottom: 20,
    alignItems: 'center',
  }
});

export default Filter_Jadwal;

console.log(Pencarian("DXB", "Haneda"));
console.log(Detail_Bandara[Jadwal_Terbang[0].bandara_awal].nama_detail_bandara);
