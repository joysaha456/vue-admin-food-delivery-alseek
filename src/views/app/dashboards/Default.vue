<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb heading="Dashboard"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx lg="12" md="6" xl="">
        <b-row>
          <b-colxx lg="4" xl="3" class="mb-4">
            <gradient-with-radial-progress-card
              background="#787efc"
              icon="simple-icon-list"
              title="Categories"
              detail="6"
              route="categories"
            />
          </b-colxx>
          <b-colxx lg="4" xl="3" class="mb-4">
            <gradient-with-radial-progress-card
              background="#f77692"
              icon="simple-icon-plus"
              title="Total Items"
              detail="21"
              route="items"
            />
          </b-colxx>
          <b-colxx lg="4" xl="3" class="mb-4">
            <gradient-with-radial-progress-card
              background="#f9ac6c"
              icon="iconsminds-user"
              title="Total Users"
              detail="5"
              route="users"
            />
          </b-colxx>
          <b-colxx lg="4" xl="3" class="mb-4">
            <gradient-with-radial-progress-card
              background="#4073ff"
              icon="iconsminds-shopping-cart"
              title="Total Orders"
              detail="15"
              route="orders"
            />
          </b-colxx>
        </b-row>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx lg="12" md="6" xl="">
        <b-row>
          <b-colxx lg="4" xl="4" class="mb-4">
            <gradient-with-radial-progress-card
              background="#96abfe"
              title="TOTAL INCOME"
              detail2="3042.65"/>
          </b-colxx>
          <b-colxx lg="4" xl="4" class="mb-4">
            <gradient-with-radial-progress-card
              background="#44ccf7"
              title="TOTAL PAID"
              detail2="1722.65"
            />
          </b-colxx>
          <b-colxx lg="4" xl="4" class="mb-4">
            <gradient-with-radial-progress-card
              background="#ea98e6"
              title="TOTAL DUE"
              detail2="1320.00"
            />
          </b-colxx>
        </b-row>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx lg="4" xl="4" class="mb-4"></b-colxx>
    </b-row>
    <ListPage component="order"/>
  </div>
</template>

<script>
  import GradientCard from "../../../components/Cards/GradientCard";
  import GradientWithRadialProgressCard from "../../../components/Cards/GradientWithRadialProgressCard";
  import AdvancedSearch from "../../../containers/dashboards/AdvancedSearch";
  import BestSellers from "../../../containers/dashboards/BestSellers";
  import Cakes from "../../../containers/dashboards/Cakes";
  import Calendar from "../../../containers/dashboards/Calendar";
  import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
  import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
  import Logs from "../../../containers/dashboards/Logs";
  import Tickets from "../../../containers/dashboards/Tickets";
  import ProductCategoriesPolarArea from "../../../containers/dashboards/ProductCategoriesPolarArea";
  import ProfileStatuses from "../../../containers/dashboards/ProfileStatuses";
  import RecentOrders from "../../../containers/dashboards/RecentOrders";
  import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
  import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";
  import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
  import TopRatedItems from "../../../containers/dashboards/TopRatedItems";
  import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";
  import ListPage from "../pages/ListPage";

  export default {
    components: {
      ListPage,
      "advanced-search": AdvancedSearch,
      "best-sellers": BestSellers,
      cakes: Cakes,
      calendar: Calendar,
      "converconversion-rates-chart-card": ConversionRatesChartCard,
      "icon-cards-carousel": IconCardsCarousel,
      logs: Logs,
      tickets: Tickets,
      "product-categories-polar-area": ProductCategoriesPolarArea,
      "profile-statuses": ProfileStatuses,
      "recent-orders": RecentOrders,
      "sales-chart-card": SalesChartCard,
      "small-line-charts": SmallLineCharts,
      "sortable-statictics-row": SortableStaticticsRow,
      "top-rated-items": TopRatedItems,
      "website-visit-chart-card": WebsiteVisitsChartCard,
      "gradient-card": GradientCard,
      "gradient-with-radial-progress-card": GradientWithRadialProgressCard
    }
  };
</script>
