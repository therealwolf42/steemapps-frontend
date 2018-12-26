<template>
  <div class="component-app-submit">
    <div class="app-submit-wrapper">
      <div v-if="false" class="app-field-status-container">
        <AppFieldStatus :required_fields="required_fields" :current_fields="current_fields"/>
      </div>
      <div class="app-submit-container">
        <h2 class="title">{{ $route.name.includes('edit') ? 'Edit' : 'Submit' }} an App</h2>
      
        <div class="input-container">
          <p class="input-label">App Name <span class="required-tag">(required)</span></p>
          <input class="input" v-model="app.display_name" placeholder="e.g. Steem Monsters"/>
        </div>
        <div class="input-container">
          <p class="input-label">Short Description <span class="required-tag">(required)</span></p>
          <input class="input" v-model="app.short_description" placeholder="e.g. Collectible trading card game"/>
        </div>

        <div class="input-container">
          <p class="input-label">Full Description <span class="required-tag">(required)</span></p>
          <textarea class="textarea" v-model="app.description" placeholder="Steem Monsters is a collectible trading multiplayer card game with design that will make you think of a symbiosis between pokemon card games and World of Warcraft characters. The game has a developed storytelling based on a mystical world. Built on the Steem Blockchain to offer fast transactions and full transparency. Get in the game, conquer a world or solve quests."/>
        </div>

        <div class="input-container">
          <p class="input-label">App URL <span class="required-tag">(required)</span></p>
          <input class="input" v-model="app.link" placeholder="https://steemmonsters.com"/>
        </div>

        <div class="input-container">
          <p class="input-label">Logo URL <span class="required-tag"></span></p>
          <p class="input-description">Dimensions must be at least 192x192</p>
          <input class="input" v-model="app.logo" placeholder="https://imgur.com/..."/>
        </div>

        <div class="input-container">
          <p class="input-label">Product Screenshot URL <span class="required-tag"></span></p>
          <p class="input-description">Dimensions must be 1200x600</p>
          <input class="input" v-model="app.product_screenshot" placeholder="https://imgur.com/..."/>
        </div>

        <div class="input-container">
          <p class="input-label">App Status <span class="required-tag">(required)</span></p>
          <div class="status-container">
            <div v-for="s in status_arr" :key="s" @click="app.status = s">
              <AppStatus :status="s" :selected="app.status === s"/>
            </div>
          </div>
        </div>
        
        <div class="input-container">
          <p class="input-label">App Type <span class="required-tag">(required)</span></p>
          <div class="type-container">
            <div v-for="app_type in app_types" :key="app_type" @click="app.app_type = app_type">
              <AppType :type="app_type" :selected="app.app_type === app_type"/>
            </div>
          </div>
        </div>

        <div class="input-container">
          <p class="input-label">Category <span class="required-tag">(required)</span></p>
          <div class="category-container">
            <div v-for="c in categories" :key="c" @click="app.category = c">
              <AppCategory :category="c" :selected="app.category === c"/>
            </div>
          </div>
        </div>

        <div class="input-container">
          <p class="input-label">Accounts <span class="required-tag">(required)</span></p>
          <p>Add all accounts the app uses</p>
          <ul class="accounts-container">
            <li class="account" v-for="a in app.accounts" :key="a.id">
              <input placeholder="e.g. steemmonsters" v-model="a.name"/>
              <div v-for="acc_type in account_types" :key="acc_type.name">
                <div class="checkbox-container">
                  <input class="checkbox" type="checkbox" v-model="a[acc_type.name]">
                  <label class="checkbox-label" for="checkbox">{{ acc_type.desc }}</label>
                </div>
              </div>
              
            </li>
            <div class="button" @click="addAccount()">
                Add another account
            </div>
          </ul>
        </div>

        <div class="input-container">
          <p class="input-label">Custom JSON <span class="required-tag"></span></p>
          <input class="input" v-model="custom_json" placeholder="e.g. sm_ => for sm_purchase_packs"/>
        </div>
        
        <div class="input-container">
          <p class="input-label">Github <span class="required-tag"></span></p>
          <input class="input" v-model="app.social.github" placeholder="e.g. https://github.com/project"/>
        </div>
        <div class="input-container">
          <p class="input-label">Discord <span class="required-tag"></span></p>
          <input class="input" v-model="app.social.discord" placeholder="e.g. https://discordapp.com/invite/ug4HdcU"/>
        </div>
        <div class="input-container">
          <p class="input-label">Telegram <span class="required-tag"></span></p>
          <input class="input" v-model="app.social.telegram" placeholder="e.g. https://t.me/project"/>
        </div>
        <div class="input-container">
          <p class="input-label">Twitter <span class="required-tag"></span></p>
          <input class="input" v-model="app.social.twitter" placeholder="e.g. https://twitter.com/project"/>
        </div>
        <div style="display:flex; justify-content:center; flex-flow:column;">
          <div class="button lila_button" style="min-width:150px;" @click="submitApp()">
            <span>Submit</span>
          </div>
          <div class="cancel">
            <nuxt-link :to="`/apps/${app.name}`" >
              Cancel
            </nuxt-link>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import AppStatus from './partials/AppStatus.vue'
