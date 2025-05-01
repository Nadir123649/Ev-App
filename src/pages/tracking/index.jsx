import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer, useMap, } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";
import leftarrow from "../../assets/images/left-arrow.svg";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import getInstance from "../../service/getInstance";
import Layout from "../../layout";

const UserLocationZoom = ({ userPos }) => {
    const map = useMap();
    useEffect(() => {
        if (userPos) map.setView(userPos, 14);
        setTimeout(() => {
            map.invalidateSize();
        }, 500);
    }, [userPos, map]);
    return null;
};

const Routing = ({ from, to, setLoading, setIsStarted }) => {

    const customIcon = new Icon({
        iconUrl: markerIconPng,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    const map = useMap();
    const [routingControl, setRoutingControl] = useState(null);

    useEffect(() => {
        if (!map || !from || !to) return;

        if (routingControl) {
            routingControl.getPlan().setWaypoints([]);
            map.removeControl(routingControl);
        }

        const control = L.Routing.control({
            waypoints: [
                L.latLng(from.lat, from.lng),
                L.latLng(to.lat, to.lng),
            ],
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            createMarker: () => null,
            lineOptions: {
                styles: [],
                addWaypoints: false,
            },
            createRouteLine: () => null
        }).addTo(map);

        control.on("routesfound", (e) => {
            setLoading(false);
            const coordinates = e.routes[0].coordinates;
            const polyline = L.polyline(coordinates, { color: 'blue' }).addTo(map);

            let index = 0;
            const marker = L.marker(coordinates[0], { icon: customIcon })
                .addTo(map)

            function move() {
                if (index < coordinates.length) {
                    setIsStarted(true)
                    marker.setLatLng(coordinates[index]);
                    polyline.setLatLngs(coordinates.slice(index));
                    index++;
                    setTimeout(move, 50);
                } else {
                    marker.bindPopup('Arrived!').openPopup();
                }
            }

            move();
        });

        control.on("routingerror", (e) => {
            console.error("Routing error:", e.error);
            setLoading(false);
        });

        setRoutingControl(control);

        return () => {
            try {
                control.getPlan().setWaypoints([]);
                map.removeControl(control);
            } catch (err) {
                console.warn("Cleanup failed:", err);
            }
        };
    }, [map]);

    return null;
};

// Main Tracking Component
const Tracking = () => {
    const { id } = useParams();
    const [station, setStation] = useState()
    const [userPos, setUserPos] = useState(null);
    const [initialPosLoaded, setInitialPosLoaded] = useState(false);
    const [loading, setLoading] = useState(true);
    const accuracyRadius = 50;
    const [isStarted, setIsStarted] = useState(false);

    // Watch user location
    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                // setUserPos([latitude, longitude]);
                const newPos = [latitude, longitude];
                setUserPos((prevPos) => {
                    if (!initialPosLoaded && prevPos === null) {
                        setInitialPosLoaded(true);
                    }
                    return newPos;
                });
                if (!initialPosLoaded) setInitialPosLoaded(true);
            },
            (err) => console.error("Geolocation error:", err),
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 5000,
            }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    // Reset when route ID changes
    useEffect(() => {
        console.log("Resetting tracking...");
        setInitialPosLoaded(false);
        setLoading(true);
    }, [id]);

    useEffect(() => {
        setLoading(true);
        getInstance.get(`/stations/${id}`)
            .then((response) => {
                setStation(response.data?.data || {});
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [id]);

    // Loading screen
    if (!initialPosLoaded || !station) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div class="flex items-center justify-center min-h-screen bg-gray-100">
                    <div class="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div class="flex items-center justify-center min-h-screen bg-gray-100">
                        <div class="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    </div>
                </div>
            )}
            <Layout>
                <div className="lg:w-custom w-[95%] flex justify-between absolute top-5 left-1/2 -translate-x-1/2 z-10">
                    <Link to="/home">
                        <div className="p-3 bg-white rounded-full">
                            <img className="w-[21px] h-[21px]" src={leftarrow} alt="" />
                        </div>
                    </Link>
                    {/* <div className="p-3 bg-blue rounded-full">
              <img className="w-[21px] h-[21px]" src={phone} alt="" />
            </div> */}
                </div>
                <MapContainer center={userPos} zoom={13} style={{ height: "100vh", width: "100%", zIndex: "8" }}
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <UserLocationZoom userPos={userPos} />
                    <Routing
                        from={{ lat: userPos[0], lng: userPos[1] }}
                        to={{ lat: station.lat, lng: station.lng }}
                        setLoading={setLoading}
                        setIsStarted={setIsStarted}
                    />
                    <Marker
                        position={{ lat: station.lat, lng: station.lng }}
                        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41], className: "bg-red" })}
                    >
                        <Popup  >You are here</Popup>
                    </Marker>
                    {
                        !isStarted &&

                        <Marker
                            position={{ lat: userPos[0], lng: userPos[1] }}
                            icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                        >
                            <Popup  >You are here</Popup>
                        </Marker>
                    }
                </MapContainer>
            </Layout>
        </>
    );
};

export default Tracking;
