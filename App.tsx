import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,

} from 'react-native'
import FlatCard from "./components/FlatCard.tsx";
import EleavatedCard from "./components/EleavatedCard.tsx";
import FancyCard from "./components/FancyCard.tsx";
import ActionCard from "./components/ActionCard.tsx";
import ContectList from "./components/ContectList.tsx";

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <EleavatedCard />
        <FancyCard />
        <ActionCard />
        <ContectList />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
  }
})
export default App;