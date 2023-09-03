<template>
  <div class="viewport">
    <div>
      <span v-for="(obj, index) in tags" :key="index" :class="{ tag: tagIndex === index }"
        @click="changeTag(obj, index)"
        class="tag-name">{{
          obj }}</span>
    </div>

  </div>
</template>
   
<script>

export default {
  name: 'tags_',
  props: {
    tags: {
      type: Array
    }
  },
  data() {
    return {

      tagIndex: 0,
    }
  },
  methods: {
    changeTag(val, index) {
      this.tagIndex = index
      this.$emit('tag', index)
    }
  }
}
</script>
  
<style lang="scss" scoped>
.viewport {
  margin-top: 10px;
}
.tag {
  color: red;
}

span {
  margin-right: 20px;
}
.tag-name{
 font-size: 50px;
}
</style>