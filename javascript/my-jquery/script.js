(function(){
    let MyJquery={
        elements:[],
        query:function(selectors){
            this.elements=document.querySelectorAll(selectors);
            return this;
        },
        addClass:function(name){
            this.elements.forEach(function(elem){
                elem.classList.add(name);
            });
            return this;
        }
    };
    //window.$=MyJquery;
    window.$=function(selectors){
        return MyJquery.query(selectors);
    }
}());