<template>
  <div class="disable-text-selection">
    <ItemDetails v-if="component == 'item'"/>
    <Invoice v-if="component == 'order'"/>
  </div>
</template>

<script>
  import Invoice from "./Invoice";
  import ItemDetails from "./ItemDetails";

  export default {
    components: {
      Invoice, ItemDetails
    },
    props: ['component'],
    data(props) {
      let component = props.component, base = '/app/', href = base + component + 's/list';
      return {};
    },
    mounted() {

    }
  };
</script>
