import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React , { useState}from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const SemuaSurah = ({route,navigation}) => {
  const data = route.params;

  
  return (
    <View style={{backgroundColor:'white',flex:1}}>
       <View style={{height:hp('15%') }}>
        <Text style={styles.hai}>Daftar Surah</Text>
      </View>
        <FlatList 
          data={data.surah}
          showsHorizontalScrollIndicator={false}
          keyExtractor = {({number},index) => number }
          renderItem = {({item}) => (
            <TouchableOpacity onPress={()=>{navigation.navigate('SurahPage',{
              id:item.number
            })}}>
              <View style={{width:wp('100%'),backgroundColor:'#FBEDED' ,marginBottom:10,paddingTop:20,paddingBottom:20 }}> 
              
                <View style={{marginLeft:20}}>
                <Text style={styles.namaSurah}>{item.name.transliteration.id} - {item.name.translation.id}</Text>
                <Text style={styles.asal}>{item.revelation.id}</Text>
                <Text style={styles.namaSurah}>Surah ke : {item.number} ( {item.numberOfVerses} Ayat ) </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) }
        />
    </View>
  )
}

export default SemuaSurah

const styles = StyleSheet.create({
  hai:{
    fontFamily:'Montserrat-Bold',
    fontSize:hp('4%'),
    marginLeft:20,
    marginTop:hp('5%'),
    color:'#FF9052'
  },
  namaSurah:{
    fontFamily:'Montserrat-Bold',
    fontSize:hp('2%'),
    color:'#FF9052'
  },
  asal:{
    fontFamily:'Montserrat-Regular',
    fontSize:hp('1.5%'),
    marginTop:2,
    color:'#929292'
  }
})