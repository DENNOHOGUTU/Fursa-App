import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout() {
  return (
    <ThemeProvider>
      <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="cog" size={24} color={color} />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="job-feed"
          options={{
            title: "Jobs",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="briefcase" size={24} color={color} />
            ),
          }}
        /> */}
        {/* <Tabs.Screen
          name="application-tracker"
          options={{
            title: "Tracker",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="list" size={24} color={color} />
            ),
          }}
        /> */}
      
        <Tabs.Screen
          name="opportunity-wheel"
          options={{
            title: "Opportunity Wheel",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="circle-o-notch" size={24} color={color} />
            ),
          }}
        />

       <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      
       
      </Tabs>
    </ThemeProvider>
  );
}
