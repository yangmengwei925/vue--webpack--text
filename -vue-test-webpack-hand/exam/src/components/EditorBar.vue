<template>
 <div class="toolbar">
   <div ref="editor" class="editor">
     <!-- <p>{{content}}</p> -->
   </div>
 </div>
</template>

<script>
import Editor from 'wangeditor'
  export default {
    props:['content'],
    data() {
      return {
        article:'',
        editor:null,
      }
    },
    created(){
      console.log(this.content);
      
    },
    mounted() {
      console.log(this.content);
      
      this.editor=new Editor(this.$refs.editor);
      
      this.editor.customConfig.onchange = (html) => {
        // console.log(1);
        this.article = html;
        this.$emit('editorContent',html);
      }    
      this.editor.create();    
      this.editor.txt.html(this.content);
      // this.editor.$toolbarElem.css('z-index', '2 !important'); 
      // this.editor.$textContainerElem.css('z-index', '1 !important'); 
    },
  }
</script>

<style lang="scss" scoped>
.editor{
  margin-top: 10px;
}
// .w-e-toolbar{
//   z-index: 2 !important;
// }
// .w-e-menu{
//   z-index: 2 !important;
// }
// .w-e-text-container{
//   z-index: 1 !important;
// }
// .toolbar{
//   z-index: 1 !important;
// }
</style>