import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

const UserLocationZoom = ({ userPos, zoom = 17 }) => {
    const map = useMap();
    const hasZoomed = useRef(false);

    useEffect(() => {
        if (userPos && !hasZoomed.current) {
            map.flyTo(userPos, zoom, {
                animate: true,
                duration: 2.0,
                easeLinearity: 0.25
            });
            hasZoomed.current = true;
        }
    }, [userPos]);

    return null;
};

export default UserLocationZoom;