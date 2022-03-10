import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white'}}>
     <Image  style={styles.tinyLogo}  source={require('../assets/loadingpage.png')}/>
     <View style={styles.buttonSection}>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.text}>Mulai Sekarang</Text>
       </TouchableOpacity>
     </View>
     <View style={{display:'flex',height:hp('5%'),width:wp('100%'),justifyContent:'center',alignItems:'center' }}>
        <Text style={{color:'#929292' , textAlign:'center'}}> - Coded With Love - </Text>
      </View>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  tinyLogo: {
    flex:1,
    width: wp('100%'),
    height: hp('50%'),
    

  },
  buttonSection:{
    height:hp('40%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width: wp('80%'),
    height: hp('8%'),
    backgroundColor: '#FF9052',
    borderRadius: hp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('5%'),
    
  },
  text:{fontFamily:'Montserrat-Bold',color:'white',fontSize:hp('3%')}
})