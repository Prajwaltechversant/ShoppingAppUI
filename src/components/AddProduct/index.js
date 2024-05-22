import { View, Text, KeyboardAvoidingView, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { IconButton, MD3Colors, } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style';
import { TextInput, Button } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addProduct } from '../../redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { useScreenContext } from '../../context/ScreenContextProvider';
import Dropdown from '../dropdown';
import { categories } from './Category';
import { brand } from './Category';
import { size } from './Category';
import { color } from './Category';


export default function Add({ edit, item }) {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => {
        setVisible(false)
        setProduct({
            title: "",
            thumbnailuri: "",
            description: ""
        })
    };
    const containerStyle = { backgroundColor: 'white' };
    const [text, setText] = React.useState("");

    const [inputType, setinputType] = useState('')


    const screenContext = useScreenContext()

    const screenStyles = styles(screenContext,
        screenContext[screenContext.windowisPortrait ? 'windoWidth' : 'windoHeight'],
        screenContext[screenContext.windowisPortrait ? 'windowHeight' : 'windowWidth'], edit
    )


    const dispatch = useDispatch()

    const [product, setProduct] = useState({
        title: "",
        thumbnailuri: "",
        description: '',
        price: '',
        productImagesUri: [],
        brand: "",
        category: '',
        discount: '',
        size:'',
        color:''

    })

    const handleUpload = async () => {
        setinputType('file')
        const result = await launchCamera()
        // console.log(result.assets[0].uri)
        setProduct({ ...product, thumbnailuri: result.assets[0].uri })
    }
    console.log(product, 'adding')

    const handleFileUpload = async () => {
        setinputType('camera')
        const result = await launchImageLibrary()
        console.log(result.assets[0].uri)
        setProduct({ ...product, thumbnailuri: result.assets[0].uri })


    }
    const handleProductImages = async () => {

        let options = {
            selectionLimit: 3
        }
        const result = await launchImageLibrary(options)
        const imageUris = result.assets.map(item => item.uri)
        setProduct({ ...product, productImagesUri: imageUris })
    }
    // console.log(product)

    const handleSubmit = () => {
        const { title, thumbnailuri, productImagesUri, description, price } = product
        if (!title || !productImagesUri || !description || !price) {
            Alert.alert("Please add all details to proceed")
        }
        else {
            dispatch(addProduct(product))
            hideModal()
        }
    }
    return (
        <View style={screenStyles.root}>
            <View style={screenStyles.container} >
                <IconButton
                    icon={!edit ? 'message-plus' : 'pencil'}
                    mode='contained'
                    // iconColor={MD3Colors.success}
                    iconColor='white'
                    size={30}
                    style={styles.IconButton}
                    containerColor='green'
                    onPress={showModal}
                />
            </View>

            <View style={screenStyles.modalContainer}>
                <Modal visible={visible} style={screenStyles.modalContainer} animationType='slide' presentationStyle='fullScreen' >
                    <View style={screenStyles.modalView}>
                        <Text style={screenStyles.textStyle}> Add Product </Text>
                        <KeyboardAvoidingView>
                            <View style={screenStyles.inputBoxContainer}>
                                {!item ? <TextInput
                                    mode='outlined'
                                    label={'Product'}
                                    multiline={true}
                                    style={screenStyles.inputBox}
                                    onChangeText={(e) => setProduct({ ...product, title: e })}

                                />
                                    :
                                    <TextInput
                                        mode='outlined'
                                        label={'Product'}
                                        // placeholder='Product title'
                                        multiline={true}
                                        style={screenStyles.inputBox}
                                        onChangeText={(e) => setProduct({ ...product, title: e })}

                                        value={item ? item.title : ''}
                                    />}
                                {/* <View>
                                    <Text>Upload Thumbnail</Text>
                                    <Button icon="upload" mode="contained"
                                        style={screenStyles.inputBox}
                                        onPress={handleFileUpload}>
                                        Upload Product thuumbnail
                                    </Button>
                                    <Text style={{ textAlign: 'center' }}>Or</Text>
                                    <Button icon="upload" mode="contained"
                                        style={screenStyles.inputBox}
                                        onPress={handleUpload}>
                                        Upload Product Thumbnail
                                    </Button>
                                </View> */}

                                {!item ? <TextInput
                                    placeholder='Description'
                                    style={screenStyles.inputBox} onChangeText={(e) => setProduct({ ...product, description: e })}
                                    mode='outlined'

                                />
                                    :
                                    <TextInput placeholder='Description' onChangeText={(e) => setProduct({ ...product, description: e })}
                                        value={item ? item.description : ''}
                                        mode='outlined'

                                    />}
                                <View style={screenStyles.uploadContainer}>
                                    <Button icon={'upload'} mode='container' style={screenStyles.uploadBtn} onPress={handleProductImages} >
                                        Upload Images
                                    </Button>
                                    <Button icon={'upload'} mode='container' style={screenStyles.uploadBtn} onPress={handleProductImages} >
                                        Upload Images
                                    </Button>
                                </View>
                                {!item ? <TextInput placeholder='Price' style={screenStyles.inputBox} keyboardType='number-pad' onChangeText={(e) => setProduct({ ...product, price: e })}
                                    mode='outlined'

                                />
                                    :
                                    <TextInput placeholder='Description' onChangeText={(e) => setProduct({ ...product, description: e })}
                                        value={item ? item.description : ''}
                                        mode='outlined'
                                    />}
                                {/* <TextInput placeholder='Brand'
                                    mode='outlined'
                                    style={screenStyles.inputBox} keyboardType='default' onChangeText={(e) => setProduct({ ...product, brand: e })}
                                /> */}
                                <View style={screenStyles.inputBox}>
                                    <Dropdown data={brand} value={'brand'} setProduct={setProduct} product={product}/>
                                </View>
                                                                {/* <TextInput placeholder='Category'
                                    mode='outlined'
                                    style={screenStyles.inputBox} keyboardType='default' onChangeText={(e) => setProduct({ ...product, category: e })}
                                /> */}
                                <View style={screenStyles.inputBox}>
                                    <Dropdown data={categories} value={'category'} setProduct={setProduct} product={product} />
                                </View>
                                <View style={screenStyles.inputBox}>
                                    <Dropdown data={size} value={'size'} setProduct={setProduct} product={product} />
                                </View>
                                <View style={screenStyles.inputBox}>
                                    <Dropdown data={color} value={'color'} setProduct={setProduct} product={product} />
                                </View>
                                <TextInput placeholder='Discount' style={screenStyles.inputBox} keyboardType='number-pad' onChangeText={(e) => setProduct({ ...product, discount: e })}
                                    mode='outlined'
                                />
                            </View>

                        </KeyboardAvoidingView>
                        <View style={screenStyles.btn}>
                            <Button icon="cancel" mode="contained" onPress={hideModal}>
                                Cancel
                            </Button>
                            <Button icon="upload" mode="contained" onPress={handleSubmit}>
                                Submit
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    )
}