import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";

const TaskScreen = () => {
  const navigation = useNavigation();
  const [prioritymodalVisible, setprioritymodalVisible] = useState(false);
  const [statusmodalVisible, setstatusmodalVisible] = useState(false);

  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Medium");

  const handlePrioritySelect = (selectedPriority: string): void => {
    setPriority(selectedPriority);
    setprioritymodalVisible(false);
  };

  const handleStatusSelect = (selectedPriority: string): void => {
    setStatus(selectedPriority);
    setstatusmodalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goback}>
          <ChevronLeft size={20} color="#727272" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tasks</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.taskTitle}>Contact Leads</Text>
        </View>

        <View style={styles.descriptionCard}>
          <Text style={styles.description}>
            Grab your favorite items at half price - this is an opportunity you
            can't afford to miss!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.infoRow}
          onPress={() => setprioritymodalVisible(true)}
        >
          <Text style={styles.label}>Priority:</Text>
          <View style={styles.priorityTag}>
            <Text style={styles.priorityText}>{priority}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoRow}>
          <Text style={styles.label}>Deadline</Text>
          <View style={styles.dateBox}>
            <Text style={styles.dateText}>Jul 25</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.infoRow}
          onPress={() => setstatusmodalVisible(true)}
        >
          <Text style={styles.label}>Status</Text>
          <View style={styles.statusTag}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal for Priority Selection */}
      <Modal visible={prioritymodalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Priority</Text>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#FAD4C0" }]}
              onPress={() => handlePrioritySelect("High")}
            >
              <Text style={styles.modalButtonText}>High</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#FCE7D0" }]}
              onPress={() => handlePrioritySelect("Medium")}
            >
              <Text style={styles.modalButtonText}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#E6F4EA" }]}
              onPress={() => handlePrioritySelect("Low")}
            >
              <Text style={styles.modalButtonText}>Low</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={statusmodalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose status</Text>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#FAD4C0" }]}
              onPress={() => handleStatusSelect("Not Started")}
            >
              <Text style={styles.modalButtonText}>Not Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#FCE7D0" }]}
              onPress={() => handleStatusSelect("In Progress")}
            >
              <Text style={styles.modalButtonText}>In Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#E6F4EA" }]}
              onPress={() => handleStatusSelect("Done")}
            >
              <Text style={styles.modalButtonText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#E6F4EA" }]}
              onPress={() => handleStatusSelect("Archived")}
            >
              <Text style={styles.modalButtonText}>Archived</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 30,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    // marginRight: -10,
  },
  card: {
    paddingVertical: 15,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  descriptionCard: {
    borderRadius: 4,
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E8E7E9",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  priorityTag: {
    backgroundColor: "#FAD4C0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  priorityText: {
    color: "#A65C32",
    fontWeight: "600",
  },
  dateBox: {
    backgroundColor: "#F9F9F9",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  dateText: {
    fontWeight: "600",
  },
  statusTag: {
    backgroundColor: "#D6E4FF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  statusText: {
    color: "#2F6FED",
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalButton: {
    padding: 15,
    borderRadius: 4,
    marginVertical: 5,
    alignItems: "center",
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default TaskScreen;
