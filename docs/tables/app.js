(function() {
    "use strict";
  
    var app = angular.module("myApp", ["ngTable", "ngTableDemos"]);
  
    app.controller("demoController", demoController);
    demoController.$inject = ["NgTableParams", "ngTableSimpleList"];
  
    function demoController(NgTableParams, simpleList) {
      var self = this;
  
      self.changeDs = changeDs;
      self.datasets = ["1", "2"];
      self.dataset1 = simpleList;
      self.dataset2 = createDs2();
      self.tableParams = new NgTableParams();
  
      function changeDs() {
        self.tableParams.settings({
          dataset: self["dataset" + self.dataset]
        });
      }
  
      function createDs2() {
        return simpleList.map(function(item) {
          return angular.extend({}, item, {
            age: item.age + 100
          });
        });
      }
    }
  })();
  
  
  (function() {
    "use strict";
  
    angular.module("myApp").run(configureDefaults);
    configureDefaults.$inject = ["ngTableDefaults"];
  
    function configureDefaults(ngTableDefaults) {
      ngTableDefaults.params.count = 5;
      ngTableDefaults.settings.counts = [];
    }
  })();