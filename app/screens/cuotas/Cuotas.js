import React from "react";
import { ScrollView, Text } from "react-native";
import MonthPicker from "react-native-month-picker";
import moment from "moment";
import BotonesCuotas from "../../components/cuotasjugadores/BotonesCuotas";

export default function Cuotas() {
  return (
    <ScrollView>
      <BotonesCuotas />
    </ScrollView>
  );
}
