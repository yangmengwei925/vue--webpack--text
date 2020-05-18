<template>
    <transition class="modal">
        <div class="modal-mask" v-if="showFlag">
            <div class="modal-warper">
            <div class="modal-connect">
                <div class="modal-header">
                        <slot name="modal-top"></slot>
                </div>
                <div class="modal-main">
                        <slot name="modal-main"></slot>
                </div>
                <div class="modal-footer">
                        <slot name="modal-footer"></slot>
                        <div class="btn">
                            <el-button type="primary" @click="$emit('close')">确定</el-button><el-button @click="$emit('close')">取消</el-button>
                        </div> 
                </div>
            </div>

        </div>
        </div>
        
    </transition>
</template>

<script>
export default {
    props:{
        showFlag:Boolean
    }
    }
</script>

<style scoped lang="scss">
    .modal-mask{
        position: fixed;
        z-index: 999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,.4);
        display: flex;
        .modal-warper{
            margin: auto;
            .modal-connect{
                width: 500px;
                padding: 20px 30px;
                background: #fff;
                .modal-header{
                    text-align: center;
                }
                .modal-main{
                    margin-top: 30px;
                }
                .modal-footer{
                    margin-top: 50px;
                    text-align: center;
                }
            }
        }
    }
</style>