<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>{{ title | capitalize }}</h1>
      <div class="top-right-button-container">
        <router-link :to="href" v-if="href != ''">
          <b-button
            v-b-modal.modalright
            variant="primary"
            size="lg"
            class="top-right-button"
          >{{ $t('pages.add-new') }}
          </b-button>
        </router-link>
        <b-button-group>
          <b-dropdown split right @click="selectAll(true)" class="check-button" variant="primary">
            <label
              class="custom-control custom-checkbox pl-4 mb-0 d-inline-block"
              slot="button-content"
            >
              <input
                class="custom-control-input"
                type="checkbox"
                :checked="isSelectedAll"
                v-shortkey="{select: ['ctrl','a'], undo: ['ctrl','d']}"
                @shortkey="keymap"
              />
              <span
                :class="{
                'custom-control-label' :true,
                'indeterminate' : isAnyItemSelected
                }"
              >&nbsp;</span>
            </label>
            <b-dropdown-item>{{$t('pages.delete')}}</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
      </div>
      <div class="separator mb-5"/>
    </b-colxx>
  </b-row>
</template>
<script>
  import {
    DataListIcon,
    ThumbListIcon,
    ImageListIcon
  } from "../../components/Svg";
  import AddNewModal from "./AddNewModal";
  import Filters from "../../views/app/pages/Filters";

  export default {
    components: {
      "data-list-icon": DataListIcon,
      "thumb-list-icon": ThumbListIcon,
      "image-list-icon": ImageListIcon,
      "add-new-modal": AddNewModal
    },
    filters: {capitalize: Filters.capitalize},
    props: [
      "title",
      "selectAll",
      "isSelectedAll",
      "isAnyItemSelected",
      "keymap",
      "displayMode",
      "changeDisplayMode",
      "changeOrderBy",
      "changePageSize",
      "sort",
      "searchChange",
      "from",
      "to",
      "total",
      "perPage",
      "component",
    ],
    data(props) {
      let component = props.component, base = '/app/', href = base + component + 's/add';
      if (component == 'category') {
        href = base + 'categories/add';
      }

      return {
        href: href,
        categories: [
          {
            label: "Cakes",
            value: "Cakes"
          },
          {
            label: "Cupcakes",
            value: "Cupcakes"
          },
          {
            label: "Desserts",
            value: "Desserts"
          }
        ],
        statuses: [
          {
            text: "ON HOLD",
            value: "ON HOLD"
          },
          {
            text: "PROCESSED",
            value: "PROCESSED"
          }
        ],
        sortOptions: [
          {
            column: "title",
            label: "Product Name"
          },
          {
            column: "category",
            label: "Category"
          },
          {
            column: "status",
            label: "Status"
          }
        ],
        pageSizes: [4, 8, 12]
      };
    }
  };
</script>
