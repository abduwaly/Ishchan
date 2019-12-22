import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./me.scss";

type PageStateProps = {};

type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Me {
  props: IProps;
  state: PageState;
}

class Me extends Component {
  config: Config = {
    navigationBarTitleText: "Me"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="me">User Info</View>;
  }
}

export default Me as ComponentClass<PageOwnProps, PageState>;
