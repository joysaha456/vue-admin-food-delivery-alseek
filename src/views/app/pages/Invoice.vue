<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.invoice')" exports="exports"/>

        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <b-row class="invoice-vue">
      <b-colxx xxs="12" class="mb-5">
        <b-card class="mb-5 invoice-contents" no-body>
          <b-card-body class="d-flex flex-column justify-content-between">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row justify-content-between pt-2 pb-2">
                <div class="d-flex align-self-center">
                  <img src="/assets/img/logo.png"/>
                </div>
                <div class="d-flex w-30 text-right align-self-center">
                  <p class="text-small text-semi-muted mb-0">Joy Saha Inc 35 Little Russell St. Bloomsburg
                    London,UK<br/>784 451 12 47</p>
                </div>
              </div>
              <div class="border-bottom pt-4 mb-5"></div>

              <div class="d-flex flex-row justify-content-between mb-5">
                <div class="d-flex flex-column w-70 mr-2 p-4 text-semi-muted bg-semi-muted">
                  <p class="mb-0">Latashia Nagy</p>
                  <p class="mb-0">100-148 Warwick Trfy, Kansas City, USA</p>
                </div>
                <div class="d-flex w-30 flex-column text-right p-4 text-semi-muted bg-semi-muted">
                  <p class="mb-0">Invoice #: 741</p>
                  <p class="mb-0">02.02.2019</p>
                </div>
              </div>

              <table class="table table-borderless">
                <thead>
                <tr>
                  <th class="text-muted text-extra-small mb-2">ITEM NAME</th>
                  <th class="text-muted text-extra-small mb-2">UNIT PRICE</th>
                  <th class="text-muted text-extra-small mb-2">QUANTITY</th>
                  <th class="text-right text-muted text-extra-small mb-2">TOTAL</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Marble Cake</td>
                  <td>$12</td>
                  <td>3 pcs</td>
                  <td class="text-right">$36</td>
                </tr>
                <tr>
                  <td>Chocolate Cake</td>
                  <td>$25</td>
                  <td>2 pcs</td>
                  <td class="text-right">$50</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="d-flex flex-column">
              <div class="border-bottom pt-3 mb-5"></div>
              <table class="table table-borderless d-flex justify-content-end">
                <tbody>
                <tr>
                  <td class="text-semi-muted">Subtotal :</td>
                  <td class="text-right">$86</td>
                </tr>
                <tr>
                  <td class="text-semi-muted">Delivery Charge :</td>
                  <td class="text-right">$15</td>
                </tr>
                <tr>
                  <td class="text-semi-muted">Discount (GET20) :</td>
                  <td class="text-right">$10</td>
                </tr>
                <tr class="font-weight-bold">
                  <td class="text-semi-muted">Total :</td>
                  <td class="text-right">$91</td>
                </tr>
                </tbody>
              </table>
              <div class="border-bottom pt-3 mb-5"></div>
              <p class="text-muted text-small text-center">Invoice was created on a computer and is valid without the
                signature and seal. </p>
            </div>

          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>
<style>
  .card-body {
    flex: unset;
  }

  .invoice-vue .invoice-contents {
    height: unset;
  }
</style>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
