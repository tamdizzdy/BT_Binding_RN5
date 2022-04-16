import {Text, View, ScrollView, Image} from 'react-native';
import React, {Component} from 'react';
import styles from './styles/NewFeedStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faPenClip, faEllipsis} from '@fortawesome/free-solid-svg-icons';

const dataAvatar = [
  {
    name: 'Sahara',
    image: require('../../asset/images/image1.jpeg'),
  },
  {
    name: 'Sophia',
    image: require('../../asset/images/image2.jpeg'),
  },
  {
    name: 'Hana',
    image: require('../../asset/images/image3.jpeg'),
  },
  {
    name: 'Naul',
    image: require('../../asset/images/image4.jpeg'),
  },
  {
    name: 'Kimihana',
    image: require('../../asset/images/image5.jpeg'),
  },
  {
    name: 'Yoko',
    image: require('../../asset/images/image6.jpeg'),
  },
  {
    name: 'Su',
    image: require('../../asset/images/image7.jpeg'),
  },
  {
    name: 'Finnia',
    image: require('../../asset/images/image8.jpeg'),
  },
  {
    name: 'Subana',
    image: require('../../asset/images/image9.jpeg'),
  },
  {
    name: 'Corohe',
    image: require('../../asset/images/image10.jpeg'),
  },
];

const dataFeeds = [
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Sahara",
      image: require('../../asset/images/image1.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "1 minutes"
  },
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Sophia",
      image: require('../../asset/images/image2.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "3 minutes"
  
  },
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Hana",
      image: require('../../asset/images/image3.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "5 minutes"
  
  },
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Naul",
      image: require('../../asset/images/image4.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "10 minutes"
  },
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Kimihana",
      image: require('../../asset/images/image5.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "1 minutes"
  }
]


export default class NewFeedScreen extends Component {
  renderHeader = () => {
    return (
      <View style={styles.container_header}>
        <View style={styles.header}>
          <FontAwesomeIcon icon={faCamera} />
          <Text style={styles.header__text}>Feed</Text>
          <FontAwesomeIcon icon={faPenClip} />
        </View>
      </View>
    );
  };

  renderAvatars = () => {
    return (
      <View style={styles.container_avatar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dataAvatar.map((data, index) => (
            <View style={styles.container_avatar__sub}>
              <Image
                style={styles.container_avatar__image}
                source={data.image}
              />
              <Text>{data.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  renderFeeds = () => {
    return (
      <View style={styles.container_feed}>
        <ScrollView>
          {dataFeeds.map((data, index) => (
            <View style={styles.container_feed_item}>
              <View style={styles.container_feed_item_header}>
                <View>
                  <Image 
                    style={styles.container_avatar__image}
                    source={data.image}
                  />
                </View>
                <View style={styles.container_feed_item_header_title}>
                  <Text>{data.title}</Text>
                  <View style={styles.container_feed_item_header_title_nametime}>
                    <Text style={styles.container_feed_item_header_title_nametime_color}>{data.name}</Text>
                    <Text style={styles.container_feed_item_header_title_nametime_color}>{data.time}</Text>
                  </View>
                </View>
                <View><FontAwesomeIcon icon={faEllipsis} /></View>
              </View>
              <View style={styles.container_feed_item_body}>
                <Text>{data.content}</Text>
              </View>
              <View style={styles.container_feed_item_footer}>
                <Image 
                  style={{width: 30, height: 30, marginRight: 5}}
                  source={require('../../asset/images/heart.png')}
                />
                <Text style={styles.container_feed_item_footer_number}>2</Text>
                <Image 
                  style={{width: 30, height: 30, marginRight: 2}}
                  source={require('../../asset/images/comment.png')}
                />
                <Text style={styles.container_feed_item_footer_number}>4</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        {this.renderAvatars()}
        {this.renderFeeds()}
      </View>
    );
  }
}
