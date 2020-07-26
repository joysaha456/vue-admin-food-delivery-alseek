<template>
  <div>
    <datatable-heading
      :title="component + ' List'"
      :selectAll="selectAll"
      :isSelectedAll="isSelectedAll"
      :isAnyItemSelected="isAnyItemSelected"
      :keymap="keymap"
      :href="href"
      :exports="exports"
    ></datatable-heading>

    <b-row>
      <b-colxx xxs="12">
        <vuetable
          ref="vuetable"
          class="table-divided order-with-arrow"
          v-bind:fields="fields"
          :row-class="onRowClass"
          @vuetable:row-clicked="rowClicked"
          @vuetable:cell-rightclicked="rightClicked"
          :api-mode="false"
          :data="localData"
          :is
        >
          <template slot="actions" slot-scope="props">
            <b-form-checkbox
              :checked="selectedItems.includes(props.rowData.id)"
              class="itemCheck mb-0"
            ></b-form-checkbox>
          </template>
        </vuetable>
      </b-colxx>
    </b-row>
  </div>
</template>
<style>
  .vuetable tr td.td-val {
    padding-top: 50px;
  }

  .vuetable tr td.user {
    padding-top: 40px;
  }

  #displayOptions {
    display: none !important;
  }
</style>
<script>
  import Vuetable from "vuetable-2/src/components/Vuetable";
  import DatatableHeading from "../../../containers/datatable/DatatableHeading";
  import {items} from "../../../data/carouselItems";

  let field = (name, title, dataClass = '', titleClass = '') => {
    return {
      name: name,
      sortField: name,
      title: title,
      titleClass: titleClass,
      dataClass: dataClass,
    };
  }
  let imgTag = (path, className = 'list-thumbnail') => {
    return '<img src="' + path + '" class="' + className + '">';
  }

  export default {
    props: {
      component: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: '',
      },
    },

    components: {
      vuetable: Vuetable,
      "datatable-heading": DatatableHeading
    },
    data: function () {
      return {
        href: '',
        localData: [],
        isLoad: false,
        items: items,
        selectedItems: [],
        fields: [],
        exports: '',
      };
    },

    methods: {
      onRowClass(dataItem, index) {
        if (this.selectedItems.includes(dataItem.id)) {
          return "selected";
        }
        return "";
      },

      rowClicked(dataItem, event) {
        const itemId = dataItem.id;
        if (event.shiftKey && this.selectedItems.length > 0) {
          let itemsForToggle = this.items;
          var start = this.getIndex(itemId, itemsForToggle, "id");
          var end = this.getIndex(
            this.selectedItems[this.selectedItems.length - 1],
            itemsForToggle,
            "id"
          );
          itemsForToggle = itemsForToggle.slice(
            Math.min(start, end),
            Math.max(start, end) + 1
          );
          this.selectedItems.push(
            ...itemsForToggle.map(item => {
              return item.id;
            })
          );
          this.selectedItems = [...new Set(this.selectedItems)];
        } else {
          if (this.selectedItems.includes(itemId)) {
            this.selectedItems = this.selectedItems.filter(x => x !== itemId);
          } else this.selectedItems.push(itemId);
        }
      },
      rightClicked(dataItem, field, event) {
        event.preventDefault();
        if (!this.selectedItems.includes(dataItem.id)) {
          this.selectedItems = [dataItem.id];
        }
        this.$refs.contextmenu.show({top: event.pageY, left: event.pageX});
      },

      selectAll(isToggle) {
        if (this.selectedItems.length >= this.items.length) {
          if (isToggle) this.selectedItems = [];
        } else {
          this.selectedItems = this.items.map(x => x.id);
        }
      },
      keymap(event) {
        switch (event.srcKey) {
          case "select":
            this.selectAll(false);
            break;
          case "undo":
            this.selectedItems = [];
            break;
        }
      },
      getIndex(value, arr, prop) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i][prop] === value) {
            return i;
          }
        }
        return -1;
      },
    },
    computed: {
      isSelectedAll() {
        return this.selectedItems.length >= this.items.length;
      },
      isAnyItemSelected() {
        return (
          this.selectedItems.length > 0 &&
          this.selectedItems.length < this.items.length
        );
      },
      getFullPath() {
        return this.$route.path
      },
    },

    watch: {
      component: {
        // Run as soon as the component loads
        immediate: true,
        handler() {
          let localData = '', exports = '';
          let component = this.component, base = '/app/', href = base + component + 's/add',
            detailsHref = base + component + 's/details';
          let fields = [], imgPath = '/assets/img/' + component + '/', dataClass = 'td-val', date = ("22.02.2020");

          let detailsLInk = '<a href="' + detailsHref + '"><i class="glyph-icon simple-icon-eye"></i></a>';

          switch (component) {
            case 'category':
              fields = [
                field('img', 'Image', 'list-thumbnail'),
                field('title', 'Title', dataClass),
              ];

              href = base + 'categories/add';
              localData = {
                "data": [{
                  "id": 1,
                  "img": imgTag(imgPath + "1.jpg"),
                  "title": "Starters",
                  "date": date,
                }, {
                  "id": 2,
                  "img": imgTag(imgPath + "2.jpg"),
                  "title": "Soups",
                  "date": date,
                }, {
                  "id": 3,
                  "img": imgTag(imgPath + "3.jpg"),
                  "title": "Sandvich",
                  "date": date,
                }, {
                  "id": 4,
                  "img": imgTag(imgPath + "4.jpg"),
                  "title": "Burgers",
                  "date": date,
                }, {
                  "id": 5,
                  "img": imgTag(imgPath + "5.jpeg"),
                  "title": "Pizza's",
                  "date": date,
                },
                ]
              };

              break;
            case 'item':
              fields = [
                field('img', 'Image', 'list-thumbnail'),
                field('cat', 'Category', dataClass),
                field('title', 'Title', dataClass),
                field('price', 'Price', dataClass),
                field('delivery', 'Delivery Time', dataClass),
                field('view', 'Details', dataClass),
              ];
              let mins = ' Mins';
              localData = {
                "data": [{
                  "id": 1,
                  "img": imgTag(imgPath + "1.jpg"),
                  "cat": "Starters",
                  "title": "Spring Roll",
                  "price": 15,
                  "delivery": '20-30' + mins,
                  "date": date,
                  "view": detailsLInk,
                }, {
                  "id": 2,
                  "img": imgTag(imgPath + "2.jpg"),
                  "cat": "Soups",
                  "title": "Chilly Paneer Dry",
                  "price": 10,
                  "delivery": '20-30' + mins,
                  "date": date,
                  "view": detailsLInk,
                }, {
                  "id": 3,
                  "img": imgTag(imgPath + "3.jpg"),
                  "cat": "Sandvich",
                  "title": "Veg. Manchurian Dry",
                  "price": 7.25,
                  "delivery": '30-50' + mins,
                  "date": date,
                  "view": detailsLInk,
                }, {
                  "id": 4,
                  "img": imgTag(imgPath + "4.jpeg"),
                  "cat": "Burgers",
                  "title": "Potatoes in Honey & Chilly",
                  "price": 100,
                  "delivery": '15-20' + mins,
                  "date": date,
                  "view": detailsLInk,
                }, {
                  "id": 5,
                  "img": imgTag(imgPath + "5.jpg"),
                  "cat": "Pizza's",
                  "title": "Fried Vegetables in Salt & Papper",
                  "price": 120,
                  "delivery": '15-20' + mins,
                  "date": date,
                  "view": detailsLInk,
                },
                ]
              };

              break;
            case 'user':
              dataClass = 'user';
              fields = [
                field('info', 'Person Info'),
                field('title', 'Username', dataClass),
                field('role', 'User Role', dataClass),
                field('status', 'Status', dataClass),
              ];

              localData = {
                "data": [
                  {
                    "id": 1,
                    "info": '<b>Chandler Bing</b><br>chandler@alseek.com<br>4568327332',
                    "title": "chandler",
                    "role": "Super Admin",
                    "status": 'Active',
                    "date": date,
                  }, {
                    "id": 2,
                    "info": '<b>Charlie Harper</b><br>charlie@alseek.com<br>1234567890',
                    "title": "charlie",
                    "role": "Admin",
                    "status": 'Active',
                    "date": date,
                  }, {
                    "id": 3,
                    "info": '<b>Donna Paulsen</b><br>donna@alseek.com<br>4568327332',
                    "title": "donna",
                    "role": "Staff",
                    "status": 'Inactive',
                    "date": date,
                  }, {
                    "id": 4,
                    "info": '<b>Jake Harper</b><br>jake@alseek.com<br>4568327332',
                    "title": "jake",
                    "role": "Sales Manager",
                    "status": 'Active',
                    "date": date,
                  }, {
                    "id": 5,
                    "info": '<b>Michael Ross</b><br>michael@alseek.com<br>4568327332',
                    "title": "michael",
                    "role": "Staff",
                    "status": 'Active',
                    "date": date,
                  },
                ]
              };
              break;
            case 'user-role':
              dataClass = '';
              fields = [
                field('title', 'User Role Name'),
              ];

              localData = {
                "data": [
                  {
                    "id": 1,
                    "title": "Super Admin",
                    "date": date,
                  }, {
                    "id": 2,
                    "title": "Admin",
                    "date": date,
                  }, {
                    "id": 3,
                    "title": "Sales Manager",
                    "date": date,
                  }, {
                    "id": 4,
                    "title": "Staff",
                    "date": date,
                  }
                ]
              };
              break;
            case 'order':
              dataClass = '';
              href = '';
              fields = [
                field('order', '#Order No'),
                field('user', 'Customer'),
                field('address', 'Address'),
                field('amount', 'Amount'),
                field('type', 'Payment Type'),
                field('status', 'Order Status'),
                field('view', 'Details'),
              ];
              let order = 'asf-order-';
              localData = {
                "data": [
                  {
                    "id": 1,
                    "order": order + 1,
                    "user": "Chandler Bing | chandler@gmail.com",
                    "address": "Lane 1, Floor, City, Country",
                    "amount": 200,
                    "type": "Online",
                    "status": "Delivered",
                    "date": date,
                    "view": detailsLInk,
                  }, {
                    "id": 2,
                    "order": order + 2,
                    "user": "Charlie Harper | charlie@gmail.com",
                    "address": "Lane 1, Floor, City, Country",
                    "amount": 50,
                    "type": "COD",
                    "status": "Delivered",
                    "date": date,
                    "view": detailsLInk,
                  }, {
                    "id": 3,
                    "order": order + 3,
                    "user": "Donna Paulsen | donna@gmail.com",
                    "address": "Lane 1, Floor, City, Country",
                    "amount": 350,
                    "type": "Online",
                    "status": "Cancelled",
                    "date": date,
                    "view": detailsLInk,
                  }, {
                    "id": 4,
                    "order": order + 1,
                    "user": "Jake Harper | jake@gmail.com",
                    "address": "Lane 1, Floor, City, Country",
                    "amount": 25,
                    "type": "Online",
                    "status": "Delivered",
                    "date": date,
                    "view": detailsLInk,
                  }, {
                    "id": 1,
                    "order": order + 1,
                    "user": "Michael Ross | michael@gmail.com",
                    "address": "Lane 1, Floor, City, Country",
                    "amount": 33,
                    "type": "COD",
                    "status": "Progress",
                    "date": date,
                    "view": detailsLInk,
                  },
                ]
              };
              break;
            case 'promocode':
              dataClass = '';
              fields = [
                field('title', 'Offer Name'),
                field('code', 'Offer Code'),
                field('percent', 'Offer in Percentage'),
                field('desc', 'Description'),
                field('status', 'Offer Status'),
              ];

              localData = {
                "data": [
                  {
                    "id": 1,
                    "title": "GET 20%",
                    "code": "GET20",
                    "percent": 20,
                    "desc": "Apply GET20 you'll get 20% off in your Order",
                    "status": "Enabled",
                    "date": date,
                  }, {
                    "id": 2,
                    "title": "GET 50%",
                    "code": "GET50",
                    "percent": 50,
                    "desc": "Apply GET50 you'll get 50% off in your Order",
                    "status": "Disabled",
                    "date": date,
                  },
                ]
              };
              break;

            case 'review':
              dataClass = '';
              fields = [
                field('f1', 'Name'),
                field('f2', 'Ratting'),
                field('f3', 'Comment'),
              ];
              let star = '<i class="simple-icon-star"></i> ';
              href = '';
              localData = {
                "data": [
                  {
                    "id": 1,
                    "f1": 'chandler@gmail.com',
                    "f2": star + '5',
                    "f3": "nice",
                    "date": date,
                  }, {
                    "id": 2,
                    "f1": 'charlie@gmail.com',
                    "f2": star + '5',
                    "f3": "test",
                    "date": date,
                  }, {
                    "id": 3,
                    "f1": 'donna@gmail.com',
                    "f2": star + '4',
                    "f3": "nice",
                    "date": date,
                  }, {
                    "id": 4,
                    "f1": 'jake@gmail.com',
                    "f2": star + '3',
                    "f3": "great",
                    "date": date,
                  }, {
                    "id": 5,
                    "f1": 'michael@gmail.com',
                    "f2": star + '1',
                    "f3": "nice",
                    "date": date,
                  },

                ]
              };
              break;
            default:
          }
          exports = true;
          fields.push(field('date', 'Created At', dataClass), field('__slot:actions', '', '' + dataClass));

          // Set the 'somevar' value as props
          this.href = href;
          this.fields = fields;
          this.localData = localData;
          this.exports = exports;
          this.$nextTick(() => {
            this.$refs.vuetable.normalizeFields();
          })
        }
      }
    },
  };
</script>
