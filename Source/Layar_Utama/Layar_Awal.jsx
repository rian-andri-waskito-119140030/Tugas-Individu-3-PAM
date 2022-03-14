import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filter_Jadwal from './Filter_Jadwal';
import Utama from './Utama';

const Awal = createNativeStackNavigator();

const Layar_Awal = () => {
    return (
        <Awal.Navigator
            initialRouteName={"Utama"}
            screenOptions={{
                headerShown: true,
                headerTitleAlign:'center',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#90ff0d',
                },
            }}
        >
            <Awal.Screen
                name="Utama"
                component={Utama}
                options={{
                    title: "Waskito.ID",
                }}
            />
            <Awal.Screen
                name="Filter_Jadwal"
                component={Filter_Jadwal}
            />  

        </Awal.Navigator>
    );
};

export default Layar_Awal;