import "./App.css";
import "ol/ol.css";
import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import OSM from "ol/source/OSM.js";
import { useEffect, useRef } from "react";

function App() {
  const mapRef = useRef(null);
  function zoomOut() {
    const view = mapRef.current.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom - 1);
  }

  function zoomIn() {
    const view = mapRef.current.getView();
    const zoom = view.getZoom();
    view.setZoom(zoom + 1);
  }

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return (
    <>
      <div className="header">헤더</div>
      <div id="map"></div>
      <button id="zoom-out" onClick={zoomOut}>
        Zoom out
      </button>
      <button id="zoom-in" onClick={zoomIn}>
        Zoom in
      </button>
    </>
  );
}

export default App;
