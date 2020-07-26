<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>{{ component | capitalize }} | Add</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block" style="float: right">
          <router-link :to="href" v-if="href">
            <b-button
              v-b-modal.modalright
              variant="primary"
              size="lg"
              class="top-right-button"
            >Back to List
            </b-button>
          </router-link>
        </b-nav>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <template>
      <b-row>
        <b-colxx xxs="12">
          <b-row>

            <b-colxx xxs="12" xs="12" lg="8">
              <b-card class="mb-4" no-body>
                <b-tabs card no-fade>

                  <template v-if="component === 'category'">
                    <b-tab title="Basic Info" active>
                      <b-form-group :label-cols="labelCols" label="Category Name">
                        <b-form-input placeholder="Category Name"></b-form-input>
                      </b-form-group>
                      <DropzoneExample title="Image"/>
                    </b-tab>
                  </template>

                  <template v-if="component === 'item'">
                    <b-tab title="Basic Info" active>
                      <b-form-group :label-cols="labelCols" label="Select Category">
                        <b-form-select :options="categories" plain/>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Item Name">
                        <b-form-input placeholder="Spring Roll"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Price">
                        <b-form-input placeholder="15"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Delivery Time">
                        <b-form-input placeholder="20-30 Mins"></b-form-input>
                      </b-form-group>

                      <b-form-group :label-cols="labelCols" label="Description">
                        <b-form-textarea placeholder="Item Description"></b-form-textarea>
                      </b-form-group>
                      <DropzoneExample title="Image"/>
                    </b-tab>
                  </template>

                  <template v-if="component === 'user'">
                    <b-tab title="Basic Info" active>
                      <b-form-group :label-cols="labelCols" label="Full Name">
                        <b-form-input placeholder="Chandler Bing"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Username">
                        <b-form-input placeholder="chandler"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Phone Number">
                        <b-form-input placeholder="4568327332"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Email Address">
                        <b-form-input placeholder="chandler@example.com"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Password">
                        <b-form-input placeholder="******"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Status">
                        <b-form-select :options="status" plain/>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="User Role">
                        <b-form-select :options="roles" plain/>
                      </b-form-group>
                    </b-tab>
                  </template>

                  <template v-if="component === 'user-role'">
                    <b-tab title="Basic Info" active>
                      <b-form-group :label-cols="labelCols" label="User Role Name">
                        <b-form-input placeholder="Super Admin"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Description">
                        <b-form-textarea placeholder="Description"></b-form-textarea>
                      </b-form-group>
                    </b-tab>
                  </template>

                  <template v-if="component === 'promocode'">
                    <b-tab title="Basic Info" active>
                      <b-form-group :label-cols="labelCols" label="Offer Name">
                        <b-form-input placeholder="GET 20%"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Offer Code">
                        <b-form-input placeholder="GET20"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Offer in Percentage">
                        <b-form-input placeholder="20"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Description">
                        <b-form-textarea placeholder="Description"></b-form-textarea>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Status">
                        <b-form-select :options="status" plain/>
                      </b-form-group>
                    </b-tab>
                  </template>

                  <template v-if="component === 'setting'">
                    <b-tab title="Basic Info" active>
                      <b-form-group :label-cols="labelCols" label="">
                        <img src="/assets/img/logo.png">
                      </b-form-group>
                      <DropzoneExample title="Logo"/>

                      <b-form-group :label-cols="labelCols" label="Site Name">
                        <b-form-input placeholder="Alseek"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Owner Name">
                        <b-form-input placeholder="Joy Saha"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Phone Number">
                        <b-form-input placeholder="98723364223"></b-form-input>
                      </b-form-group>
                      <b-form-group :label-cols="labelCols" label="Email Address">
                        <b-form-input placeholder="info@alseek.com"></b-form-input>
                      </b-form-group>
                    </b-tab>

                    <b-tab title="Payment Method">
                      <table>
                        <thead>
                        <tr>
                          <th>Method</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Paypal</td>
                        </tr>
                        <tr>
                          <td>Cash On Delivery</td>
                        </tr>
                        <tr>
                          <td>Credit Card</td>
                        </tr>
                        </tbody>
                      </table>
                    </b-tab>

                    <b-tab title="Currency">
                      <table>
                        <thead>
                        <tr>
                          <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>USD</td>
                        </tr>
                        <tr>
                          <td>Euro</td>
                        </tr>
                        </tbody>
                      </table>
                    </b-tab>
                  </template>


                  <b-button size="sm" variant="primary" class="mt-4"
                            style="float: right; margin-bottom: 30px; margin-right: 30px">Save
                  </b-button>
                </b-tabs>
              </b-card>
            </b-colxx>
          </b-row>
        </b-colxx>
      </b-row>
    </template>
  </div>
</template>
<script>
  import LayoutHorizontal from "../../../containers/forms/LayoutHorizontal";
  import TabCardExamples from "../../../containers/ui/TabCardExamples";
  import Filters from "./Filters";
  import DropzoneExample from "../../../containers/forms/DropzoneExample";

  export default {
    components: {
      "layout-horizontal": LayoutHorizontal,
      TabCardExamples, DropzoneExample
    },
    props: ['component'],
    filters: {
      capitalize: Filters.capitalize,
    },
    data(props) {
      let component = props.component, base = '/app/', href = base + component + 's/list';
      if (component == 'category') {
        href = base + 'categories/list';
      }
      if (component == 'setting') {
        href = false;
      }
      return {
        href: href,
        createElem: Filters.createElem,
        categories: ["Starters", "Soups", "Sandvich", "Burgers", "Pizza's"],
        labelCols: 3,
        status: ['Active', 'Inactive'],
        roles: ['Super Admin', 'Admin', 'Sales Manager', 'Staff'],
      }
    }

  };
</script>
