import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AuthStackScreenProps } from "../../navigators"
import { Screen } from "../../components"
import { SlideShowCard } from "./SlideShowCard"
import InfinitePager from "react-native-infinite-pager"

const content = [
  {
    title: "preLoginScreen.connect.title",
    description: "preLoginScreen.connect.description",
    image: require("../../../assets/images/slide_0.png"),
  },
  {
    title: "preLoginScreen.play.title",
    description: "preLoginScreen.play.description",
    image: require("../../../assets/images/slide_1.png"),
  },
  {
    title: "preLoginScreen.enjoy.title",
    description: "preLoginScreen.enjoy.description",
    image: require("../../../assets/images/slide_2.png"),
  },
]

export const PreLoginScreen: FC<AuthStackScreenProps<"PreLogin">> = observer(
  function PreLoginScreen({ navigation }) {

    const [index, setIndex] = useState(0)

    const handleOnContinue = () => {
      navigation.navigate("EnterEmail")
    }

    const handleOnGoogle = () => {
      console.tron.log("onGoogle")
    }

    const handleOnApple = () => {
      console.tron.log("onApple")
    }

    const Page = () => {
      return (
        <SlideShowCard
          imageUri={content[index].image}
          titleTx={content[index].title}
          descriptionTx={content[index].description}
          onContinue={handleOnContinue}
          onGoogle={handleOnGoogle}
          onApple={handleOnApple}
        />
      )
    }

    return (
      <Screen style={$root} safeAreaEdges={["bottom"]}>
        <InfinitePager
          minIndex={0}
          maxIndex={content.length - 1}
          renderPage={Page}
          onPageChange={(e) => setIndex(e)}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
