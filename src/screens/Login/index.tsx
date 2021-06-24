import React, { useState } from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import Illustration from "../../assets/illustration.png";
import { ButtomSimple } from "../../components/ButtomSimple";

export default function Login() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={Illustration} resizeMode="stretch" style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}suas jogatinas {'\n'}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtomSimple title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
