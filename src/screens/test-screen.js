import React, {Component} from 'react';
import {AppRegistry, Text, ScrollView, SafeAreaView} from 'react-native';
import Ripple from '../components/ripples';

let styles = {
  scroll: {
    padding: 4,
  },

  container: {
    padding: 5,
    backgroundColor: '#F5F5F5',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    minHeight: 36,
    margin: 4,
    borderRadius: 2,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  safeContainer: {
    flex: 1,
    backgroundColor: '#F0F0F4',
  },

  a: {
    backgroundColor: '#E64A19',
  },

  b: {
    backgroundColor: '#EF6C00',
  },

  c: {
    backgroundColor: '#673AB7',
  },

  d: {
    backgroundColor: '#388E3C',
  },

  e: {
    backgroundColor: '#0288D1',
  },

  f: {
    backgroundColor: '#263238',
  },

  g: {
    backgroundColor: '#5D4037',
  },

  z: {
    elevation: 0,
    shadowOpacity: 0,
  },

  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(255,255,255,.87)',
  },

  footnote: {
    fontSize: 15,
    fontWeight: '400',
    color: 'rgba(0,0,0,.54)',
  },
};

/* XXX: Ripple border radius should match container border radius */
Ripple.defaultProps.rippleContainerBorderRadius = styles.container.borderRadius;

class TestScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={styles.scroll}>
          <Ripple style={[styles.container, styles.a]}>
            <Text style={styles.text}>default</Text>
          </Ripple>

          <Ripple
            style={[styles.container, styles.b]}
            rippleSize={176}
            rippleDuration={600}>
            <Text style={styles.text}>
              rippleSize=176{'\n'}rippleDuration=600
            </Text>
          </Ripple>

          <Ripple
            style={[styles.container, styles.c]}
            rippleSize={244}
            rippleDuration={800}>
            <Text style={styles.text}>
              rippleSize=244{'\n'}rippleDuration=800
            </Text>
          </Ripple>

          <Ripple
            style={[styles.container, styles.d]}
            rippleColor="white"
            rippleOpacity={0.54}>
            <Text style={styles.text}>
              rippleColor=#FFFFFF{'\n'}rippleOpacity=0.54
            </Text>
          </Ripple>

          <Ripple
            style={[styles.container, styles.e]}
            rippleCentered
            rippleColor="white">
            <Text style={styles.text}>
              rippleColor=#FFFFFF{'\n'}rippleCentered=true
            </Text>
          </Ripple>

          <Ripple
            style={[styles.container, styles.f]}
            rippleColor="#444444"
            rippleOpacity={0.87}
            rippleDuration={700}>
            <Text style={styles.text}>
              rippleColor=#D500F9{'\n'}rippleOpacity=0.87{'\n'}
              rippleDuration=1200
            </Text>
          </Ripple>

          <Ripple
            style={[styles.container, styles.g]}
            rippleColor="#76FF03"
            rippleOpacity={0.87}
            rippleDuration={2400}>
            <Text style={styles.text}>
              rippleColor=#76FF03{'\n'}rippleOpacity=0.87{'\n'}
              rippleDuration=2400
            </Text>
          </Ripple>

          <Ripple disabled style={[styles.container, styles.z]}>
            <Text style={styles.footnote}>
              Tap on any card to see surface reaction
            </Text>
          </Ripple>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default TestScreen;
