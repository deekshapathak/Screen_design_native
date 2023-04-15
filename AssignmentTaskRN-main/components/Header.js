import { HStack,Text, View,Box } from "native-base"
import { AntDesign,Ionicons } from '@expo/vector-icons';
function Header(){
return <Box bgColor={'gray.200'} padding={2}>
<View justifyContent={'space-between'} alignItems={'center'} flexDir={'row'}>
    <HStack justifyContent={'space-between'} alignItems={'center'}>
<AntDesign name="arrowleft" size={24} color="black" />
<Text fontSize={24} color={'orange.500'}>My Space</Text>
</HStack>
  <HStack justifyContent={'space-between'} alignItems={'center'} marginX={5}>
      
        <AntDesign name="search1" size={24} color="black"  />
        <Ionicons name="notifications" size={24} color="black" />
      
    </HStack>
</View>
</Box>

}

export default Header