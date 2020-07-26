<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>Magdalena Cake</h1>

        <piaf-breadcrumb/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12" xl="8" class="col-left">
        <b-card class="mb-4" no-body>
          <b-card-body>
            <glide-component-thumbs
              :settingsImages="{ bound: true, rewind: false, focusAt: 0, startAt: 0, gap: 5, perView: 1, data: detailImages}"
              :settingsThumbs="{ bbound: true, rewind: false, focusAt: 0, startAt: 0, gap: 10, perView: 5, data: detailThumbs, breakpoints: { 576: { perView: 4 }, 420: { perView: 3 } } }"/>
          </b-card-body>
        </b-card>

        <b-card class="mb-4" no-body>
          <b-tabs card no-fade>
            <b-tab title="Description" active>
              <b-row>
                <b-colxx sm="12">
                  <b-card-text>
                    <p class="font-weight-bold">Category</p>
                    <p>Starters</p>

                  </b-card-text>
                  <b-card-text>
                    <p class="font-weight-bold">Price</p>
                    <p>$15</p>
                  </b-card-text>
                  <b-card-text>
                    <p class="font-weight-bold">Delivery Time</p>
                    <p>15-20 Mins</p>
                  </b-card-text>

                  <b-card-text>
                    <p class="font-weight-bold">Product Details</p>
                    <p>Spring rolls are a large variety of filled, rolled appetizers or dim sum found in East Asian,
                      South Asian, Middle Eastern and Southeast Asian cuisine. The name is a literal translation of the
                      Chinese chūn juǎn.</p>
                  </b-card-text>
                </b-colxx>
              </b-row>
            </b-tab>

            <b-tab title="Reviews (6)">
              <b-row>
                <b-colxx sm="12">
                  <b-card-text>
                    <question-answer v-for="(item,index) in detailsQuestionsData" :data="item"
                                     :key="`question_${index}`"></question-answer>
                  </b-card-text>
                </b-colxx>
              </b-row>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-colxx>

    </b-row>
  </div>
</template>

<script>
  import GlideComponentThumbs from '../../../components/Carousel/GlideComponentThumbs'
  import CommentWithLikes from '../../../containers/pages/CommentWithLikes'
  import QuestionAnswer from '../../../containers/pages/QuestionAnswer'
  import GalleryDetail from '../../../containers/pages/GalleryDetail'

  import {
    detailImages,
    detailThumbs
  } from "../../../data/carouselItems";
  import {
    commentWithLikesData
  } from "../../../data/comments"
  import {
    detailsQuestionsData
  } from "../../../data/questions";

  export default {
    components: {
      'glide-component-thumbs': GlideComponentThumbs,
      'comment-with-likes': CommentWithLikes,
      'question-answer': QuestionAnswer,
      'gallery-detail': GalleryDetail,
    },
    data() {
      return {
        isLoad: false,
        detailImages,
        detailThumbs,
        tableItems: [{
          id: 1,
          first_name: 'Mark',
          last_name: 'Otto',
          username: '@mdo'
        },
          {
            id: 2,
            first_name: 'Jacob',
            last_name: 'Thornton',
            username: '@fat'
          },
          {
            id: 3,
            first_name: 'Lary',
            last_name: 'the Bird',
            username: '@twitter'
          }
        ],
        commentWithLikesData,
        detailsQuestionsData,
      }
    },
    methods: {},
    mounted() {
      setTimeout(() => {
        this.isLoad = true
      }, 50)
    }
  }
</script>
