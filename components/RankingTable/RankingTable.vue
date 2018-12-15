<template>
  <div class="component-ranking-table">
    <div class="wrapper">
      <div>
      </div>
      <div class="table">
        <!--<div class="table-top-wrapper">
        <RankingTableTime/>
        </div>-->
        <div class="table-header">
          <div class="table-row">
            <div v-if="display_columns.rank_24h" class="table-head col-rank">
              <RankHead :sort="true" :time="'last_day'"/>
            </div>
            <div v-if="display_columns.rank_7d" class="table-head col-rank">
              <RankHead :sort="true" :time="'last_week'"/>
            </div>
            <div v-if="display_columns.name" class="table-head col-name">
              <NameHead/>
            </div>
            <div v-if="display_columns.app_type" class="table-head col-app-type">
              <AppTypeHead/>
            </div>
            <div v-if="display_columns.category" class="table-head col-category">
              <CategoryHead/>
            </div>
            <div v-if="display_columns.users_24h" class="table-head col-dau">
              <DauHead :sort="true" :time="'last_day'"/>
            </div>
            <div v-if="display_columns.users_7d" class="table-head col-dau">
              <DauHead :sort="true" :time="'last_week'"/>
            </div>
            <div v-if="display_columns.tx_24h" class="table-head col-tx">
              <TxHead :sort="true" :time="'last_day'"/>
            </div>
            <div v-if="display_columns.tx_7d" class="table-head col-tx col-tx-7d">
              <TxHead :sort="true" :time="'last_week'"/>
            </div>
            <div v-if="display_columns.volume_steem_24h" class="table-head col-vol">
              <VolumeHead :sort="true" :asset="'STEEM'" :time="'last_day'"/>
            </div>
            <div v-if="display_columns.volume_steem_7d" class="table-head col-vol">
              <VolumeHead :sort="true" :asset="'STEEM'" :time="'last_week'"/>
            </div>
            <div v-if="display_columns.volume_sbd_24h" class="table-head col-vol col-vol-sbd">
              <VolumeHead :sort="true" :asset="'SBD'" :time="'last_day'"/>
            </div>
            <div v-if="display_columns.volume_sbd_7d" class="table-head col-vol col-vol-sbd">
              <VolumeHead :sort="true" :asset="'SBD'" :time="'last_week'"/>
            </div>
            <div v-if="display_columns.rewards_steem_24h" class="table-head col-rewards col-rewards-steem">
              <RewardsHead :sort="true" :asset="'STEEM'" :time="'last_day'"/>
            </div>
            <div v-if="display_columns.rewards_steem_7d" class="table-head col-rewards col-rewards-steem">
              <RewardsHead :sort="true" :asset="'STEEM'" :time="'last_week'"/>
            </div>
            <div v-if="display_columns.rewards_sbd_24h" class="table-head col-rewards col-rewards-sbd">
              <RewardsHead :sort="true" :asset="'SBD'" :time="'last_day'"/>
            </div> 
            <div v-if="display_columns.rewards_sbd_7d" class="table-head col-rewards col-rewards-sbd">
              <RewardsHead :sort="true" :asset="'SBD'" :time="'last_week'"/>
            </div> 
          </div>
        </div>
        <div class="table-body">
          <p
            v-if="!isLoading && !apps.length"
            class="no-results">
            There are currently no DApps for this category
          </p>
          <template
            v-for="app in apps"
            class="table-row">
            <div
              v-if="true || app.rank"
              :key="app._id"
              class="table-row">
              <div v-if="display_columns.rank_24h" class="table-data col-rank">
                <RankBody :rank="app.rank.last_day || apps.indexOf(app) + 1"/>
              </div>
              <div v-if="display_columns.rank_7d" class="table-data col-rank">
                <RankBody :rank="app.rank.last_week || apps.indexOf(app) + 1"/>
              </div>
              <div v-if="display_columns.name" class="table-data col-name">
                <NameBody
                  :image="app.image"
                  :name="app.name"
                  :description="app.description"
                  :main_account="app.main_account"
                  :display_name="app.display_name"
                  :link="app.link"
                  :ref_link="app.ref_link"
                  :app_type="app.app_type"/>
              </div>
              <div v-if="display_columns.app_type" class="table-data col-app-type">
                <AppTypeBody
                  :app_type="app.app_type"/>
              </div>
              
              <div v-if="display_columns.category" class="table-data col-category">
                <media :query="{maxWidth: min_width_header }">
                  <span class="label-category">Category: </span>
                </media>
                <CategoryBody
                  :category="app.category || ''"/>
              </div>
              <!-- DAU -->
              <div v-if="display_columns.users_24h" class="table-data col-dau">
                <media :query="{maxWidth: min_width_header }">
                  <span>Users 24h</span>
                </media>
                <ValueBody
                  :value="app.dau.last_day"
                  :value_pct="app.dau.change_last_day"/>
              </div>
              <div v-if="display_columns.users_7d" class="table-data col-dau col-dau-7d">
                <media :query="{maxWidth: min_width_header }">
                  <span>Users 7d</span>
                </media>
                <ValueBody
                  :value="app.dau.last_week"
                  :value_pct="app.dau.change_last_week"/>
              </div>
              <!-- TX -->
              <div v-if="display_columns.tx_24h" class="table-data col-tx">
                <media :query="{maxWidth: min_width_header }">
                  <span>Tx (24H)</span>
                </media>
                <ValueBody
                  :value="app.tx.last_day"
                  :value_pct="app.tx.change_last_day"/>
              </div>
              <div v-if="display_columns.tx_7d" class="table-data col-tx col-tx-7d">
                <media :query="{maxWidth: min_width_header }">
                  <span>Tx (7D)</span>
                </media>
                <ValueBody
                  :value="app.tx.last_week"
                  :value_pct="app.tx.change_last_week"/>
              </div>
              <!-- Volume STEEM -->
              <div v-if="display_columns.volume_steem_24h" class="table-data col-vol">
                <media :query="{maxWidth: min_width_header }">
                  <span>Volume STEEM</span>
                </media>
                <VolumeBody
                  :asset="'STEEM'"
                  :value="app.volume.steem.last_day"
                  :value_pct="app.volume.steem.change_last_day"/> 
              </div>
              <div v-if="display_columns.volume_steem_7d" class="table-data col-vol">
                <media :query="{maxWidth: min_width_header }">
                  <span>Volume STEEM</span>
                </media>
                <VolumeBody
                  :asset="'STEEM'"
                  :value="app.volume.steem.last_week"
                  :value_pct="app.volume.steem.change_last_week"/> 
              </div>
              <!-- Volume SBD -->
              <div v-if="display_columns.volume_sbd_24h" class="table-data col-vol col-vol-sbd">
                <media :query="{maxWidth: min_width_header }">
                  <span>Volume SBD</span>
                </media>
                <VolumeBody
                  :asset="'SBD'"
                  :value="app.volume.sbd.last_day"
                  :value_pct="app.volume.sbd.change_last_day"/>
              </div>
              <div v-if="display_columns.volume_sbd_7d" class="table-data col-vol col-vol-sbd">
                <media :query="{maxWidth: min_width_header }">
                  <span>Volume SBD</span>
                </media>
                <VolumeBody
                  :asset="'SBD'"
                  :value="app.volume.sbd.last_week"
                  :value_pct="app.volume.sbd.change_last_week"/>
              </div>
              <!-- Rewards STEEM -->
              <div v-if="display_columns.rewards_steem_24h" class="table-data col-rewards col-rewards-steem">
                <media :query="{maxWidth: min_width_header }">
                  <span>Rewards STEEM</span>
                </media>
                <VolumeBody
                  :asset="'STEEM'"
                  :value="app.rewards.steem.last_day"
                  :value_pct="app.rewards.steem.change_last_day"/>
              </div>
              <div v-if="display_columns.rewards_steem_7d" class="table-data col-rewards col-rewards-steem">
                <media :query="{maxWidth: min_width_header }">
                  <span>Rewards STEEM</span>
                </media>
                <VolumeBody
                  :asset="'STEEM'"
                  :value="app.rewards.steem.last_week"
                  :value_pct="app.rewards.steem.change_last_week"/>
              </div>
              <!-- Rewards SBD -->
              <div v-if="display_columns.rewards_sbd_24h" class="table-data col-rewards col-rewards-sbd">
                <media :query="{maxWidth: min_width_header }">
                  <span>Rewards SBD</span>
                </media>
                <VolumeBody
                  :asset="'SBD'"
                  :value="app.rewards.sbd.last_day"
                  :value_pct="app.rewards.sbd.change_last_day"/>
              </div>
              <div v-if="display_columns.rewards_sbd_7d" class="table-data col-rewards col-rewards-sbd">
                <media :query="{maxWidth: min_width_header }">
                  <span>Rewards SBD</span>
                </media>
                <VolumeBody
                  :asset="'SBD'"
                  :value="app.rewards.sbd.last_week"
                  :value_pct="app.rewards.sbd.change_last_week"/>
              </div>
            </div>
          </template>
        </div>
      </div>
      <!--<BasePager
        v-if="!isLoading"
        :limit="pager.limit"
        :offset="pager.offset"
        :total-count="pager.totalCount"
        @selectPage="selectPage"/>-->
    </div>
  </div>
</template>

<script>

import RankHead from './head/RankHead'
import DauHead from './head/DauHead'
import TxHead from './head/TxHead'
import NameHead from './head/NameHead'
import VolumeHead from './head/VolumeHead'
import CategoryHead from './head/CategoryHead'
import AppTypeHead from './head/AppTypeHead.vue'
import RewardsHead from './head/RewardsHead.vue'

import RankBody from './body/RankBody'
import DauBody from './body/DauBody'
import TxBody from './body/TxBody'
import NameBody from './body/NameBody'
import VolumeBody from './body/VolumeBody'
import CategoryBody from './body/CategoryBody'
import ValueBody from './body/ValueBody'
import AppTypeBody from './body/AppTypeBody.vue'
import RewardsBody from './body/RewardsBody.vue'

import RankingTableTime from './RankingTableTime.vue'

import Media from 'vue-media'
import { mapGetters } from 'vuex'

export default {
  props: {
    apps: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    pager: {
      type: Object,
      required: false
    }
  },
  computed: {
    display_columns() {
      return this.$store.getters['apps/rankings/display_columns']
    },
  },
  data() {
    return {
      tweakpoint: 60,//1050,
      min_width_header: 850
    }
  },
  components: {
    Media, ValueBody, RankHead, DauHead, TxHead, NameHead, VolumeHead, CategoryHead, RankBody, DauBody, TxBody, NameBody, VolumeBody, CategoryBody, AppTypeHead, AppTypeBody, RewardsHead, RewardsBody, RankingTableTime
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';
.table {
  max-width: 1200px;
  margin: 0 auto;
}

.label-category {
  margin-right:5px;
}

.table-data {
  margin: 0;
  text-align: inherit;
}

.table-head {
  padding: 0;
  margin: 0;
  text-align: initial;
}

.col-category {
  width: 90px;
  padding: 0 10px;
}

.col-dau {
  width: 90px;
  text-align: right;
  padding: 0 10px;
}

.col-tx {
  width: 125px;
  text-align: right;
  padding: 0 10px;
}

.col-name {
  flex: 1;
}

.col-app-type {
  width:90px;
  display:flex;
  justify-content: center;
}

.col-vol {
  width: 125px;
  text-align: right;
  padding: 0 10px;
}

.col-rewards {
  width: 125px;
  text-align: right;
}

.col-rank {
  width: 50px;
  margin-right: 15px;
}

.table-header {
  margin: 0 -10px;
  padding: 5px 10px 15px 10px;
  background: $color--gray;
  position: sticky;
  top: 0;
  .table-row {
    box-shadow: none;
    border-radius: 0;
    background: $color--gray;
    margin-bottom: 0;
  }
}

.table-row {
  background: $color--white;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba($color--black, 0.1);
  margin-bottom: 8px;
  padding-right:15px;
  display: flex;
  flex-flow:row wrap;
  align-items: center;
}

.table-top-wrapper {
  width: 100%;
  display:flex;
  justify-content: flex-end;
}

.wrapper {
  @include margin-wrapper-main;
}

/deep/ .head-link {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #d5d5d5;
  background: transparent;
  padding: 0;
  text-decoration: none;
  &.is-active {
    background: transparent;
    font-weight: 500;
    border-bottom: 1px solid #c7c7c7;
  }
}

.col-dau-7d {
  display:initial;
}

@media (max-width: 1050px) {

  .col-rewards-sbd {
    display: none;
  }
}

@media (max-width: 950px) {
  .col-vol-sbd {
    display: none;
  }

}

@media (max-width: 850px) {
  .table-header {
    display:none;
  }
  .col-vol-sbd, .col-dau-7d, .col-rewards-steem {
    display: initial;
  }

  .table-row {
    display:flex;
    flex-flow:column;
    padding-bottom:10px;
  }

  .table-data {
    width:100%;
  }

  .col-rank {
    margin-right:0;
  }

  .col-text, .col-dau, .col-vol, .col-tx, .col-name, .col-rewards {
    justify-content: space-between;
    display:flex;
    flex-flow:row;
    padding:5px 20px;
    min-height: 45px;
  }

  .col-category {
    display:flex;
    justify-content: center;
    display:flex;
    padding:5px 5px;
  }

  .component-ranking-table-rank {
    height:50px;
    border-right: none;
  }

  .col-name {
    justify-content: center;
  }

  .component-ranking-table-name {
    margin-right:0;
    justify-content: center;
  }

  .col-category {
    text-align:center;
  }
}
</style>
