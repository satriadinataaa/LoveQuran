import { StyleSheet, Text, View ,ScrollView, TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SoundPlayer from 'react-native-sound-player';

const SurahPage = ({route,navigation}) => {
  const {id,otherParam} = route.params;
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [translate, setTranslate] = useState(false);
  const [paused, setPaused] = useState(true);
  async function fetchData() {
   
    await fetch('https://quran-endpoint.vercel.app/quran/'+id) .then(response => response.json())
      .then(json => {
        setData(json.data);
        SoundPlayer.loadUrl(json.data.recitation.full)
        setLoading(false)
      });
     
  }
  useEffect(() => {
    fetchData();
  },[id])
  return (
    <>
      {isLoading ? (<View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}><Text>Mohon Tunggu</Text></View>) : (<View style={{flex:1,backgroundColor:'white'}}>

        
          <Text style={styles.namaSurah}>Surah {data.asma.id.short}</Text>
          <Text style={styles.jenisSurah}>{data.type.id}</Text>
          <Text style={styles.jumlahAyat}>{data.ayahCount} Ayat</Text>
          {isLoading ? (<View></View>) : paused ?  (<TouchableOpacity style={{marginBottom:10}} onPress={()=>{
              SoundPlayer.play();
              setPaused(false)
          }}><View style={{backgroundColor:'#FF9052',width:wp('70'), height:hp('5'), borderRadius: hp('5')/2,alignItems:'center',justifyContent:'center',marginLeft:20,marginRight:20 }}>
              <Text style={{color:'white',fontFamily:'Montserrat-SemiBold'}}>Mainkan Audio</Text>
            </View></TouchableOpacity>) : (<TouchableOpacity style={{marginBottom:10}} onPress={()=>{
              SoundPlayer.pause();
              setPaused(true)
          }}><View style={{backgroundColor:'#FF9052',width:wp('70'), height:hp('5'), borderRadius: hp('5')/2,alignItems:'center',justifyContent:'center',marginLeft:20,marginRight:20 }}>
          <Text style={{color:'white',fontFamily:'Montserrat-SemiBold'}}>Pause Audio</Text>
        </View></TouchableOpacity>)}
          <ScrollView>
          {data.ayahs.map((item,index) => (
            <View key={index} style={{flexDirection:'column',marginTop:hp('2%') , backgroundColor:'#FBEDED',borderBottomLeftRadius:30,borderTopRightRadius:30,marginLeft:wp('2'),marginRight:wp('2')} }>     
              <View style={{flex:1,alignItems:'flex-end'}}>
              <Text style={styles.ayat}>{item.text.ar}</Text>        
              </View>
              <View style={styles.arti}>
               <Text style={styles.arti}>{index+1}. {item.translation.id}</Text>
              </View>
            </View>

          ))}
          </ScrollView>
         
       
      </View>) }
      
    </>
  )
}

export default SurahPage

const styles = StyleSheet.create({
  namaSurah:{
    fontFamily:'Montserrat-Bold',
    fontSize:hp('4%'),
    marginLeft:20,
    marginTop:hp('5%'),
    color:'#FF9052'
  },
  jenisSurah:{
    fontFamily:'Montserrat-Regular',
    fontSize:hp('2%'),
    marginLeft:20,
    marginTop:hp('0.5%'),
    color:'#929292'
  },
  jumlahAyat:{
    fontFamily:'Montserrat-Bold',
    fontSize:hp('4%'),
    marginLeft:20,
    marginTop:hp('0.5%'),
    color:'#FF9052',
    paddingBottom:hp('2%')
  },
  nomorAyat:{
    fontFamily:'Montserrat-Bold',
    fontSize:hp('2%'),
    marginLeft:20,
    marginTop:hp('1%'),
    color:'#929292'
  },
  ayat:{
    fontFamily:'sans-serif',
    fontSize:hp('5%'),
    marginLeft:20,
    lineHeight:hp('7%'),
    marginTop:hp('1%'),
    color:'#929292',
    textAlign:'right',
    padding:hp('3%')
  },
  arti:{
    marginLeft:10,
    marginBottom:10,
    marginRight:10,
    fontFamily:'Montserrat-Regular',
    lineHeight:hp('2.5%'),
  },
  
})