import React, {useState} from 'react'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {ForecastCardProps} from '../../app/appWeatherTypes'
import {MapWrapper} from './style/CardWeatherStyle'

interface MapWeatherProps extends ForecastCardProps {}

const MapWeather: React.FC<MapWeatherProps> = () => {
  const [center, setCenter] = useState({})
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapWeather
