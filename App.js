import  React,{useEffect, useState} from 'react';

import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { NavigationContainer, DefaultTheme, useFocusEffect   } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons,  AntDesign} from '@expo/vector-icons';

//import { defined } from 'react-native-reanimated';



function HomeScreen({route,navigation}) {



  const [name, setName] = useState("");

  const [definedName, setDefinedName] = useState(false);



  if(!definedName){

    return (

      <View style={{ backgroundColor:'rgb(30,30,30)',flex: 1,justifyContent:'center',alignItems:'center' }}>

        <Text style={{color:'white',fontSize:16}}>Seja Bem-vindo Ao Chat, Por Favor Escolha um Nome:</Text>

        <TextInput onChangeText={(text)=>setName(text)} style={{margin:10,width:'90%',height:40,backgroundColor:'white',paddingLeft:10}}></TextInput>

        <TouchableOpacity onPress={()=>setDefinedName(true)}>

            <View style={{backgroundColor:'#069',padding:10,width:'90%'}}><Text style={{color:'white',textAlign:'center'}}>Trocar meu Nome!</Text></View>

        </TouchableOpacity>

      </View>

    );

  }else{

    return (

      <View style={{backgroundColor:'rgb(30,30,30)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{color:'white'}}>Seja Bem-vindo ao Chat {name}</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('Chat',{userName:name})}>

            <View style={{backgroundColor:'#069',padding:10,width:'90%'}}><Text style={{color:'white',textAlign:'center'}}>Ir ao Chat!</Text></View>

        </TouchableOpacity>

      </View>

    );

  }

}



function ChatScreen({route,navigation}) {

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Você está no chat {route.params.userName}</Text>

    </View>

  );

}



const HomeStack = createStackNavigator();





function HomeStackScreen(){

    return(

      <HomeStack.Navigator>

          <HomeStack.Screen name="Home" component={HomeScreen} />

      </HomeStack.Navigator>

    )

}





const ChatStack = createStackNavigator();





function ChatStackScreen(){

    return(

      <ChatStack.Navigator>

          <HomeStack.Screen name="Chat" component={ChatScreen} />

      </ChatStack.Navigator>

    )

}



const Tab = createBottomTabNavigator();



const MyTheme = {

  ...DefaultTheme,

  colors: {

    ...DefaultTheme.colors,

    background: 'rgb(255,255,255)',

    card: 'rgb(40,40,40)',

    text: 'rgb(255,255,255)',

  },

};

export default function App() {



  useEffect(() => {

      console.disableYellowBox = true;

  }, [])



  return (

    <NavigationContainer theme={MyTheme}>

      <Tab.Navigator

       screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {

         let iconName;

         if (route.name === 'Salas') {

            iconName = focused

            ? 'ios-information-circle'

            : 'ios-information-circle-outline';

          } else if (route.name === 'Settings') {

            iconName = focused

            ? 'ios-list-box'

            : 'ios-list';

          }else if (route.name === 'Home') {

            iconName = focused

            ? 'ios-map'

            : 'ios-map';

          }

    

     return <Ionicons name={iconName} size={size} color={color}     />;

       },

    })}

tabBarOptions={{

    activeTintColor: 'rgb(52, 119, 235)',

    inactiveTintColor: 'white',

    }}  >

        <Tab.Screen name="Home" component={HomeStackScreen} />

        <Tab.Screen name="Salas" component={ChatStackScreen} />

        

      </Tab.Navigator>

    </NavigationContainer>

  );

}