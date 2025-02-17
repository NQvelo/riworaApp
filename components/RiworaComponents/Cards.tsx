import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CardsProps {
  label: string;
  number: string;
  description: string;
  subtitle?: string;
  isActive?: boolean;
}

const Cards: React.FC<CardsProps> = ({
  label,
  number,
  description,
  subtitle,
}) => {
  return (
    <TouchableOpacity style={styles.categoryCard}>
      <View style={styles.categoryView}>
        <Text style={styles.categoryLabel}>{label}</Text>
      </View>
      <Text style={styles.categoryNumber}>{number}</Text>
      {subtitle && <Text style={styles.categorySubtitle}>{subtitle}</Text>}
      <Text style={styles.categoryDescription}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    height: 150,
    width: 241,
    backgroundColor: "#d9ecfa",
    padding: 16,
    borderRadius: 4,
    marginRight: 16,
  },
  categoryView: {
    borderWidth: 1,
    borderColor: "#677076",
    borderRadius: 4,
    paddingHorizontal: 10,
    padding: 4,
    alignSelf: "flex-start",
  },
  categoryLabel: {
    fontSize: 14,
    color: "#666",
  },
  categoryNumber: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "600",
  },
  categorySubtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  categoryDescription: {
    color: "#666",
    fontSize: 14,
  },
  activeCard: {
    backgroundColor: "#f5f9ff",
  },
});

export default Cards;
