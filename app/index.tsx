import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, Animated, Easing, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const backgroundImage = require("../assets/images/background.jpg");
const logoImage = require("../assets/images/fursa-logo.png");

export default function App() {
  const router = useRouter();

  // Animation references
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;

  // State to control the visibility of the introduction
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  // Function to hide the intro and show the main content
  const handleContinue = () => setShowIntro(false);

  return (
    <ImageBackground source={backgroundImage} style={styles.container} resizeMode="cover">
      <View style={styles.overlay}>
        {showIntro ? (
          // Intro section
          <View style={styles.introContainer}>
            <Animated.Image source={logoImage} style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} />
            <ScrollView style={styles.introTextContainer}>
              <Text style={styles.introHeading}>Welcome to Fursa</Text>
              <Text style={styles.introText}>
                Fursa is a platform dedicated to helping individuals discover new opportunities. Whether you're looking for
                jobs, internships, or skill development, Fursa is here to guide you. We connect you with resources and opportunities to enhance your career path.
              </Text>
              <Text style={styles.introText}>
                Explore the various possibilities, connect with potential employers, and take the first step towards a brighter future with Fursa. Let's get started!
              </Text>
            </ScrollView>
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Main section after intro
          <>
            <Animated.Image source={logoImage} style={[styles.logo, { transform: [{ scale: scaleAnim }] }]} />
            <Animated.Text style={[styles.mainText, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
              Karibu Fursa
            </Animated.Text>
            <Animated.Text style={[styles.subText, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
              Find your next opportunity!
            </Animated.Text>
            <View style={styles.buttons}>
              <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.push("/auth/register")}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                >
                  <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  mainText: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 50,
  },
  buttons: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  introContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  introTextContainer: {
    maxHeight: "50%",
    marginVertical: 20,
  },
  introHeading: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  introText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
});


