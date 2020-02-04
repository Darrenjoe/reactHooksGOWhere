import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/Header.jsx';
import CitySelector from '../common/CitySelector.jsx';
import DateSelector from '../common/DateSelector.jsx';
import { h0 } from '../common/fp.js';

import HighSpeed from './HighSpeed.jsx';
import DepartDate from './DepartDate';
import Journey from './Journey.jsx'
import Submit from './Submit.jsx';

// 注意：这里有自组装件的重渲染问题，必须使用useCallback包裹起来，这样不会在子组件里重复渲染

import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartDate,
  toggleHighSpeed,
} from './actions'

function App(props) {
  const {
    from,
    to,
    dispatch,
    isCitySelectorVisible,
    isDateSelectorVisible,
    cityData,
    isLoadingCityData,
    departDate,
    highSpeed,
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo,
      showCitySelector,
    }, dispatch);
  }, [dispatch]);

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators({
      onBack: hideCitySelector,
      fetchCityData,
      onSelect: setSelectedCity,
    }, dispatch);
  }, [dispatch]);

  const departDateCbs = useMemo(() => {
    return bindActionCreators({
      onClick: showDateSelector,
    }, dispatch);
  }, [dispatch]);

  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators({
      onBack: hideDateSelector,
    }, dispatch);
  }, [dispatch]);

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators({
      toggle: toggleHighSpeed,
    }, dispatch);
  }, [dispatch]);

  const onSelectDate = useCallback((day) => {
    if (!day) {
      return;
    }

    if (day < h0()) {
      return;
    }

    dispatch(setDepartDate(day));
    dispatch(hideDateSelector())
  }, [dispatch]);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <form
        action="./query.html"
        className="form"
      >
        <Journey
          from={from}
          to={to}
          {...cbs}
        />
        <DepartDate
          time={departDate}
          {...departDateCbs}
        />
        <HighSpeed
        highSpeed={highSpeed}
          {...highSpeedCbs}
        ></HighSpeed>
        <Submit></Submit>
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
      <DateSelector
        show={isDateSelectorVisible}
        {...dateSelectorCbs}
        onSelect={onSelectDate}
      />
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);