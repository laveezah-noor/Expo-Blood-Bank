import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import {Card, CardItem, Thumbnail} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CustomCard({icon, text, badge}) {
    console.log(icon, badge, text)
    return (
      <Card style={styles.container}>
        <CardItem style={styles.icon}>
        <FontAwesome5 size={16} name={icon} />
        </CardItem>
        <CardItem style={styles.cardContent}>
        <Text style={styles.cardText}>{text}</Text>
        <Text style={styles.cardBadge}>{badge}</Text>
        </CardItem>
      </Card>
    );
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: 138,
      paddingVertical: 10,
      borderRadius: 15,
      marginRight: 10,
    },
    icon:{
      backgroundColor: "pink",
      borderRadius: 25,
      justifyContent: "center",
      height: 50,
      width: 50,
      textAlign: "center",
    },
    cardContent: {
      flexDirection: "column",
      justifyContent: "center"
    },
    cardText:{
      fontWeight: "900",
      fontSize: 15,
      textAlign: "center",

    },
    cardBadge:{
      backgroundColor: "#48ba95",
      borderRadius: 50,
      textAlign: "center",
      height: 20,
      paddingHorizontal: 5,
      fontSize: 13,
      marginTop: 5,
    }
  });
