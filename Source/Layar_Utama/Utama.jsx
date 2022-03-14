import React, { useRef, useState } from 'react';
import { SafeAreaView, TextInput, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Jadwal_Terbang, Maskapai_Bandara, Detail_Bandara } from '../Data_Pesawat/Data_Pesawat';

const Utama = ({navigation}) => {
    const [awal, set_awal] = useState('');
    const [akhir, set_akhir] = useState('');
    const [tanggal, set_tanggal] = useState('');

    const awalRef = useRef('');
    const akhirRef = useRef('');

    const onSubmit = () => {
        console.log(tanggal);
        let new_awal;
        for(const [key, value] of Object.entries(Detail_Bandara)){
            if(value.nama_detail_bandara === awal){
                new_awal = (key);
                break;
            }
        }

        let new_akhir;
        for(const [key, value] of Object.entries(Detail_Bandara)){
            if(value.nama_detail_bandara === akhir){
                new_akhir = (key);
                break;
            }
        }
        
        console.log(new_awal);
        navigation.navigate('Filter_Jadwal', {
            awal: new_awal,
            akhir: new_akhir,
            date: tanggal,
        });
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView style={styles.style_utama}>
                <View style={styles.style_utama}>
                    <View style={styles.form_style_utama}>
                        <View style={styles.field_style_utama}>
                            <Input 
                                type="text"
                                ref={awalRef}
                                value={awal}
                                onChange={e => set_awal(e.target.value)}
                                placeholder="Bandara Awal"
                                label="Bandara Awal"
                                autoCompleteType={undefined}
                                
                            />
                        </View>
                        <View style={styles.field_style_utama}>
                            <Input 
                                ref={akhirRef} 
                                value={akhir}
                                onChange={e => set_akhir(e.target.value)}
                                placeholder="Bandara Akhir"
                                label="Bandara Akhir"
                                autoCompleteType={undefined}
                                
                            />
                        </View>
                        <View style={styles.field_style_utama}>
                            <Input
                                type="text"
                                value={tanggal}
                                onChangeText={set_tanggal}
                                autoCompleteType={undefined}
                                placeholder="Tanggal"
                                label="Tanggal"
                                
                            />
                        </View>
                        <View style={styles.field_style_utama}>
                            <Button title="Cari" style={styles.tombol} onPress={onSubmit}/>
                        </View>
                        
                    </View>
                </View>
                
            </KeyboardAvoidingView>
            <View style={styles.nama_nim}>
                    <Text>Copyright Rian Andri Waskito - 119140030</Text>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    style_utama: {
        backgroundColor: '#90ff0d',
    },
    form_style_utama: {
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        paddingTop: 30,
        borderRadius: 15,
        height: '85%',
    },
    field_style_utama: {
        paddingTop: 2,
        marginHorizontal: 10,
        marginVertical: 10,
        
    },
    tombol: {
        Color: '#f78e0c',
        borderRadius: 15,
    },
    nama_nim: {
        marginTop: 100,
        alignItems: 'center',
    }
})

export default Utama;
