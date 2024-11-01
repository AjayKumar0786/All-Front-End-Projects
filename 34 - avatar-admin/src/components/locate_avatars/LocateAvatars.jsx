import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import fetchAllLocation from '../../utils/services/commonServices'

// COMPONENT: LOCATE CONTROL
const LocateControl = ({ setCenter }) => {
  const map = useMap()

  useEffect(() => {
    const fetchAllAvatarLocation = async () => {
      try {
        const res = await fetchAllLocation()
        if (res.success && res.data && res.data.length > 0) {
          setCenter([res.data[0].lat, res.data[0].lng]) // Update center based on first location
        } else {
          console.log('No data or invalid data received')
        }
      } catch (error) {
        console.log('Error fetching locations:', error)
      }
    }

    fetchAllAvatarLocation()
    map.locate({ setView: true, maxZoom: 16 })

    map.on('locationfound', (e) => {
      setCenter([e.latlng.lat, e.latlng.lng]) // Ensure correct format
      map.setView(e.latlng, 14)
    })

    map.on('locationerror', (e) => {
      console.log('Location error:', e)
    })
  }, [map, setCenter])

  return null
}

// COMPONENT: LOCATE AVATARS
const LocateAvatars = () => {
  const [center, setCenter] = useState([0, 0]) // Default center before data is loaded
  const [locations, setLocations] = useState([])
  

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetchAllLocation()
        if (res.success && Array.isArray(res.data)) {
          setLocations(res.data) // Update state with the fetched locations
          if (res.data.length > 0) {
            setCenter([res.data[0].lat, res.data[0].lng]) // Set the center to the first location
          }
        } else {
          console.log('No data or invalid data received')
        }
      } catch (error) {
        console.error('Error fetching locations:', error)
      }
    }

    fetchLocations()
  }, [])

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '400px', width: '100%', marginBottom: '30px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocateControl setCenter={setCenter} />
      {locations.map((location, idx) => (
        <Marker key={idx} position={[location.lat, location.lng]}>
          <Popup>
            {location.userName}<br />{location.email}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default LocateAvatars
