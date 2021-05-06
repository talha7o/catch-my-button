import { Button } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

export default function App() {
  const windoWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [top, setTop]: any = useState(0);
  const [left, setLeft]: any = useState(0);
  const [score, setScore]: any = useState(0);

 let timer:any;
  useEffect(() => {

       timer = setInterval(() => {
        setTop(Math.floor(Math.random() * windowHeight));
        setLeft(Math.floor(Math.random() * windoWidth));
        setScore(score - 1);
      }, 3000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (score == 5) {
      alert("You Win!");
      clearInterval(timer);
    } else if (score == -5) {
      alert("You Lose!");
      clearInterval(timer);
    }
  }, [score]);

  return (
    <View style={styles.container}>
      {score >4 && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />}
      <Text>Score : {score}</Text>
      <Button
        style={{
          position: "absolute",
          top: top,
          left: left,
          padding: 10,
        }}
        onPress={() => setScore(score + 1)}
      >
        <Text>Catch me</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
