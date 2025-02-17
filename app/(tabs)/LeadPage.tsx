import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft, EllipsisVertical } from "lucide-react-native";

const LeadPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backbuttonView}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goback}
          >
            <ChevronLeft size={20} color="#727272" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Lead</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Limited-Time Mega Lead!</Text>
          <Text style={styles.description}>
            Grab your favorite items at half price - this is an opportunity you
            can't afford to miss!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    height: 55,
  },

  backbuttonView: {
    width: 70,
    position: "absolute",
    marginLeft: 18,

    // backgroundColor: "blue",
  },
  goback: {
    // backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#DADADA",
    padding: 4,
    alignSelf: "flex-start",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    // marginLeft: 16,
    textAlign: "center",
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E7E9",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});

export default LeadPage;
