<template>
  <router-link :to="routerLink">
    <b-card class="progress-banner" no-body v-bind:style="{'background': background}">

      <b-card-body class="justify-content-between d-flex flex-row align-items-center">

        <div>
          <div>
            <p class="lead text-white" v-if=title><b>{{ title }}</b></p>
            <p class="lead text-white" v-if="detail"><b>{{ detail }}</b></p>
          </div>
        </div>
        <div class="progress-bar-circle progress-bar-banner position-relative">
          <p class="lead text-white details2" v-if="detail2"><b>{{ detail2 }}</b></p>
          <i :class="`${icon} mr-2 text-white align-text-bottom d-inline-block`"/>
        </div>

      </b-card-body>
    </b-card>
  </router-link>
</template>
<style>
  p.lead.text-white.details2 {
    padding-top: 20px;
  }
</style>
<script>
  import RadialProgressBar from 'vue-radial-progress'

  export default {
    components: {
      'radial-progress-bar': RadialProgressBar
    },
    props: ['icon', 'title', 'detail', 'percent', 'progressText', 'detail2', 'background', 'route'],
    data(props) {
      let routerLink = props.route ? '/app/' + props.route + '/list' : '#';
      return {
        routerLink: routerLink,
        diameterDefault: 125,
        strokeWidthDefault: 5,
        diameter: this.diameterDefault,
        strokeWidth: this.strokeWidthDefault
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleWindowResize)
      this.handleWindowResize()
    },
    methods: {
      handleWindowResize(event) {
        if (event && !event.isTrusted) {
          return
        }
        const windowWidth = window.innerWidth
        if (windowWidth <= 1200) {
          this.diameter = 84
          this.strokeWidth = 2
        } else {
          this.diameter = this.diameterDefault
          this.strokeWidth = this.strokeWidthDefault
        }
      }
    }
  }
</script>
