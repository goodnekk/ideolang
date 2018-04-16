controller.navigation = {
    gotoOverview: function(id){
        viewmodel.page = 0;
        viewmodel.search = "";
    },
    gotoIdeogramDetails: function(id){
        viewmodel.focus = id;
        viewmodel.page = 1;
        viewmodel.search = "";
    },
    gotoIdeogramEditor: function(id){
        viewmodel.focus = id;
        viewmodel.page = 2;
    }
};