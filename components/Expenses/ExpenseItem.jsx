import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../utils/date';
import { useNavigation } from '@react-navigation/native';

const ExpenseItem = ({ id, description, date, amount }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ManageExpense', {
          id,
        })
      }
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    elevation: 3,
  },
  description: {
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  amountContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  price: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 700,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  pressed: {
    opacity: 0.75,
  },
});
