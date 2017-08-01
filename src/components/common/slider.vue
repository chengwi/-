<template>
    <div class="slider">
       <el-menu default-active="myAllworkList" router unique-opened>
         <template v-for="item in list">
           <template v-if="item.subs">
             <el-submenu :index="item.index">
                 <template slot="title"><i :class="item.icon"></i>{{item.title}}</template>
                 <el-menu-item v-for="(list,i) in item.subs" :key="i":index="list.index"> {{list.title}}</el-menu-item>

             </el-submenu>
           </template>
           <template v-else>
               <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
           </template>
         </template>
       </el-menu>
    </div>

</template>

<script>
    export default {
      data(){
        return {
          list:[
            {
              title:"工单系统",
              icon:"",
              index:"1",
              subs:[
                {
                  title:"我的全部工单",
                  index:"/home/myAllworkList"
                },
                {
                  title:"我的未处理工单",
                  index:"/home/unhandler"
                },
                {
                  title:"我的处理中的工单",
                  index:"/home/hangding"
                },
                {
                  title:"我的已经暂停的工单",
                  index:"/home/pauseing"
                }, {
                  title:"我的已解决的工单",
                  index:"/home/finished"
                }
              ]
            },
            {
              title:"活动管理",
              icon:"",
              index:"2",
              subs:[
                {
                  title:"客户活动添加",
                  index:"/home/addactive"
                },
                {
                  title:"客户活动查询",
                  index:"/home/activesearch"
                }
              ]

            },
            {
              title:"数据查看",
              icon:"",
              index:"3",
              subs:[
                {
                  title:"数据查看",
                  index:"/home/publishnews"
                },
                {
                  title:"数据分析",
                  index:"/home/countnews"
                }

              ]

            },
            {
              title:"微信运营管理",
              icon:"",
              index:"/home/weixin",
            }


          ]
        }
      }

    }
</script>
<style>

  .slider{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .slider > ul {
    height:100%;
  }
</style>
