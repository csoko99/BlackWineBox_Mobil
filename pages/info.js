import React from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import styles from '../App.style.js';

export const InfoPage  = (  ) => {
    return(
    <ScrollView style={styles.container3}>
        <View style={styles.title_container}>
        <Image source={require('../kepek/MisteryBox.png')} style={{width:'100%', height:150}}></Image>
        </View>
        <View >
            <Text></Text>
            <Text style={{textAlign:'justify', marginLeft:20, marginRight:20}}>Csábítóan izgalmas utazásra invitáljuk Önt a tokaji borok varázslatos birodalmába minden hónapban újra és újra. Csak képzelje el: minden hónap elején egy különleges csomag érkezik az Ön otthonába, tele autentikus tokaji borokkal, melyeket gondosan válogatunk ki Önnek.
            </Text>
            <Text></Text>
            <Image source={require('../kepek/info1.jpg')} style={{marginLeft:20, marginRight:20, width:'90%', borderRadius:20}}></Image>
            <Text></Text>
            <Text style={{textAlign:'justify', marginLeft:20, marginRight:20}}>Nincs is jobb módja annak, hogy felfedezze a Tokaj-hegyaljai borok gazdag világát, mint a Mystery Box előfizetéssel. Minden csomag egy igazi kincsesláda, mely 4 exkluzív tokaji borral, melléjük pedig receptekkel és történetekkel érkezik, hogy teljes mértékben belemerülhessen a borok kulturális és gasztronómiai örökségébe.
            </Text>
            <Text></Text>
            <Image source={require('../kepek/info2.jpg')} style={{marginLeft:20, marginRight:20, width:'90%', borderRadius:20}}></Image>
            <Text></Text>
            <Text style={{textAlign:'justify', marginLeft:20, marginRight:20, backgroundColor:'#f1953c', padding:10, borderRadius:20}}>Amennyiben megkedvelt egy különleges, általunk ajánlott bort, webshopunkban máskor is megrendelheti azt. Válogasson  szakértőink által ajánlott boraink között...
            </Text>
            <Text></Text>
            
        </View>
    </ScrollView>
    ) 
}