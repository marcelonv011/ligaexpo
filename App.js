import { StyleSheet, Text, View } from 'react-native';
import LoginStack from './app/navigation/LoginStack';
import {decode, encode} from 'base-64';
import Navigation from './app/navigation/Navigation';
import { firebaseApp } from "./app/utils/Firebase";

export default function App() {
  if (!global.btoa) {
    global.btoa = encode;
  }
  if (!global.atob) {
    global.atob = decode;
  }
  return <LoginStack/>
}