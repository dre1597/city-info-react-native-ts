import React, { ReactNode } from 'react';
import { View, Text, FlatList } from 'react-native';
import { theme } from '../../globals/styles/theme';
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from '@expo/vector-icons';
import { ICityInfo } from '../../interfaces';
import { styles } from './styles';
import ListDivider from '../ListDivider';

const { PRIMARY_COLOR, BORDER_COLOR } = theme.colors;

type ICityDetailsProps = {
  currentCity: ICityInfo;
};

type CityDetails = {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
};

const CityDetails: React.FC<ICityDetailsProps> = ({
  currentCity: {
    drive_on,
    speed_in,
    currency_name,
    currency_symbol,
    continent,
  },
}) => {
  const details: CityDetails[] = [
    {
      id: '1',
      icon: <Fontisto name='world-o' size={25} color={PRIMARY_COLOR} />,
      title: 'Continent:',
      subtitle: continent,
    },
    {
      id: '2',
      icon: (
        <MaterialIcons name='attach-money' size={30} color={PRIMARY_COLOR} />
      ),
      title: 'Currency:',
      subtitle: `${currency_name} (${currency_symbol})`,
    },
    {
      id: '3',
      icon: <FontAwesome5 name='car' size={30} color={PRIMARY_COLOR} />,
      title: 'Drive side:',
      subtitle: drive_on,
    },
    {
      id: '4',
      icon: (
        <MaterialCommunityIcons
          name='speedometer'
          size={30}
          color={PRIMARY_COLOR}
        />
      ),
      title: 'Speed in:',
      subtitle: speed_in,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ListDivider}
        data={details}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.box}>
            {item.icon}
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CityDetails;
