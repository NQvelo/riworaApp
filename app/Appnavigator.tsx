import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OpenLeads from "./(tabs)/OpenLeads";
import Dashboard from "./(tabs)/Dashboard";
import ClosedLeads from "./(tabs)/ClosedLeads";
import LeadPage from "./(tabs)/LeadPage";

export type RootStackParamList = {
  Dashboard: undefined;
  OpenLeads: undefined;
  ClosedLeads: undefined;
  LeadPage: { lead: { title: string; description: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="OpenLeads" component={OpenLeads} />
      <Stack.Screen name="ClosedLeads" component={ClosedLeads} />
      <Stack.Screen name="LeadPage" component={LeadPage} />
    </Stack.Navigator>
  );
}
