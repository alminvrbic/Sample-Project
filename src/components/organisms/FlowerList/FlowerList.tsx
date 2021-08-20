import {Flower} from 'api/api';
import React from 'react';
import {FlatList, FlatListProps, View} from 'react-native';
import Spinner from '../../atoms/Spinner/index';
import Text from '../../atoms/Text';
import FlowerCard from '../../molecules/FlowerCard';
import styles from './styles';

interface Props {
  data: Flower[];
  onPress: (id: number) => void;
  pending: boolean;
  emptyMessage?: string;
  flatListProps?: Omit<FlatListProps<any>, 'data' | 'renderItem'>;
}

const PropertyVerticalList = (props: Props) => {
  const {data, onPress, pending, emptyMessage, flatListProps} = props;

  return (
    <FlatList<Flower>
      {...flatListProps}
      contentContainerStyle={styles.root}
      columnWrapperStyle={styles.columnWrapperStyle}
      data={data}
      numColumns={2}
      refreshing={pending}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <View
          key={item.id}
          style={[
            styles.listItemWrapper,
            index > 1 ? styles.listItemWrapperWithSpacing : {},
            index <= 1 ? styles.listItemWrapperWithSpacing : {},
          ]}>
          <FlowerCard data={item} onPress={() => onPress(item.id || 0)} />
        </View>
      )}
      ListEmptyComponent={
        !pending && emptyMessage ? (
          <View style={styles.noDataAvailableWrapper}>
            <Text style={styles.noDataAvailableText}>{emptyMessage}</Text>
          </View>
        ) : null
      }
      ListFooterComponent={
        pending ? (
          <View style={styles.spinnerWrapper}>
            <Spinner />
          </View>
        ) : null
      }
    />
  );
};

export default PropertyVerticalList;
