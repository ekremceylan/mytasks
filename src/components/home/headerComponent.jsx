import {StyleSheet, View, FlatList, Pressable, Text} from 'react-native';
import AppColors from '../../theme/color';
import {
  ChartCircle,
  Clock,
  TickCircle,
  CloseCircle,
  ArrowCircleRight2,
} from 'iconsax-react-native';

const HeaderComponent = ({ongoing, pending, completed, cancel}) => {
  const tasks = [
    {
      id: 1,
      title: 'Ongoing',
      color: AppColors.ONGOING,
      icon: <ChartCircle size="32" color={AppColors.WHITE} />,
      count: ongoing,
    },

    {
      id: 2,
      title: 'Pending',
      color: AppColors.PENDING,
      icon: <Clock size="32" color={AppColors.WHITE} />,
      count: pending,
    },
    {
      id: 3,
      title: 'Completed',
      color: AppColors.COMPLETED,
      icon: <TickCircle size="32" color={AppColors.WHITE} />,
      count: completed,
    },
    {
      id: 4,
      title: 'Cancel',
      color: AppColors.CANCEL,
      icon: <CloseCircle size="32" color={AppColors.WHITE} />,
      count: cancel,
    },
  ];

  const Task = ({item}) => {
    return (
      <Pressable
        style={{
          width: '45%',
          backgroundColor: item.color,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              color: AppColors.WHITE,
              fontSize: 16,
              fontWeight: '600',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              color: AppColors.WHITE,
              fontSize: 16,
              fontWeight: '600',
              marginTop:5,
            }}>
            {item.count} Task
          </Text>
        </View>

        <View>
          <ArrowCircleRight2 size="24" color={AppColors.WHITE} />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={tasks}
        renderItem={({item}) => <Task item={item} />}
      />
      <View>
         <Text 
           style={{
             fontSize:18,
             fontWeight:"500",
             margin:10,
             marginHorizontal:20,
             }}>
              All Task
         </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
