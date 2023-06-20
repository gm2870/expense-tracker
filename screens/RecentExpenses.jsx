import { Text } from 'react-native';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { useSelector } from 'react-redux';
import { getDateMinusDays } from '../utils/date';

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expense);
  const recentExpenses = expenses.filter((exp) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return exp.date >= date7DaysAgo && exp.date <= today;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
