<template>
    <div class="App">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'App'
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
html,body,#root,.App{
    width: 100%;
    height: 100%;
}
</style>