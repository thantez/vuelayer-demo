<template>
  <div>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
         data-projection="EPSG:4326" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="coordinates" :rotation.sync="rotation"></vl-view>

      <vl-layer-vector>
        <vl-source-vector>
          <vl-feature id="point">
            <vl-geom-point :coordinates="staticCenter"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon :src="require('@/assets/images/map_marker.png')" :scale="0.08"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </vl-source-vector>
      </vl-layer-vector>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    center: Array,
  },
  data() {
    return {
      zoom: 16,
      rotation: 0,
      geolocPosition: undefined,
      staticCenter: [0, 0],
      coordinates: [0, 0],
    };
  },
  mounted() {
    this.staticCenter = this.center;
    this.coordinates = this.center;
  },
};
</script>
