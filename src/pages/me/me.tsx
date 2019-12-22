import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { AtForm, AtInput, AtButton } from "taro-ui";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import md5 from "md5";

import { login } from "../../actions/login";
import { add, minus, asyncAdd } from "../../actions/counter";

import "./me.scss";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {};

type PageState = {
  name: string;
  password: string;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Me {
  props: IProps;
  state: PageState;
}

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    }
  })
)
class Me extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      name: "",
      password: ""
    };
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "Me"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleNameChange(value) {
    this.setState({
      name: value
    });
  }

  handlePasswordChange(value) {
    this.setState({
      password: value
    });
  }

  onSubmit() {
    const { name, password } = this.state;
    login({ name, password: md5(password) });
  }
  onReset(event) {
    console.log(event);
  }

  render() {
    return (
      <View className="me">
        <View>
          <AtForm
            onSubmit={this.onSubmit.bind(this)}
            onReset={this.onReset.bind(this)}
          >
            <AtInput
              name="user"
              title="User Name"
              type="text"
              placeholder="Input your user name"
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
            />
            <AtInput
              name="password"
              title="Password"
              type="text"
              placeholder="Input your password"
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
            />
            <AtButton type="primary" formType="submit">
              Login
            </AtButton>
            <AtButton type="secondary" formType="reset">
              Reset
            </AtButton>
          </AtForm>
        </View>
      </View>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Me as ComponentClass<PageOwnProps, PageState>;
