import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { AtForm, AtInput, AtButton } from "taro-ui";
import { View } from "@tarojs/components";
import md5 from "md5";

import { login } from "../../actions/login";

import "./login.scss";

type PageOwnProps = {};

type PageState = {
  name: string;
  password: string;
};

interface Login {
  state: PageState;
}

class Login extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      name: "",
      password: ""
    };
  }

  config: Config = {
    navigationBarTitleText: "Login"
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
      <View className="login">
        <View>
          <AtForm
            onSubmit={this.onSubmit.bind(this)}
            onReset={this.onReset.bind(this)}
          >
            <AtInput
              name="user"
              title="User Name"
              type="text"
              value={this.state.name}
              error={!this.state.name}
              onChange={this.handleNameChange.bind(this)}
            />
            <AtInput
              name="password"
              title="Password"
              type="password"
              value={this.state.password}
              error={!this.state.password}
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

export default Login as ComponentClass<PageOwnProps, PageState>;
