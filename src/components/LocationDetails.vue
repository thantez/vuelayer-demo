<template>
  <div class="container">
    <div class="mt-4">
      <h5 class="is-size-5 is-size-6-mobile has-text-weight-bold">
          map
      </h5>
      <div class="mt-2">
        <Map :center="[51.666500, 32.614427]"/>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map.vue';

export default {
  name: 'LocationDetails',
  components: {
    Map,
  },
};

</script>
