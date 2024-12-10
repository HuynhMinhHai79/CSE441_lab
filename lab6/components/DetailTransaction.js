import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const DetailTransaction = ({route, navigation}) => {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const detailData = route.params.detail;
    // console.log(detailData);z
    setTransaction(detailData);
  }, [route.params]);

  const convertDateFormat = dateString => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDate = `${day < 10 ? '0' + day : day}/${
      month < 10 ? '0' + month : month
    }/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Transaction detail</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentBox}>
          <Text style={styles.sectionTitle}>General information</Text>

          <View style={styles.infoRow}>
            <Text style={styles.labelText}>Transaction code</Text>
            <Text style={styles.valueText}>{transaction?.id}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.labelText}>Customer</Text>
            <Text style={styles.valueText}>
              {transaction?.customer?.name} - {transaction?.customer?.phone}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.labelText}>Creation time</Text>
            <Text style={styles.valueText}>
              {convertDateFormat(transaction?.createdAt)}
            </Text>
          </View>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.sectionTitle}>Service list</Text>
          {transaction?.services?.map(item => (
            <View key={item._id} style={styles.serviceItem}>
              <Text style={styles.serviceName} numberOfLines={1}>
                {item.name}
              </Text>
              <View style={styles.priceContainer}>
                <Text style={styles.quantityText}>x{item.quantity}</Text>
                <Text style={styles.valueText}>{item.price}đ</Text>
              </View>
            </View>
          ))}
          <View style={styles.totalRow}>
            <Text style={styles.labelText}>Total</Text>
            <Text style={styles.valueText}>
              {transaction?.priceBeforePromotion} đ
            </Text>
          </View>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.sectionTitle}>Cost</Text>
          <View style={styles.infoRow}>
            <Text style={styles.labelText}>Amount of money</Text>
            <Text style={styles.valueText}>
              {transaction?.priceBeforePromotion} đ
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.labelText}>Discount</Text>
            <Text style={styles.valueText}>
              - {transaction?.priceBeforePromotion - transaction?.price} đ
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalPayment}>Total payment</Text>
            <Text style={[styles.totalPayment, {color: '#F06B7A'}]}>
              {transaction?.price} đ
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F06B7A',
    height: 56,
    paddingHorizontal: 15,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 15,
  },

  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: 'black',
  },
  menuButton: {
    marginLeft: 'auto',
  },
  sectionTitle: {
    color: '#F06B7A',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  totalPayment: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labelText: {
    color: 'gray',
    fontWeight: '500',
  },
  valueText: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'right',
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  serviceName: {
    color: 'gray',
    fontWeight: '500',
    flex: 1,
    marginRight: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 120,
  },
  quantityText: {
    color: 'gray',
    fontWeight: '500',
    width: 30,
    textAlign: 'center',
  },
  valueText: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'right',
    minWidth: 80,
  },
  scrollContainer: {
    flex: 1,
  },
  contentBox: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 10,
    borderTopColor: 'black',
    borderTopWidth: 0.2,
  },
});

export default DetailTransaction;
