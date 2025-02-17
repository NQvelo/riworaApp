import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ChevronLeft, ListFilter } from "lucide-react-native";
import { SalesBox } from "@/components/RiworaComponents/salesBox";

const SalesOverviewScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.goback}>
          <ChevronLeft size={20} color="#727272" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sales Overview</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Time Filters */}
      <View style={styles.filterContainer}>
        <SalesBox title="Week" count={10} />
        <SalesBox title="Month" count={16} />
        <SalesBox title="Year" count={34} />
      </View>

      {/* Date Range & Filter */}
      <View style={styles.dateFilterContainer}>
        <Text style={styles.dateText}>26 October - 26 November</Text>
        <TouchableOpacity style={styles.filterButton}>
          <ListFilter size={20} color="black" />
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Total Sales */}
      <Text style={styles.totalSales}>
        $30,000 <Text style={styles.past30Days}>Past 30 Days</Text>
      </Text>

      <LineChart
        data={{
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              data: [5567, 3000, 4000, 7000],
            },
          ],
        }}
        width={Dimensions.get("window").width - 40} // from react-native
        height={200}
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // backgroundColor: "#ffffff",

          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `#92C0DE`,
          labelColor: (opacity = 1) => `black`,
          style: {
            borderRadius: 0,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffffff",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 16,
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
    backdropFilter: "blur(20px)",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  filterBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: 15,
    width: 80,
  },
  filterText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7064FF",
  },
  filterLabel: {
    fontSize: 12,
    color: "#8e8e8e",
  },
  dateFilterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    // borderWidth: 1,
  },
  dateText: {
    flex: 1,
    fontSize: 14,
    borderColor: "#EBEBEB",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  filterButton: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#f3f3f3",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#5E5E5E",
    alignItems: "center",
  },
  filterButtonText: {
    marginLeft: 4,
    // width: 100,
    // backgroundColor: "red",
  },
  totalSales: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 16,
    // textAlign: "center",
  },
  past30Days: {
    fontSize: 14,
    color: "#8e8e8e",
  },
  goback: {
    // backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#DADADA",
    padding: 4,
    alignSelf: "flex-start",
  },
});

export default SalesOverviewScreen;
