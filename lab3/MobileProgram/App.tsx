import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomNavigation, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

import ProductList from './components/Products';
import Product_Add from './components/Product_Add';
import Product_Search from './components/Product_Search';
import Product_Detail from './components/Product_Detail';
function App(): React.JSX.Element {
  const [index, setIndex] = useState(0); 
  const [routes] = useState([
    {key: 'products', title: 'Products', icon: 'folder'},
    {key: 'add', title: 'Add', icon: 'folder'},
    {key: 'search', title: 'Search', icon: 'find'},
    {key: 'detail', title: 'Detail', icon: 'calendar'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: Product_Search,
    products: ProductList,
    add: Product_Add,
    detail: Product_Detail,
  });

  const renderIcon = (props: {route: {icon: string}}) => (
    <Icon name={props.route.icon} size={24} />
  );

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon} 
      />
    </SafeAreaProvider>
  );
}

export default App;
