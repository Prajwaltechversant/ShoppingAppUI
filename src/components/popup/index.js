import { View, Text, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './style'
import { DeleteProductContextAPI } from '../../context/DeleteProductContext'
import { Button } from 'react-native-paper';
import { PopupContextAPI } from '../../context/PopupContext';



export default function Popup() {

    const { deleteProductStatus, setDeleteProductStatus } = useContext(DeleteProductContextAPI)
    const { modalVisible, setModalVisible } = useContext(PopupContextAPI)
    console.log(modalVisible, "popup st")
    const handleDeleteStatus = (res) => {
        if (res) {
            setDeleteProductStatus(true)
        }
        else {
            setDeleteProductStatus(false)
        }
        setModalVisible(false)
    }
    return (
        <>
            <Modal visible={modalVisible}
                transparent={true}
            >
                <View style={styles.modalView}>

                    <View style={styles.modalInner}>
                        <Text style={styles.popupText}>Are you sure want to delete this Product?</Text>
                        <View style={styles.content}>
                            <Button icon="camera" mode="contained" onPress={() => handleDeleteStatus(false)}>
                                No !
                            </Button>
                            <Button icon="camera" mode="contained" onPress={() => handleDeleteStatus(true)}>
                                Yes
                            </Button>
                        </View>
                    </View>


                </View>
            </Modal>
        </>

    )
}