import { View, Text, Pressable, Modal, TouchableOpacity, Button, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import ListItem from '../ListItem'
import { getCountryFromAPI, getStatesFromAPI } from '../../services/allAPI'
import axios from 'axios'
import { getCountryAPI, getStateAPI } from '../../services/baseURL'
import EmptyList from '../ListItem/EmptyList'
import AntDesign from 'react-native-vector-icons/AntDesign'



export default function ListModal({ setCountryData, countryId, value,setStateData , countryname}) {
    const [modalVisible, setModalVisible] = useState(false)

    const [allData, setAllData] = useState([])
    const [status, setStatus] = useState(false)
    // console.log(value)
    if (value === "country") {
        const getCountry = async () => {
            try {
                const response = await getCountryFromAPI()
                // const response = await axios.get(getCountryAPI)
                //  console.log(response.data.result['countries'])
                setAllData(response.data.result.countries)
                // console.log(country,"countries")
                setStatus(true)


            }
            catch (err) {
                console.log("failed", err)
            }

        }
        useEffect(() => {
            getCountry()
        }, [])

    }
    else {
        const getStates = async () => {
            try {
                // const response = await getStatesFromAPI(countryId); 
                const response = await axios.post('https://api.staging.bistrainer.com/v2/states', {
                    countryId
                })
                // console.log(response.data.result.states, "states")
                if(response){
                    setAllData(response.data?.result?.states)

                }
            }
            catch (err) {
                console.log("failed due to : ", err)
            }
        }
        useEffect(() => {
            getStates()
        }, [status, countryId])
    }

    // useEffect(() => {
    //     console.log(value, "gregr")
    // }, [allData])


    return (
        <View  >
            <Pressable onPress={() => setModalVisible(true)}>
                <View style={styles.inputSelector}>
                    {!countryname ?
                        <Text sty={styles.inputText}>{`Select ${value}`}</Text>
                    :
                    <Text sty={styles.inputText}>{`${countryname}`}</Text>
                    }
                    <AntDesign name="down" color="black"  />
                </View>
            </Pressable>


            <View style={styles.modalViewContainer}>
                <Modal
                    animationType="fade"
                    visible={modalVisible}
                    style={styles.modal}
                    transparent={true}
                >
                    <View style={{flex:1,width:"100%",padding:100, justifyContent:'center', alignItems:'center',}}>
                        <FlatList
                        style={{ height:100, padding:10}}
                            data={allData}
                            renderItem={({ item }) => 
                                <ListItem item={item} setModalVisible={setModalVisible}
                                setCountryData={setCountryData}  value={value} setStateData={setStateData}
                            />
                                
                    }
                        keyExtracor={item => item.id}
                        ListEmptyComponent={EmptyList}
                        />
                    </View>
                </Modal>
            </View>
        </View>
    )
}