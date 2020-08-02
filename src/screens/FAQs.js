import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView,
  ScrollView, TouchableOpacity, UIManager,
  LayoutAnimation, Platform,
} from 'react-native'

import Text from '../components/Text'
import Header from '../components/Header'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQ = () => {
  const [opened, setOpened] = useState(false)

  return (
    <View style={styles.faq}>
      <TouchableOpacity
        style={styles.faqTitle}
        activeOpacity={1}
        onPress={() => {
          LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.easeInEaseOut, duration: 300 })
          setOpened(!opened)
        }}
      >
        <Text style={styles.faqTitleText}>FAQ Title</Text>
      </TouchableOpacity>
      {opened && (
        <View style={styles.faqContent}>
          <Text style={styles.faqContentText}>
            FAQ content
          </Text>
        </View>
      )}
    </View>
  )
}

const n = 8

const FAQs = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          navigation={navigation}
          title="FAQs"
          hasSearch
        />
        <ScrollView style={styles.content}>
          {[...Array(n)].map((e, i) => (
            <FAQ key={i} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  faq: {
    // overflow: 'hidden',
    shadowColor: '#00000082',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    // borderColor: '#ddd',
    // borderWidth: 1,
    marginBottom: 15,
  },
  faqTitle: {
    padding: 15,
  },
  faqTitleText: {
    fontSize: 16,
  },
  faqContent: {
    padding: 15,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  faqContentText: {
    fontSize: 14,
    color: '#333',
  },

})

export default FAQs
