
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Home from '../screens/Home';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
function BottomTabNavigator(){
return   <Tab.Navigator>
<Tab.Screen 
name="Home"
 component={Home} 
options={{
    headerShown:false,
    tabBarIcon:({color,size})=><Entypo name="home" size={24} color={color} />
}}
/>
<Tab.Screen 
name="MySpace" 
component={Home}
 options={{
    headerShown:false,
    tabBarIcon:({color,size})=><MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
}}
 />
<Tab.Screen 
name="MyTeam" 
component={Home} 
options={{
    headerShown:false,
    tabBarIcon:({color,size})=><AntDesign name="team" size={24} color="black" />
}} />
<Tab.Screen name="Settings" component={Home} 
options={{
    headerShown:false,
    tabBarIcon:({color,size})=><AntDesign name="setting" size={24} color="black" />
}} />
</Tab.Navigator>
}


function Navigation(){
return <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name="Navigation" component={BottomTabNavigator} />
</Stack.Navigator>


}

export default Navigation