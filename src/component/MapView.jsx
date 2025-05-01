import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

const MapView = ({ center, markers }) => {

    console.log(center, "centerr");
    console.log(markers, "markers");
    const accuracyRadius = 50;

    return (
        <>
            {center?.length > 0 ? (
                <MapContainer
                    style={{ height: "100vh", zIndex: "8" }}
                    center={center}
                    zoom={17}
                    minZoom={5}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* User Marker */}
                    {center && (
                        <>
                            <Marker
                                position={center}
                                icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                            >
                                <Popup>You are here</Popup>
                            </Marker>
                            <Circle
                                center={center}
                                radius={accuracyRadius}
                                pathOptions={{ color: '#3388FF', fillColor: 'lightblue', fillOpacity: 0.3 }}
                            />
                        </>
                    )}

                    {/* Station Markers */}
                    {markers.length ? markers?.map((station) => (
                        <Marker
                            key={station?.id}
                            position={[station?.lat, station?.lng]}
                            icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                        >
                            <Popup>{station.name}</Popup>
                        </Marker>
                    )): <></>}
                </MapContainer>
            ) : null}
        </>
    );
};

export default MapView;