import AppType from './partials/AppType.vue'
import AppCategory from './partials/AppCategory.vue'
import AppAccount from './partials/AppAccount.vue'
import AppFieldStatus from './partials/AppFieldStatus.vue'
import AppSelect from './partials/AppSelect.vue'
import { convertMissing } from '~/helpers/validators'

export default {
  created() {
    if(this.app.custom_jsons) this.custom_json = this.app.custom_jsons[0]
  },
  components: {
    AppStatus, AppSelect, AppType, AppCategory, AppAccount, AppFieldStatus
  },
  props: {
    categories: {
      type: Object,
      required: true
    },
    app: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      custom_json: '',
      status_arr: ['live', 'beta', 'alpha', 'work-in-progress', 'concept', 'abandoned'],
      app_types: ['app', 'dapp', 'interface', 'project'],
      account_types: [
        {
          name: 'meta',
          desc: 'The accounts name is being used for meta-data (e.g. steemmonsters/0.1)'
        },
        {
          name: 'posting',
          desc: 'The account is being used for posts (e.g. updates, announcements, etc.)'
        },
        {
          name: 'transfer',
          desc: 'The account receives transfers'
        },
        {
          name: 'benefactor',
          desc: 'The account receives benefactor rewards'
        },
        {
          name: 'curation',
          desc: 'The account receives curation rewards'
        },
        {
          name: 'delegation',
          desc: 'The account receives delegations.'
        },
        {
          name: 'logo',
          desc: `The account's image be used as logo (unique)`
        },
      ]
    }
  },
  methods: {
    setStatus(status) {
      this.app.status = status

    },
    addAccount() {
      this.app.accounts.push({
          id: this.app.accounts.length,
          name: '',
          benefactor: false,
          curation: false,
          transfer: false,
          meta: false,
          delegation: false
      })
    },
    async submitApp() {
      let missing_vars = []
      this.app.custom_json = this.custom_json
      let response = await this.$store.dispatch('apps/submit/submitApp', this.app)
      let message = {}
      if(response.status === 200) {
        this.$notify({
          text: 'App Submitted',
          type: 'success'
        })
        this.$router.push('/')
      } else {
        let text = response.data.validation.keys[0] ? `Missing: ${response.data.validation.keys[0]}` : response.data.message
        this.$notify({
          text,
          type: 'error'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-app-submit {
  max-width:900px;
  margin: 0 auto;
  height: 100%;
  padding: 20px 10px;
  width:95%;
  display:flex;
  justify-content: center;
  /*background-color: #e8e8e8;
  margin-top: 25px;*/
}

.app-submit-wrapper {
  display:flex;
  flex-flow: row-reverse;
  width:fit-content;
  
}

.app-submit-container {
  max-width:500px;
}

.app-field-status-container {

}

.title {
  text-align:center;
  font-weight: 700;
  font-size:1.5rem;
}

.textarea {
  min-height:200px;
}

.status-container, .type-container, .category-container {
  display:flex;
  flex-flow:row wrap;
}

.accounts-container {
  padding-left:0;
}

.account {
  display:flex;
  flex-flow:column;
  margin-bottom:20px;
}

.input-description {
  margin-bottom:10px;
}


</style>
