<template>
  <ul class="component-documentation-endpoint-parameters">
    <h4>Parameters</h4>
    <li class="parameters" v-for="p in parameters" :key="p.name">
      <div class="parameter">
        <code>
          <span>{{ p.name }} 
            <span class="required">({{ p.required ? 'required' : 'optional' }})</span>
          </span>
          <span>type: {{ p.type }}</span>
        </code>
          <span v-if="p.description" class="description">Description: {{ p.description }}</span>
          <span v-if="p.example" class="example">Example: {{ p.example }}</span>
          <span v-if="p.valid" class="valid">Valid: {{ p.valid }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    parameters: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

.component-documentation-endpoint-parameters {
  margin-left:0px;
  padding-left:0px;
}




.parameters {
  display:flex;
  padding:4px 0;
}

.parameter {
  margin-bottom:10px;
  display:flex;
  text-align: left;
  flex-flow:column;
}

.required {
  font-size:0.8rem; font-style:italic;
}

.description, .valid, .example {
  margin-left:10px;
  margin-top:4px;
  font-style:italic;
  font-size:0.8rem;
}



</style>
