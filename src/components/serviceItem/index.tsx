import { ComponentClass } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtAccordion, AtGrid } from "taro-ui";

import "./index.scss";

type Props = {};

type OwnProps = {};

type State = {
  open: boolean;
};

interface ServiceItem {
  state: State;
  props: Props;
}

class ServiceItem extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      open: true
    };
  }

  handleClick(value) {
    this.setState({
      open: value
    });
  }

  render() {
    const data = {
      title: "云资源",
      itemsInfo: [
        {
          value: "领取中心",
          iconInfo: {
            value: "bell"
          }
        },
        {
          value: "领取中心",
          iconInfo: {
            value: "bell"
          }
        },
        {
          value: "领取中心",
          iconInfo: {
            value: "bell"
          }
        },
        {
          value: "领取中心",
          iconInfo: {
            value: "bell"
          }
        }
      ]
    };

    return (
      <View>
        <AtAccordion
          open={this.state.open}
          hasBorder
          onClick={this.handleClick.bind(this)}
          title={data.title}
          isAnimation
        >
          <AtGrid
            mode="rect"
            hasBorder={true}
            columnNum={2}
            data={data.itemsInfo}
          />
        </AtAccordion>
      </View>
    );
  }
}

export default ServiceItem as ComponentClass<OwnProps, State>;
