import React from 'react'
import {StyleSheet,Text,SafeAreaView,View,StatusBar,Platform,Image,Scrollview,TouchableOpacity} from  'react-native';
import {camera} from 'expo-camera';
import * as permission from "expo-permission"
import * as FaceDetector from 'expo-face-detector'
import { statusBar } from "expo-status-bar"

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            hasCameraPermission:null,
            faces:[]
        }
        this.onFacesDetected=this.onFacesDetected.bind(this)
    }
   async componentDidMount(){
        const{status}=awaitCamera.requestPermissionsasync();
        this.setState({hasCameraPermissions:status==="granted"});
    }
    onFacesDetected({faces}) {
        this.setState({ faces:faces});
    }
    render(){
        const{ hasCameraPermission}=this.state;
        if(hasCameraPermission===null){
            return( <View/>)
        }
        if(hasCameraPermission===false){
            return(
                <View style={StyleSheet.container}>  
                <Text>No Access To Camera</Text>
                </View>

            )
        }
        return(
            <View style={StyleSheet.container}>
            <SafeAreaView style ={StyleSheet.droidSafeArea}/>
            <View style={style.headingContainer}>
           <Text style={style.titletext}>Look me .....</Text>
            </View>
           <View style={style.cameraStyle}>
               <Camera
                style={{flex:1}}
                type={Camera.Constants.Type.front}
                faceDetectorSettings={{
                    mode:FaceDetector.Constants.Mode.fast,
                    detectLandmarks:FaceDetector.constants.Landmarks.all,
                    runClassifications:FaceDetector.constance.Classifications.all
                }}
                onFacesDetected={this.onFacesDetected}
                onFacesDetectionError={this.onFacesDetectionError}/>
               
           </View>
           <View style={styles.filterContainer}> 

           </View >
           <View style={styles.actionContainer}> 
           </View>
            </View>
        )
    }
}