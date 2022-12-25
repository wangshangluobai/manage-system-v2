<!--
 * @Author: otherChannel
 * @Date: 2022-12-23 15:05:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-24 18:34:56
-->

<script>
// import   

export default {
  name: 'BreadCrumb',
  data(){
    return {
      self: this,
    }
  },
  mounted(){
    console.log("输出检验1", this)
  },
  render: function (h) {
    console.log("输出检验", )
    const items = this.$slots.default;
    const dymanicItems = [];
    items.forEach((item, index) => {
      dymanicItems.push(item);
      if (index < (items.length - 1)) {
        dymanicItems.push(h('i', { class: 'iconfont icon-fangxiangright' }));
      }
    });
    return h('div', { class: 'bread' }, dymanicItems)
  }
}
</script>

<style lang="scss">
  .bread {
    background-color: pink;
    // flex 布局
    display: flex;
    height: 100%;
    line-height: 40px;
    flex-grow: 1;

    &-item {
      a {
        display: inline-block;
        color: #666;
        transition: all .4s;
        text-decoration: none;
        &:hover {
          color: tomato;
        }
      }
    }

    i {
      font-size: 16px;
      margin-left: 5px;
      margin-right: 5px;
      line-height: 40px;
    }
  }
</style>