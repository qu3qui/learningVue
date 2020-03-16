var app = new Vue({
    el : '#app',
    data : {
        product : "Socks",
        description : "soft and beautiful",
        image : "./assets/vmSocks-green-onWhite.jpg",
        imageLink : "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
        inventory : 10,
        onSale : true,
        details : ["80% cotton", "20% polyester", "Gender-neutral"],
        variants : [
            {
                variantId : 1,
                variantColor : "green"  
            },
            {
                variantId : 2,
                variantColor : "blue"  
            }
        ],
        sizes : ["S", "M", "L"]
    }
})