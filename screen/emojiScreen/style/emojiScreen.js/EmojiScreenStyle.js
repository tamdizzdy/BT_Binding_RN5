import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  container_content: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  container_content_title: {
    flex: 1,
    justifyContent: 'center',
  },
  container_content_title_text: {
    fontWeight: '600',
    fontSize: 20,
  },
  container_content_img: {
    flex: 1,
    marginBottom: 50,
  },
  container_content_img_big: {
    width: 100,
    height: 100,
  },
  container_content_img_detail: {
    flex: 1,
    flexDirection: 'row',
    
  },
  container_content_img_detail_small: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
});
