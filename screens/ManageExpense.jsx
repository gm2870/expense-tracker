import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import IconButton from '../components/IconButton';
import { GlobalStyles } from '../constants/styles';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { addExpense, removeExpense, updateExpense } from '../store/expense';
const ManageExpense = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const expenseId = route.params?.id;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      dispatch(
        updateExpense({
          id: expenseId,
          description: 'Updated Test',
          amount: 19.99,
          date: new Date('2023-06-20'),
        })
      );
    } else {
      dispatch(
        addExpense({
          description: 'Test',
          amount: 19.99,
          date: new Date('2023-06-20'),
        })
      );
    }
    navigation.goBack();
  };
  const deleteExpenseHandler = () => {
    dispatch(removeExpense(expenseId));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
