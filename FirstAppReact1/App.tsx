import React from 'react';
import {ScrollView, View} from 'react-native';
import style from './style';
import Data from './components/Data';
import Square from './components/Square';
import Employee from './components/employee';

import MinimumNumber from './components/MinimumNumber';
import Hailstone from './components/Hailstone';

export default function App() {
  return (
    <View>
      <ScrollView style={style.container}>
        {Data.map((item, index) => (
          <Square key={item} text={`Square ${index + 1}`} />
        ))}

        <Employee name="Huỳnh Minh Hải" age="100" occupation="IT" />
        <MinimumNumber />
        <Hailstone />
      </ScrollView>
    </View>
  );
}
