import mapboxgl from "mapbox-gl";
import React, { useEffect, useContext } from "react";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-122.2015, 47.6101],
      zoom: 11,
    });
  }, []);
  return <div className={style.wrapper} id="map" />;
};

export default Map;
