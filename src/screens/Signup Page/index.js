import { Alert, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ListModal from '../../components/Modal'
import { CountryDataContextAPI } from '../../context/CountryDataContext'
import { useDispatch, useSelector } from 'react-redux'
import addUserSlice, { signupUser } from '../../redux/slices/addUserSlice'
import database from '../../dB'
import User from '../../dB/model/User'

export default function Signup({ navigation, page, route, user }) {

  const [countryData, setCountryData] = useState("")
  const [countryId, setCountryId] = useState()
  const [stateData, setStateData] = useState("")
  const { location, setLocation } = useContext(CountryDataContextAPI);
  const dispatch = useDispatch()

  const [confirmPassword, setConfirmPassword] = useState('')
  const getCountryId = () => {
    if (countryData) {
      setCountryId(countryData.id)
    }
  }

  useEffect(() => {
    getCountryId()
  }, [countryData])

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    mobile: "",
    email: "",
    addres: "",
    country: countryData.name,
    state: stateData.name,
    password: ""
  })
  const setData = () => {
    setUserData(prev => ({ ...prev, country: location?.country?.name, state: location.state.name }))
  }
  useEffect(() => {
    setData()
  }, [location])

  const handleSignup = async () => {

    const { name, username, mobile, email, password, state, country, addres } = userData

    if (!name || !username || !mobile || !email || !password || !country || !addres) {
      Alert.alert("please fill the form completely")
    }
    else {
      if (mobile.length < 0 || mobile.length < 10) {
        Alert.alert("Invalid Mobile number")
      }
      else {
        const regeX = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
        const regeXPwd = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
        if (regeX.test(email)) {
          if (regeXPwd.test(password)) {
            if (confirmPassword === password) {
              // dispatch(signupUser(userData));     for storing into redux Async Starage

              // watermelon db

              try {
                 await database.write(async () => {
                  const user = await database.get('users').create(user => {
                    // user.name = name
                    user.username = username;
                    user.email = email;
                    user.mobile = mobile;
                    user.address = addres;
                    user.country = country;
                    user.state = state;
                    user.password = password
                  })
                  return user
                })

                navigation.navigate('Login', {
                  username: userData.username,
                  password: userData.password
                })

              }
              catch (err) {
                console.log('Creating user failed due to :', err)
              }
            }
            else {
              Alert.alert("Please check the password")
            }
          }
          else {
            Alert.alert("Password must contain atleast one Uppercase letter,smaller case letter , Number and One special charactor")
          }
        }
        else {
          Alert.alert("Invalid Email address")
        }

      }

    }
  }
  const data = useSelector(state => state.addUser)


  const handleNavigation = () => {
    navigation.navigate('Login')
  }

  const getdata = () => {
    const data = data.filter(item => item.use)
  }


  const handleUpdate = () => {
    const { name, username, mobile, email, password, state, country, addres } = userData
    if (!name) {
      setUserData({ ...userData, name: user[0].name })
    }
    if (!username) {
      setUserData({ ...userData, username: user[0].name })
    }
    if (!mobile) {
      setUserData({ ...userData, mobile: user[0].name })
    }
    if (!addres) {
      setUserData({ ...userData, addres: user[0].addres })
    }
    if (!country) {
      setUserData({ ...userData, country: user[0].country })
    }
    if (!state) {
      setUserData({ ...userData, state: user[0].state })
    }
    if (!password) {
      setUserData({ ...userData, password: user[0].password })
    }
    // console.log(name)
    if (!name || !username || !mobile || !email || !password || !country || !addres) {
      Alert.alert("please fill the form completely")
    }
    else {
      if (mobile.length < 0 || mobile.length < 10) {
        Alert.alert("Invalid Mobile number")
      }
      else {
        const regeX = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
        const regeXPwd = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
        if (regeX.test(email)) {
          if (regeXPwd.test(password)) {
            if (confirmPassword === password) {
              dispatch(signupUser([userData]));
              // navigation.navigate('Login', {
              //   username: userData.username,
              //   password: userData.password
              // })
            }
            else {
              Alert.alert("Please check the password")
            }
          }
          else {
            Alert.alert("Password must contain atleast one Uppercase letter,smaller case letter , Number and One special charactor")
          }
        }
        else {
          Alert.alert("Invalid Email address")
        }

      }

    }
  }





  return (
    <SafeAreaView>

      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.inputLabel}>Name</Text>
              {!user ?
                <TextInput placeholder='Enter your name'
                  onChangeText={(e) => setUserData({ ...userData, name: e })}
                  style={styles.inputBox}
                // value={user[0].name}
                />
                :
                <TextInput placeholder='Enter your name'
                  onChangeText={(e) => setUserData({ ...userData, name: e })}
                  style={styles.inputBox}
                  value={userData.name !== '' ? userData.name : (user ? user[0].name : '')}

                />

              }
            </View>
            <View>
              <Text style={styles.inputLabel}> Username </Text>
              {!user ? <TextInput placeholder='create a username'
                onChangeText={(e) => setUserData({ ...userData, username: e })}
                style={styles.inputBox}
              />
                :
                <TextInput placeholder='create a username'
                  onChangeText={(e) => setUserData({ ...userData, username: e })}
                  style={styles.inputBox} value={userData.username !== '' ? userData.username : (user ? user[0].username : '')}
                />}
            </View>
            <View>
              <Text style={styles.inputLabel}> Mobile Number </Text>
              {!user ?
                <TextInput placeholder='Enter your Mobile Number'
                  onChangeText={(e) => setUserData({ ...userData, mobile: e })}
                  style={styles.inputBox}
                  inputMode='tel'
                />
                :
                <TextInput placeholder='Enter your Mobile Number'
                  onChangeText={(e) => setUserData({ ...userData, mobile: e })}
                  style={styles.inputBox}
                  inputMode='tel' value={userData.mobile !== '' ? userData.mobile : (user ? user[0].mobile : '')}
                />
              }
            </View>
            <View>
              <Text style={styles.inputLabel}> email </Text>
              {!user ?
                <TextInput placeholder='Enter your email'
                  onChangeText={(e) => setUserData({ ...userData, email: e })}
                  style={styles.inputBox}
                  inputMode='email'
                />
                :
                <TextInput placeholder='Enter your email'
                  onChangeText={(e) => setUserData({ ...userData, email: e })}
                  style={styles.inputBox}
                  inputMode='email' value={userData.email !== '' ? userData.email : (user ? user[0].email : '')}
                />
              }
            </View>


            <View>
              <Text style={styles.inputLabel}> Address </Text>
              {!user ?
                <TextInput placeholder='Enter your Address'
                  onChangeText={(e) => setUserData({ ...userData, addres: e })}
                  style={styles.inputBox}
                />
                :
                <TextInput placeholder='Enter your Address'
                  onChangeText={(e) => { setUserData({ ...userData, addres: e }) }}
                  style={styles.inputBox}
                  value={userData.addres !== '' ? userData.addres : (user ? user[0].addres : '')}

                />
              }
            </View>

            <View>
              <Text style={styles.inputLabel}> Country </Text>
              {!user ?
                < ListModal setCountryData={setCountryData} value="country" countryname={countryData?.name} />
                :
                <ListModal setCountryData={setCountryData} value="country" countryname={user[0].country} />
              }
            </View>

            {
              countryData &&
              <View>
                <Text style={styles.inputLabel}> State </Text>
                {
                  !user ?
                    <ListModal countryId={countryId} setStateData={setStateData}
                      countryname={stateData?.name}
                      value="state" />
                    :
                    <ListModal countryId={countryId} setStateData={setStateData}
                      countryname={user[0].state}
                      value="state" />
                }

                {/* {stateData &&
                  <View style={{ marginVertical: 4, marginHorizontal: 5, }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>{stateData.name}
                    </Text>
                  </View>
                } */}
              </View>
            }

            <View>
              <Text style={styles.inputLabel}>Password </Text>
              {!user ?
                <TextInput placeholder='Enter your Password'
                  style={styles.inputBox} secureTextEntry
                  onChangeText={(e) => setUserData({ ...userData, password: e })}
                // value={user[0].password}
                />
                :
                <TextInput placeholder='Enter your Password'
                  style={styles.inputBox} secureTextEntry
                  onChangeText={(e) => setUserData({ ...userData, password: e })}
                  value={user[0].password}

                />
              }
            </View>
            <View>
              <Text style={styles.inputLabel}> Confirm Password </Text>
              {
                !user ?
                  <TextInput placeholder='please confirm your Password'
                    style={styles.inputBox} secureTextEntry
                    onChangeText={(e) => setConfirmPassword(e)}
                  // value={user[0].password} 
                  />
                  :
                  <TextInput placeholder='please confirm your Password'
                    style={styles.inputBox} secureTextEntry
                    onChangeText={(e) => setConfirmPassword(e)}
                    value={user[0].password}
                  />
              }
            </View>

            <View style={styles.signupBox}>
              {
                page === "profile" ?
                  <TouchableOpacity>
                    <Text style={{ color: 'white' }}
                      onPress={handleUpdate}
                    >Update</Text>
                  </TouchableOpacity>

                  :
                  <TouchableOpacity>
                    <Text style={{ color: 'white' }}
                      onPress={handleSignup}
                    >Sign Up</Text>
                  </TouchableOpacity>

              }
            </View>

            {
              !page === 'profile' &&
              <View style={styles.loginBox}>
                <View>
                  <Text style={styles.logintext} >Already have an account ? </Text>
                </View>
                <View >
                  <TouchableOpacity style={styles.loginButton} onPress={handleNavigation}>
                    <Text style={{ color: 'blue' }}  >Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>}

          </View>



        </View>
      </KeyboardAwareScrollView>


    </SafeAreaView>
  )
}

