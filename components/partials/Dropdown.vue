<template>
  <div class="btn-group">
    <li @click="toggleMenu()" v-bind:class="{ menuActive: this.showMenu }" class="dropdown-toggle" v-if="selectedOption.name !== undefined">
      {{ selectedOption.name | capitalize }}
      <span class="caret"></span>
    </li>
    <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name === undefined">
      {{ placeholderText }}
      <span class="caret"></span>
    </li>
    <ul v-on-clickaway="closeMenu" class="dropdown-menu" v-if="showMenu">
      <li v-for="option in options" :key="option.name">
        <a href="javascript:void(0)" @click="updateOption(option)">
          {{ option.name | capitalize }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
  export default {
    mixins: [ clickaway ],
    data() {
      return {
        selectedOption: {
          name: '',
        },
        showMenu: false,
        placeholderText: 'Please select an item',
      }
    },
    props: {
      options: {
        type: Array,
        required: true
      },
      selected: {
        type: Object,
        required: false
      },
      placeholder: [String]
      },
    created() {
      this.selectedOption = this.selected;
      if (this.placeholder) {
        this.placeholderText = this.placeholder;
      }
    },
    methods: {
      updateOption(option) {
        this.selectedOption = option;
        this.showMenu = false;
        this.$emit('updateOption', this.selectedOption);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      closeMenu() {
        this.showMenu = false
      }
    }
  }
</script>

<style>
.btn-group {
  min-width: 125px;
  width:100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}
.btn-group a:hover {
  text-decoration: none;
}
.dropdown-toggle {
  color: #636b6f;
  min-width: 125px;
  width:100%;
  padding: 6px 5px 8px 8px;
  text-transform: none;
  font-weight: 700;
  border: 0;
  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center calc(100% - 1px);
  background-color: transparent;
  
  float: none;
  box-shadow: none;
  border-radius: 0;
}
.dropdown-toggle:hover, .menuActive {
  background-image: linear-gradient(#009688, #009688), linear-gradient(#106bdb, #106bdb);
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 125px;

  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #454545;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.1);
  background-clip: padding-box;
}
.dropdown-menu > li > a {
  padding: 8px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: white;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  text-decoration: underline;
}
.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}
.caret {
  display: relative;
  width: 0;
  position: relative;
  top: 10px;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  float: right;
}
li {
    list-style: none;
}
</style>