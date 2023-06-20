import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 8,
    borderRadius: 6,
    marginBottom: 16,
  },
  period: {
    color: GlobalStyles.colors.primary400,
    fontSize: 12,
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
