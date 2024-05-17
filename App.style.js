import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 20,
    //fontFamily: "arial, verdana, sans-serif",
    color: '#333',
    backgroundColor: '#f1953c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navcontainer:{
    padding: 10,
    flex:1,
    //fontFamily: "arial, verdana, sans-serif",
    color: '#333',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  mistery:{
   fontSize: 46,
   color: '#f1953c',
  },

  box:
  {
    fontSize:36,
    color: '#f1953c',
  },

  title_container:{
    display: 'flex',
    flexDirection:'column',
    flexWrap: 'wrap',
    lineHeight: '0',
  },

  container3:
  {
    backgroundColor:'#ffffff',
    textAlign: 'justify',
  },

  container2:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },

  productcontainer:{
    flex:1,
    backgroundColor: '#ffffff',
    padding:5
  },

  btnMarker:{
    position:'absolute',
    flexDirection:'row',
    alignSelf:'center',
    bottom:'22%',
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    padding:5
  },
  wrap:{
   alignSelf: 'center',
   width:340,
   height:HEIGHT*0.25, 
   borderRadius: 10,
   
  },
  wrapDots:{
    position: 'absolute',
    bottom:0,
    flexDirection:"row",
    alignSelf:"center",
  },
  dotActive:{
    margin:3,
    color: 'black',
  },
  dot:{
    margin:3,
    color:'white',
  },
  titleText: {
    fontSize: 26,
    paddingBottom: 15,
    color:'#35424a',
    paddingRight:140,
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    width: "90%",
    backgroundColor: '#ffffff',

    margin: 5,
    padding: 5
  },
  carousel: {
    flex: 1,
  },
  form_input: { 
    marginLeft: 23,
    width: "100%",
  },
  buttonInput: {
    height: 40,
    borderColor: '#53e670',
    borderWidth: 1,
    borderRadius: 50,
    width: "90%",
    backgroundColor: '#53e670',
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    
  },
  btnEye:{
    position: 'absolute',
    right:40,
    bottom:8,
  },
  btnEye2:{
    position: 'absolute',
    right:40,
    bottom:60,
  },
  link: {
    height: 40,
    width: "90%",
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  element: {
    backgroundColor: '#ccc',
  },
  stackNavigator: {
    backgroundColor: '#ffffff',
    color: '#ccc'
  },
  navigation: {
    backgroundColor: '#ffffff',
    color: '#000',
    borderColor: '#ffffff',
    borderBottomColor: '#53e670',
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 20,
    width: '90%',
    padding: 5,
    justifyContent: "center",
    height: 50,
    
  },

  navigationtext: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
