import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

interface Props {
  title: string;
  right?: boolean;
  onPress: () => void;
}

export const Fab = ({title, onPress, right = false}: Props) => {

     const ios = () => {

          return (
               <TouchableOpacity 
               activeOpacity={ 0.7 }
               style={right ? styles.fabLocationBR : styles.fabLocationBL}
               onPress={onPress}
              >
                  <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                  </View>
              </TouchableOpacity>
          )
     }

     const android = () => {
          return (
               <View 
               style={right ? styles.fabLocationBR : styles.fabLocationBL}
              >
                <TouchableNativeFeedback
                  onPress={onPress}
                  background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                  <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
          )
     }


  return (Platform.OS === 'android') ? android() : ios()
};

const styles = StyleSheet.create({
  fabLocationBR: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 50,
    left: 30,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
