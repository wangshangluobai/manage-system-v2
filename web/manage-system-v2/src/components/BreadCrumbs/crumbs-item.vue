<!--
 * @Author: otherChannel
 * @Date: 2022-12-24 09:22:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-24 09:50:01
-->

<template>
  <div class="bread-item">
    <RouterLink v-if="to" :to="to"><slot /></RouterLink>
    <span v-else><slot /></span>
  </div>
</template>

<script>
export default {
  name: 'CrumbsItem',
  props: {
    to: {
      type: [String, Object],
      default: ''
    }
  }
}
</script>

<style>

</style>