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
  function PreLoginScreen() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const Page = ({ index }: { index: number }) => {
      return (
        <SlideShowCard
          imageUri={content[currentIndex].image}
          titleTx={content[currentIndex].title}
          descriptionTx={content[currentIndex].description}
        />
      )
    }

    return (
      <Screen style={$root} safeAreaEdges={["bottom"]}>
        <InfinitePager
          minIndex={0}
          maxIndex={content.length -1}
          renderPage={Page}
          onPageChange={(e) => setCurrentIndex(e)}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
