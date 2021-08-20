import FlowersList from '@components/organisms/FlowerList';
import HomeHeader from '@components/organisms/HomeHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dispatch} from '@reduxjs/toolkit';
import flowerService from '@services/flowerService';
import sightingService from '@services/sightingService';
import debounce from '@utils/debounce';
import typedBindActionCreators from '@utils/typed-bind-action-creators';
import {FlowerList} from 'api';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';

interface State {
  data: FlowerList | null;
  searchQuery: string;
  numberOfSightings: number;
  pending: boolean;
}

interface Props extends ReturnType<typeof mapDispatchToProps> {
  navigation: StackNavigationProp<any>;
}

class HomeScreen extends React.Component<Props, State> {
  state: State = {
    data: null,
    searchQuery: '',
    numberOfSightings: 0,
    pending: false,
  };

  componentDidMount() {
    this.getSightings();
    this.loadFlowers();
  }

  getSightings = () => {
    this.props.getSightings({}).then((res) => {
      this.setState({numberOfSightings: res.sightings!.length});
    });
  };

  loadFlowers = (loadMore = false) => {
    if (this.state.pending) {
      return;
    }

    const page = !loadMore ? 1 : (this.state.data?.meta?.currentPage || 1) + 1;

    // @ts-ignore
    if (page > (this.state.data?.meta?.pagination.total_pages || 1)) {
      return;
    }

    this.setState({
      pending: true,
    });

    const apiCall =
      this.state.searchQuery !== ''
        ? this.props.searchFlowers({query: this.state.searchQuery})
        : this.props.getFlowers({page});

    apiCall.then(
      (res) => {
        this.setState({
          data: {
            ...res,
            flowers:
              page === 1
                ? res.flowers
                : [...(this.state.data?.flowers || []), ...(res.flowers || [])],
          },
          pending: false,
        });
      },
      () => {
        this.setState({
          pending: false,
          data: null,
        });
      },
    );
  };

  searchForFlowers = debounce(() => {
    this.loadFlowers();
  }, 500);

  render() {
    const {data, searchQuery, numberOfSightings, pending} = this.state;
    return (
      <SafeAreaView edges={['bottom']} style={{flex: 1}}>
        <FlowersList
          emptyMessage="No flowers found"
          data={data?.flowers || []}
          pending={pending}
          onPress={(id: number) =>
            this.props.navigation.navigate('Flower', {
              id: id,
            })
          }
          flatListProps={{
            ListHeaderComponent: (
              <HomeHeader
                numberOfSightings={numberOfSightings || null}
                onChangeText={(searchQuery) =>
                  this.setState({searchQuery}, () => {
                    this.searchForFlowers();
                  })
                }
                queryValue={searchQuery}
                placeholder="Looking for something specific?"
              />
            ),
            onEndReached: () => this.loadFlowers(true),
            onEndReachedThreshold: 0.25,
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  typedBindActionCreators(
    {
      getFlowers: flowerService.getFlowers,
      searchFlowers: flowerService.getFlowersSearch,
      getSightings: sightingService.getSightings,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(HomeScreen);
