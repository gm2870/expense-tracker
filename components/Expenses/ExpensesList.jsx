import { FlatList, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';
import { View } from 'react-native';

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};
const ExpensesList = ({ data }) => {
  console.log(data.length);
  return (
    <FlatList
      data={data}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
