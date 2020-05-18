<template>
    <div class="addUser">
        <h1>添加用户</h1>
        <div class="part">
            <Part1></Part1>
            <Part2></Part2>
            <Part3></Part3>
            <Part4></Part4>
            <Part5></Part5>
            <Part6></Part6>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name:'addUser',
    
}
</script>

<style>
.addUser{
    width: 100%;
    height: 100%;
    background: #f0f2f5;
}
h1 {
  height: 70px;
  line-height: 70px;
  margin-left: 2%;
  font-size: 23px;
  font-weight: 500;
}
.part{
    width: 95%;
    height: 85%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    
}

</style>