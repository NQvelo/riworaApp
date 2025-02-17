import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ChevronLeft } from "lucide-react-native";

const tasks = [
  {
    id: "1",
    name: "Contact Leads",
    status: "High",
    deadline: "Jul 25",
    priority: "Done",
    color: "#F8C5C5",
    priorityColor: "#CFF3C0",
  },
  {
    id: "2",
    name: "Review Customer ...",
    status: "Medium",
    deadline: "Jul 25",
    priority: "In Progress",
    color: "#FAD8B3",
    priorityColor: "#A7C7E7",
  },
  {
    id: "3",
    name: "Send Thank-You Notes",
    status: "Medium",
    deadline: "Jul 25",
    priority: "Not Started",
    color: "#FAD8B3",
    priorityColor: "#D3D3D3",
  },
  {
    id: "4",
    name: "Schedule Follow-Up Call",
    status: "Low",
    deadline: "Jul 25",
    priority: "Done",
    color: "#CFF3C0",
    priorityColor: "#CFF3C0",
  },
  {
    id: "5",
    name: "Update Sales Pipeline",
    status: "Low",
    deadline: "Jul 25",
    priority: "Archived",
    color: "#CFF3C0",
    priorityColor: "#D3D3D3",
  },
];

export default function TaskListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goback}>
          <ChevronLeft size={20} color="#727272" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tasks</Text>
        {/* <View style={{ width: 24 }} /> */}
      </View>
      <View style={styles.body}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.tableHeader}>
              <Text
                style={[styles.columnHeader, { textAlign: "left", width: 190 }]}
              >
                Name
              </Text>
              <View style={styles.verticalLine} />
              <Text
                style={[
                  styles.columnHeader,
                  { textAlign: "center", width: 120 },
                ]}
              >
                Status
              </Text>
              <View style={styles.verticalLine} />
              <Text
                style={[
                  styles.columnHeader,
                  { textAlign: "center", width: 130 },
                ]}
              >
                Deadline
              </Text>
              <View style={styles.verticalLine} />
              <Text
                style={[styles.columnHeader, { textAlign: "right", width: 90 }]}
              >
                Priority
              </Text>
            </View>

            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.taskRow}>
                  <Text style={styles.taskName}>{item.name}</Text>
                  <View style={styles.statusView}>
                    <View
                      style={[
                        styles.statusBadge,
                        { backgroundColor: item.color },
                      ]}
                    >
                      <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                  </View>

                  <Text style={styles.deadlineText}>{item.deadline}</Text>
                  <View style={styles.priorityView}>
                    <View
                      style={[
                        styles.priorityBadge,
                        { backgroundColor: item.priorityColor },
                      ]}
                    >
                      <Text style={styles.priorityText}>{item.priority}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFC",
  },

  goback: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#DADADA",
    padding: 4,
    alignSelf: "flex-start",
  },
  body: {
    // paddingVertical: 24,
    paddingHorizontal: 16,
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
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,
  },
  tableHeader: {
    marginTop: 30,
    flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
  },
  columnHeader: {
    fontSize: 14,
    fontWeight: "bold",
    // backgroundColor: "green",
    textAlign: "center",
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E8E7E9",
    padding: 15,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 16,
    textAlign: "left",
    width: 200,
    // backgroundColor: "red",
  },
  statusView: {
    marginLeft: 10,
    width: 100,
    // backgroundColor: "blue",
  },
  statusBadge: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "500",
  },
  deadlineText: {
    marginLeft: 30,
    // backgroundColor: "red",
    width: 140,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  priorityView: {
    width: 140,
  },
  priorityBadge: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginLeft: 10,
  },
  priorityText: {
    fontSize: 14,
    fontWeight: "500",
  },
  verticalLine: {
    width: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
  },
});
