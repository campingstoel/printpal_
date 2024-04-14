import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { View } from 'react-native';
import mapbox from '../../styles/mapbox';
import { mapstyles } from '../../styles/mapStyles';
import index from '../../styles';

export default function Mapbox({style, location, data}) {
    return (
        <View style={[mapbox.container, index.fullWidth, index.mb20, style]}>
        <MapView
          style={{ flex: 1, borderRadius: 20 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0522,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          showsMyLocationButton={false}
          showsCompass={false}
          customMapStyle={mapstyles}
        >
          {data ? 
          data.map((item) => item.locationVisible ?
          <Marker
            key={item.uid}
            coordinate={{
              latitude: item.location.latitude,
              longitude: item.location.longitude,
            }}
            title={item.name}
          />
          : null
          )
          : null
          }
          </MapView>
        </View>
    );
    }
