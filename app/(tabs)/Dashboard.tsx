import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Plus, Search, ChevronsRight } from "lucide-react-native";
import { MessagesBox } from "@/components/RiworaComponents/MessagesBox";
import Cards from "@/components/RiworaComponents/Cards";
import DealsBox from "@/components/RiworaComponents/DealsBox";
import OpenDeals from "./OpenLeads";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { SectionHeader } from "@/components/RiworaComponents/SectionHeader";
import { TaskBox } from "@/components/RiworaComponents/TaskBox";
import { RootStackParamList } from "../Appnavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Dashboard = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  type TasksNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "ClosedLeads"
  >;

  interface TasksProps {
    navigation: TasksNavigationProp;
  }

  interface Task {
    title: string;
    status: "inProgress" | "notStarted" | "done";
    priority: "high" | "medium" | "low";
    date: string;
  }

  const tasks: Task[] = [
    {
      title: "Contact Leads",
      status: "inProgress",
      priority: "high",
      date: "Jul 25",
    },
    {
      title: "Review Customer Profiles",
      status: "notStarted",
      priority: "medium",
      date: "Apr 15",
    },
    {
      title: "Send Thank-You Notes",
      status: "inProgress",
      priority: "low",
      date: "Apr 15",
    },
    {
      title: "Schedule Follow-Up Call",
      status: "notStarted",
      priority: "high",
      date: "Apr 15",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.searchContainer}>
            <View style={styles.inputWrapper}>
              <Search size={20} color="#727272" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#666"
              />
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={20} color="#727272" />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Lead Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            <Cards
              label="new customers"
              number="25 New customers"
              description="you have 25 new customers this week"
            />
            <Cards
              label="Active Listings"
              number="45 Active"
              description="You currently have 45 properties listed for rent."
            />
            <Cards
              label="Active Listings"
              number="45 Active"
              description="You currently have 45 properties listed for rent."
            />
          </ScrollView>

          <SectionHeader title="Messages" />

          <View style={styles.messagesRow}>
            <MessagesBox title="Draft" badgeCount={10} />
            <MessagesBox title="Inactive Leads" badgeCount={20} />
            <MessagesBox title="Maintenance" badgeCount={30} />
            <MessagesBox title="New Inquiries" badgeCount={40} />
          </View>

          <SectionHeader title="Sales Overview" />

          <View style={styles.salesCard}>
            <Text style={styles.salesAmount}>$30,000</Text>
            <Text style={styles.salesPeriod}>past 30 days</Text>
          </View>

          <SectionHeader title="Deals" />

          <View style={styles.dealsView}>
            <DealsBox
              title="Opened Leads"
              count={45}
              onpress={() => navigation.navigate("OpenLeads")}
            />
            <DealsBox
              title="Closed Leads"
              count={20}
              onpress={() => navigation.navigate("ClosedDeals")}
            />
          </View>
          <SectionHeader title="Tasks" />

          <View style={styles.tasksContainer}>
            {tasks.map((task, index) => (
              <TaskBox
                key={index}
                title={task.title}
                status={task.status}
                priority={task.priority}
                date={task.date}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#FDFCFC",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(229, 229, 229, 0.8)",
    backdropFilter: "blur(20px)",
  },
  logo: {
    width: 110,
    height: 30,
    resizeMode: "contain",
  },
  searchContainer: {
    marginHorizontal: 0,
    marginVertical: 18,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 24,
    marginBottom: 20,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 16,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    height: 42,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 8,
  },
  addButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: "#DADADA",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 20,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 15,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: "#fff5f5",
    padding: 20,
    borderRadius: 12,
    width: 250,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  messageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  messageBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 4,
    // width: "48%",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E8E7E9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  badge: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#C1C1C1",
    borderRadius: 4,
    width: 20,
    height: 20,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  salesCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#eee",
  },
  salesAmount: {
    fontSize: 28,
    fontWeight: "600",
  },
  salesPeriod: {
    color: "#666",
    marginTop: 5,
  },
  messagesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  dealsView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  tasksContainer: {
    marginTop: 10,
  },
});

export default Dashboard;
