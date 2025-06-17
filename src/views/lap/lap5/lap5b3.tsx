import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {height} = Dimensions.get('window');

function Lap5b3() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={require('../../../assets/raiden.png')}
        style={styles.imageBackground}>
        <View style={[styles.header, {paddingTop: insets.top + 10}]}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageOverlay}>
          <Text style={styles.mainTitle}>PHỐ CỔ HỘI AN</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.contentCard}>
        <TouchableOpacity
          style={styles.favoriteButton}>
          <Icon name="heart" size={28} color="#FF6347" />
        </TouchableOpacity>

        <View style={styles.locationContainer}>
          <Icon name="location-sharp" size={20} color="#666" />
          <Text style={styles.locationText}>Quảng Nam</Text>
        </View>

        <Text style={styles.sectionTitle}>Thông tin chuyến đi</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.descriptionScrollView}
          contentContainerStyle={styles.descriptionContentContainer}>
          <Text style={styles.descriptionText}>
            Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ
            Hội An từng là một thương cảng quốc tế sầm uất, gồm những di sản
            kiến trúc đã có từ hàng trăm năm trước, được UNESCO công nhận là di
            sản văn hóa thế giới từ năm 1999. Hội An là một thành phố trực thuộc
            tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An từng là một thương cảng quốc
            tế sầm uất, gồm những di sản kiến trúc đã có từ hàng trăm năm trước,
            được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999. Hội An
            là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An
            từng là một thương cảng quốc tế sầm uất, gồm những di sản kiến trúc
            đã có từ hàng trăm năm trước, được UNESCO công nhận là di sản văn
            hóa thế giới từ năm 1999.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text style={styles.priceText}>
          $100<Text style={styles.pricePerDay}>/Ngày</Text>
        </Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Đặt ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  imageBackground: {
    width: '100%',
    height: height * 0.55,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 5,
  },
  imageOverlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 30,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentCard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    marginTop: -30,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: -25,
    right: 30,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  descriptionScrollView: {
    maxHeight: height * 0.25,
  },
  descriptionContentContainer: {
    paddingBottom: 20,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 8,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  pricePerDay: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'normal',
  },
  bookButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Lap5b3;

