import { Card, ScrollView, Stack, Text, VStack } from "native-base"
import CustomCard from "../components/CustomCard"
import Header from "../components/Header"
import ProfileCard from "../components/ProfileCard"

function Home(){
return <Card>
    <Header/>
    <ScrollView>
    <ProfileCard/>

   <VStack>
   <CustomCard img="https://www.ngosource.org/sites/default/files/ngosource-celebration.png" text="My Holiday" icon="arrowright"/>
   <CustomCard img="https://d57439wlqx3vo.cloudfront.net/iblock/f5d/f5dcf76697107ea302a1981718e33c95/1f68f84b53199df9cae4b253225eae63.png?1681305066325" text="My Task" icon="arrowright"/> 
   </VStack>
   </ScrollView>
</Card>
}

export default Home