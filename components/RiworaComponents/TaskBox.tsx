import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface TaskBoxProps {
  title: string;
  status: "inProgress" | "notStarted" | "done";
  priority: "high" | "medium" | "low";
  date: string;
  onPress?: () => void;
}

export const TaskBox = ({
  title,
  status,
  priority,
  date,
  onPress,
}: TaskBoxProps) => {
  const getStatusStyle = () => {
    switch (status) {
      case "inProgress":
        return styles.inProgress;
      case "notStarted":
        return styles.notStarted;
      case "done":
        return styles.done;
    }
  };

  const getPriorityStyle = () => {
    switch (priority) {
      case "high":
        return styles.highPriority;
      case "medium":
        return styles.mediumPriority;
      case "low":
        return styles.lowPriority;
    }
  };

  const getStatusText = () => {
    return status === "done"
      ? "✓ Done"
      : status === "inProgress"
      ? "In Progress"
      : "Not Started";
  };

  const getPriorityText = () => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  return (
    <TouchableOpacity style={styles.taskItem} onPress={onPress}>
      <View>
        <Text style={styles.taskTitle}>{title}</Text>
        <View style={styles.taskMetaContainer}>
          <View style={styles.tagsView}>
            <View style={[styles.taskStatus, getStatusStyle()]}>
              <Text style={styles.taskStatusText}>{getStatusText()}</Text>
            </View>
            <View style={[styles.taskPriority, getPriorityStyle()]}>
              <Text style={styles.taskPriorityText}>{getPriorityText()}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.taskDate}>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E7E9",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  taskMetaContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  tagsView: {
    flexDirection: "row",
    gap: 8,
  },
  taskStatus: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  taskStatusText: {
    fontSize: 14,
  },
  inProgress: {
    backgroundColor: "#E5EFF9",
  },
  notStarted: {
    backgroundColor: "#E5E5E5",
  },
  done: {
    backgroundColor: "#E8F5E9",
  },
  taskPriority: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  taskPriorityText: {
    fontSize: 14,
  },
  highPriority: {
    backgroundColor: "#FFE5E5",
  },
  mediumPriority: {
    backgroundColor: "#FFE5D6",
  },
  lowPriority: {
    backgroundColor: "#E8F5E9",
  },
  taskDate: {
    fontSize: 14,
    color: "#000000",
  },
});
