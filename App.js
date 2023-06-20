import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import { Provider } from 'react-redux';
import store from './store';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/IconButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const ExpenseOverview = () => {
    return (
      <BottomTab.Navigator
        screenOptions={({ navigation }) => ({
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: 'white',
          tabBarActiveTintColor: GlobalStyles.colors.accent500,

          headerRight: ({ tintColor }) => (
            <IconButton
              name="add"
              color={tintColor}
              size={36}
              onPress={() => navigation.navigate('ManageExpense')}
            />
          ),
        })}
      >
        <BottomTab.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: 'Recent Expenses',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" color={color} size={size} />
            ),
            tabBarLabel: 'Recent',
          }}
        />
        <BottomTab.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: 'All Expenses',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
            }}
          >
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="ExpenseOverview"
              component={ExpenseOverview}
            />
            <Stack.Screen
              options={{
                presentation: 'modal',
              }}
              name="ManageExpense"
              component={ManageExpense}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
