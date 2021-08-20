import Spinner from '@components/atoms/Spinner';
import Text from '@components/atoms/Text';
import {HomeStackParamList} from '@navigation/navigators/MainTabNavigator';
import {RouteProp} from '@react-navigation/native';
import {Dispatch} from '@reduxjs/toolkit';
import flowerService from '@services/flowerService';
import typedBindActionCreators from '@utils/typed-bind-action-creators';
import {Flower} from 'api';
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

interface Props extends ReturnType<typeof mapDispatchToProps> {
  route: RouteProp<HomeStackParamList, 'Flower'>;
}

interface State {
  data: Flower;
  pending: boolean;
}

class FlowerScreen extends React.Component<Props, State> {
  state: State = {
    data: {},
    pending: false,
  };
  componentDidMount() {
    const id = this.props.route.params.id;

    if (id) {
      this.setState({pending: true});

      this.props.getFlowerById(id).then(
        (res) => {
          // @ts-ignore (I am using @ts-ignore because the generated openapi is different from the one coming from the body response)
          this.setState({data: res.flower, pending: false});
        },
        () => this.setState({pending: false}),
      );
    }
  }

  render() {
    // @ts-ignore (I am using @ts-ignore because the generated openapi latinName name is different from the one coming from the response body, so latinName-> latin_name)
    const {name, sightings, latin_name} = this.state.data;

    return (
      <View style={styles.root}>
        {this.state.pending ? (
          <View style={{alignItems: 'center'}}>
            <Spinner />
          </View>
        ) : (
          <>
            <Text>This is flower {name}</Text>
            <Text>Its latin name is {latin_name}</Text>
            <Text>It has {sightings} sightings</Text>
          </>
        )}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  typedBindActionCreators(
    {
      getFlowerById: flowerService.getFlowerById,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(FlowerScreen);
