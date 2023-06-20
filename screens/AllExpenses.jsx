import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { useSelector } from 'react-redux';

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expense);
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
};

export default AllExpenses;
