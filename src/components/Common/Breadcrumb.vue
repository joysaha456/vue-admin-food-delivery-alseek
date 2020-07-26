<template>
    <span>
      <h1 v-if="heading && heading.length>0">{{ heading }}</h1>

      <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block" style="float: right">
        <Export v-if="exports"/>
           <router-link :to="'/app'">
          <b-button
            v-b-modal.modalright
            variant="primary"
            size="lg"
            class="top-right-button"
          >Home
          </b-button>
        </router-link>
      </b-nav>
    </span>
</template>

<script>
  import Export from "../../views/app/pages/Export";

  export default {
    components: {Export},
    props: ['heading', 'exports'],
    data() {
      return {
        items: []
      }
    },
    methods: {
      getUrl(path, sub, index) {
        var pathToGo = '/' + path.split(sub)[0] + sub
        if (pathToGo === '/app') {
          pathToGo = '/'
        }
        return pathToGo
      }
    },
    mounted() {
      let path = this.$route.path.substr(1)
      let rawPaths = path.split('/')

      for (var pName in this.$route.params) {
        if (rawPaths.includes(this.$route.params[pName])) {
          rawPaths = rawPaths.filter(x => x !== this.$route.params[pName])
        }
      }
      rawPaths.map((sub, index) => {
        this.items.push({
          text: this.$t('menu.' + sub),
          to: this.getUrl(path, sub, index)
        })
      })
    }
  }
</script>
