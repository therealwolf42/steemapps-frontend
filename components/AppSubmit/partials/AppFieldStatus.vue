<template>
  <div class="component-app-fieldstatus">
    <h3>Current Profile Strength: {{ Math.round(current_fields / required_fields) }}%</h3>
    <div class="fieldstatus-wrapper">
      <ProgressBar class="progress" :percentage="Math.round(current_fields / required_fields)"/>
    </div>
  </div>
</template>

<script>
import ProgressBar from '~/components/partials/ProgressBar'
export default {
  components: {
    ProgressBar
  },
  props: {
    required_fields: {
      type: Number,
      required: true,
      default: 10
    },
    current_fields: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>

<style>
.component-app-fieldstatus {
  margin-left:25px;
}

.fieldstatus-wrapper {
  display:flex;
  align-items: center;
  min-width:250px;
}

.progess {
  min-width:250px;
}
</style>
