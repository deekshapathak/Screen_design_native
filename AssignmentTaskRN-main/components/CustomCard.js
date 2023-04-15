import { Card, Heading, HStack, Image } from "native-base"

import { AntDesign,Ionicons } from '@expo/vector-icons';

const CustomCard = ({text,icon,img}) =>{
    return <Card borderRadius={10}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Heading>{text}</Heading>
            <AntDesign name={icon} size={24} color="black" />
    </HStack>
    <Image
        source={{uri:img}}
        style={{width:'100%',height:150}}
        alt="TextImg"
    />
    </Card>
}

export default CustomCard