import React from 'react';
import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import {Component} from 'react/cjs/react.development';
import {styles} from '.style/emojiScreen.js/EmojiScreenStyle';

const dataEmoji = [
    require('../../asset/emoji/angry.png'),
    require('../../asset/emoji/care.png'),
    require('../../asset/emoji/haha.png'),
    require('../../asset/emoji/love.png'),
    require('../../asset/emoji/like.png'),
    require('../../asset/emoji/sad.png'),
];

export default class Emoji extends Component {
  state = {
      imgFix: require('../../asset/emoji/love.png'),
  }
  onChangeEmoji = (index) => {
    this.setState({imgFix: dataEmoji[index]})
  }

  renderEmoji = () => {
    return (
      <View style={styles.container_content}>
        <View style={styles.container_content_title}>
          <Text style={styles.container_content_title_text}>
            Bạn đang cảm thấy như thế nào ?
          </Text>
        </View>
        <View style={styles.container_content_img}>
          <Image
            style={styles.container_content_img_big}
            source={this.state.imgFix}
          />
        </View>
        <View style={styles.container_content_img_detail}>
        {
          dataEmoji.map((data, index) => (
            <TouchableOpacity key={index} onPress={() => this.onChangeEmoji(index)}>
              <Image
                style={styles.container_content_img_detail_small}
                source={data}
              />
            </TouchableOpacity>
          ))
        }
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderEmoji()}
      </View>
    );
  }
}
