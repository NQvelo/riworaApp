import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ChevronLeft, EllipsisVertical } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Appnavigator";

type OpenLeadsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OpenLeads"
>;

interface OpenLeadsProps {
  navigation: OpenLeadsNavigationProp;
}

interface Lead {
  title: string;
  description: string;
}

const OpenLeads = ({ navigation }: OpenLeadsProps) => {
  const leads: Lead[] = [
    {
      title: "Interested Buyer - Ready For Tours",
      description:
        "John Doe is interested in properties in the $500K-$700K range in downtown. He has requested to schedule a tour for two properties.",
    },
    {
      title: "Interested Buyer - Ready For Tours",
      description:
        "John Doe is interested in properties in the $500K-$700K range in downtown. He has requested to schedule a tour for two properties.",
    },
    {
      title: "Interested Buyer - Ready For Tours",
      description:
        "John Doe is interested in properties in the $500K-$700K range in downtown. He has requested to schedule a tour for two properties.",
    },
    {
      title: "New Inquiry - Family Relocation",
      description:
        "Sarah and Mike Smith are moving from another state and need a 4-bedroom home with a large backyard in suburban areas.",
    },
    {
      title: "Hot Lead - Cash Buyer",
      description:
        "Jane Wilson has expressed interest in a property listed at $1.2M and mentioned being a cash buyer. She's eager to close within 30 days.",
    },
    {
      title: "First-Time Homebuyer - Needs Guidance",
      description:
        "Tom Patel is exploring options for his first home purchase and needs assistance understanding the process and financing options.",
    },
    {
      title: "Follow-Up Required - Vacation Home",
      description: "Score up to 45% off popular picks for a bargain!",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backbuttonView}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goback}
          >
            <ChevronLeft size={20} color="#727272" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Opened Leads</Text>
        <Text style={styles.foundText}>{leads.length} found</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {leads.map((lead, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate("LeadPage", { lead })}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{lead.title}</Text>
              <Text style={styles.cardDescription}>{lead.description}</Text>
            </View>
            <TouchableOpacity style={styles.EllipsisVertical}>
              <EllipsisVertical size={20} color="#727272" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginTop: 30,

    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    backdropFilter: "blur(20px)",
  },
  backbuttonView: {
    width: 70,
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
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    // marginRight: -10,
  },
  foundText: {
    color: "gray",
    fontSize: 14,
    width: 70,
    textAlign: "center",
    // backgroundColor: "red",
  },
  scrollView: {
    paddingTop: 24,
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 4,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#E8E7E9",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    // elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "gray",
    lineHeight: 20,
  },
  moreButton: {
    borderWidth: 1,
    padding: 4,
  },
  EllipsisVertical: {},
});

export default OpenLeads;
