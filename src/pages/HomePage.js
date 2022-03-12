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
      setLoading(false);
      });
     
  }
  useEffect(() => {
    fetchData();    
  },[data])
  
  return (
    <View style={{flex:1,backgroundColor:'white'}}> 
      <View style={{height:hp('15%') }}>
        <Text style={styles.hai}>Hai, udah ngaji hari ini?</Text>
      </View>
      <View style={{height:hp('70%') , backgroundColor:'white'}}>

        {/* Daftar Surah */}
        <View>
          <View style={{flexDirection:'row',backgroundColor:'#FF9052' ,  height:hp('5%') , marginLeft:20,marginRight:20,borderTopLeftRadius:10,borderTopRightRadius:10}} >
            <View style={{flex:2.5}}><Text style={styles.textTitle}>Daftar Surah</Text></View>
          
          </View>
          <View style={{backgroundColor:'#FBEDED' ,marginLeft:20,marginRight:20}}> 
            {  isLoading ? (<Text style={{marginTop:hp('5%'),marginLeft:20,marginRight:20,marginBottom:50}}>Mohon Tunggu</Text>) : <FlatList 
              data={data}
              showsVerticalScrollIndicator={false}
              keyExtractor = {({number},index) => number }
              renderItem = {({item}) => (
              <>
                <TouchableOpacity  style={{marginHorizontal:20,marginVertical:20}} onPress={()=>{navigation.navigate('SurahPage',{
                  id:item.number
                })}}>
                  <View style={{flexDirection:'row'}}> 
                    <View style={{backgroundColor:'#FF9052',height:30,width:30,borderRadius:30/2,alignItems:'center',justifyContent:'center'}}> 
                      <Text style={{textAlign:'center',color:'white',padding:4,fontFamily:'Montserrat-SemiBold'}}>{item.number}</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text style={{marginLeft:20,textAlign:'left',fontSize:16,alignSelf:'flex-start',fontFamily:'Montserrat-SemiBold'}}>{item.name.transliteration.id}</Text>
                      <Text style={{marginLeft:20,textAlign:'left',fontSize:12,alignSelf:'flex-start',fontFamily:'Montserrat-SemiBold',color:'grey'}}>{item.revelation.id}</Text>
                    </View>
                    <View>
                      <Text style={{ fontFamily:'sans-serif',fontSize:24,textAlign:'right',alignSelf:'flex-end'}}>{item.name.short}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={{borderBottomWidth:1,marginHorizontal:10,marginBottom:5,borderBottomColor:'#d6d5d2'}}></View>
                </>             

              ) }
            />
            
            
            
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