import { ImageBackground, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Star from 'react-native-vector-icons/FontAwesome'
export default function ProductCard({ item, navigation }) {
    // console.log("navigation", item)
    const [isLoading, setIsLoading] = useState(false)

    const getIsloading = () => {
        if (item) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getIsloading()
    }, [item])

    return (
        <Card style={styles.container}>

            <Card.Cover style={styles.cardImage} source={{ uri: item.thumbnail }}
            />
            <Card.Content style={styles.cardContent}>
                <View style={styles.cardContentView}>
                    <View>
                        <Text style={styles.text}>40% off</Text>
                        <Text style={styles.text}>lorem</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.text}>40% offdwqd</Text>
                            <Text style={styles.text}>wdwqdwqd</Text>
                        </View>
                    </View>
                </View>
            </Card.Content>

            <Card.Actions >
                <View style={styles.cardActions}>
                    <View>
                        <Text>Product name</Text>
                        <Text>Shop name</Text>
                    </View>
                    <View>
                        <Text>Price</Text>
                        <View style={styles.rating}>
                            <Star name='star' color='red' size={15} />
                            <Star name='star' color='red' size={15} />
                            <Star name='star' color='red' size={15} />
                            <Star name='star' color='red' size={15} />
                        </View>

                    </View>
                </View>

            </Card.Actions>
        </Card>
    )
}