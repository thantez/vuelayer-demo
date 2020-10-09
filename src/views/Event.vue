<template>
  <div class="section">
    <div class="container">
      <div>
        <b-tabs>
          <b-tab-item label="tab" icon="map-marked-alt" icon-pack="fas">
            <p> test </p>
          </b-tab-item>
          <b-tab-item label="tab" icon="map-marked-alt" icon-pack="fas">
            <LocationDetails/>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import LocationDetails from '@/components/LocationDetails.vue';

export default {
  name: 'Event',
  components: {
    LocationDetails,
  },
};
</script>
