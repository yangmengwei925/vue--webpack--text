<template>
    <div class="context-page">
        <router-view>
        </router-view>
    </div>
</template>

<script>
export default {
    name:'context'
}
</script>

<style>
    #content {
    position: absolute;
    top: 70px;
    left: 200px;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    overflow-y: auto;
  }
  .context-page{
      width: 100%;
      height: 100%;
  }
</style>