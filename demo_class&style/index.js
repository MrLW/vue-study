// 对象语法
var app = new Vue({
    el: "#app",
    data: {
        isActive: true,
        hasError: true
    }
});

var app2 = new Vue({
    el:'#app2',
    data : {
        classObject : {
            active:true,
            static:true,
            'text-danger':false
        }
    }
});

var app3 = new Vue({
    el:"#app3",
    data:{
        isActive:true,
        error:true
    },
    computed:{
        classObj:function () {
            return {
                active:this.isActive && this.error,
                'text-danger':this.error && this.error.type === 'fatal'
            }
        }
    }
});
// 数组语法
var vm4 = new Vue({
    el:'#app4',
    data:{
        activeClass:'active',
        errClass:'text-danger'
    }
})

// 组件
Vue.component('my-component',{
    template:'<p class="foo bar">Hi</p>'
})
new Vue({
    el:'#app5',
    data:{
        isActive:true
    }
});

new Vue({
    el:"#app6",
    data:{
        isActive:true
    }
})