import { StyleSheet, Text, View,Image, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import cityList from '../assets/cities'
let Number1 = Math.floor(Math.random() * 114) + 1;
let Number2 = Math.floor(Math.random() * 114) + 1;
let Number3 = Math.floor(Math.random() * 114) + 1;
const HomePage = ({navigation}) => {
  
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(cityList.kota);
  async function fetchData() {
    await fetch('https://api.quran.sutanlab.id/surah') .then(response => response.json())
      .then(json => {
      
      setData(json.data);
     
      });
     
  }
  useEffect(() => {
    fetchData();
    return()=> {
      setLoading(false)
    }
  },[])
  
  return (
    <View style={{flex:1,backgroundColor:'white'}}> 
      <View style={{height:hp('20%') }}>
        <Text style={styles.hai}>Hai, udah ngaji hari ini?</Text>
      </View>
      <View style={{height:hp('70%') , backgroundColor:'white'}}>

        {/* Daftar Surah */}
        <View>
          <View style={{flexDirection:'row',backgroundColor:'#FF9052' , width:wp('90%') , height:hp('5%') , borderTopRightRadius:50,borderBottomRightRadius:50}} >
            <View style={{flex:2.5}}><Text style={styles.textTitle}>Daftar Surah</Text></View>
            {  isLoading ? (<Text style={{marginTop:hp('5%'),marginLeft:20}}></Text>) :( 
            <View style={{flex:1,alignItem:'center',justifyContent:'center'}}><TouchableOpacity onPress={()=> navigation.navigate('SemuaSurah',{
              surah:data
            })}><Text style={{color:'white',textDecorationLine:'underline',fontFamily:'Montserrat-Regular'}}>Lihat Semua</Text></TouchableOpacity></View>)}
          </View>
          <View style={{backgroundColor:'#FBEDED' , width:wp('85%'), height:hp('20%'), borderBottomRightRadius:30}}> 
            {  isLoading ? (<Text style={{marginTop:hp('5%'),marginLeft:20}}>Mohon Tunggu</Text>) : <FlatList 
              data={data}
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor = {({number},index) => number }
              renderItem = {({item}) => (
                <TouchableOpacity onPress={()=>{navigation.navigate('SurahPage',{
                  id:item.number
                })}}>
                  <View style={{width:wp('25%') }}> 
                    <Image style={{height:hp('10%') , width:wp('20%'),alignSelf:'center',marginTop:hp('4'),marginBottom:hp('0.5%')}}source={require('../assets/quran.png')}/>
                    <Text style={{textAlign:'center'}}>{item.name.transliteration.id}</Text>
                  </View>
                </TouchableOpacity>
              ) }
            />
            
            
            
            }
          </View>
        </View>

        {/* Surah Random */}
        <View style={{marginTop:25}}>
          <View style={{flexDirection:'row',backgroundColor:'#FF9052' , width:wp('90%') , height:hp('5%') , borderTopRightRadius:50,borderBottomRightRadius:50}} >
            <View style={{flex:3}}><Text style={styles.textTitle}>Kamu mau mulai dari sini?</Text></View>
           
          </View>
          <View style={{backgroundColor:'#FBEDED' , width:wp('85%'), height:hp('20%'), borderBottomRightRadius:30}}> 
            {  isLoading ? (<Text style={{marginTop:hp('5%'),marginLeft:20}}>Mohon Tunggu</Text>) : (
              <View style={{flexDirection:'row'}}>
               <TouchableOpacity onPress={()=>{navigation.navigate('SurahPage',{
                id:data[Number1].number
              })}}>
                <View style={{width:wp('25%') }}> 
                  <Image style={{height:hp('10%') , width:wp('20%'),alignSelf:'center',marginTop:hp('4'),marginBottom:hp('0.5%')}}source={require('../assets/quran.png')}/>
                  <Text style={{textAlign:'center'}}>{data[Number1].name.transliteration.id}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('SurahPage',{
                id:data[Number2].number
              })}}>
                <View style={{width:wp('25%') }}> 
                  <Image style={{height:hp('10%') , width:wp('20%'),alignSelf:'center',marginTop:hp('4'),marginBottom:hp('0.5%')}}source={require('../assets/quran.png')}/>
                  <Text style={{textAlign:'center'}}>{data[Number2].name.transliteration.id}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('SurahPage',{
                id:data[Number3].number
              })}}>
                <View style={{width:wp('25%') }}> 
                  <Image style={{height:hp('10%') , width:wp('20%'),alignSelf:'center',marginTop:hp('4'),marginBottom:hp('0.5%')}}source={require('../assets/quran.png')}/>
                  <Text style={{textAlign:'center'}}>{data[Number3].name.transliteration.id}</Text>
                </View>
              </TouchableOpacity>
              </View>
            )
            }
          </View>
        </View>
       
      </View>
     
      
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  hai:{
    fontFamily:'Montserrat-Bold',
    fontSize:hp('4%'),
    marginLeft:20,
    marginTop:hp('5%'),
    color:'#FF9052'
  },
  textTitle:{
    fontFamily:'Montserrat-SemiBold',
    fontSize:hp('2.5%'),
    color:'white',
    marginLeft:20,
    marginTop:hp('1')
  }
})