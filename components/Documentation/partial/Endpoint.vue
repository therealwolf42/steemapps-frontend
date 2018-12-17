<template>
  <div class="component-documentation-endpoint">
    <h3 class="title">{{ name }} API</h3>
    <div class="endpoint">
      <code >{{ request_type }} {{ endpoint }}</code>
    </div>
    <p class="endpoint-description">Function: {{ description }}</p>
    <Parameters :parameters="parameters"/>
  </div>
</template>

<script>
import Parameters from '~/components/Documentation/partial/Parameters'
export default {
  props: {
    endpoint: {
      type: String,
      required: true
    },
    request_type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    parameters: {
      type: Array,
      required: true
    }
  },
  components: {
    Parameters
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-documentation-endpoint {
  margin: 20px 0;
  background-color: #dedede;
  padding: 20px 20px;
  border-radius: 5px;
  max-width:800px;
}

.title {
  margin-bottom:15px;
}

.endpoint {
  margin-bottom:10px;
}

.endpoint-description {
  margin-left:10px;
  font-size:0.8rem;
  font-style:italic;
}
</style>
