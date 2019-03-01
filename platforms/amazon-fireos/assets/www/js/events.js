var testingElement = $("#debug-test-container");
var currentChartState;

app.events = {
  bindRemoteKeyEvents: function() {
    
    window.addEventListener("keyup", function(e) {

      // Only perform if we are in debug mode.
      // Debug mode is checked by the viewers device OS. Win32 = Debug.
      // if(app.debug) {
      //    testingElement.text(e.which);
          $("#debug-test-container").text($("#debug-test-container").text() + ", " +e.which);
      // }
      if (app.state == "chart") {
      switch (e.which) {
        case irisoft.constants.keyCodes.UP:
          app.modules.chartManager.performChartItemSizeOperation("increase");
          break;

        case irisoft.constants.keyCodes.DOWN:
          app.modules.chartManager.performChartItemSizeOperation("decrease");
          break;

        case irisoft.constants.keyCodes.LEFT:
          app.modules.chartManager.performChartIndexChange("left");
          break
        
        case irisoft.constants.keyCodes.RIGHT:
          app.modules.chartManager.performChartIndexChange("right");
          break;

        case irisoft.constants.keyCodes.NEXT:
        case irisoft.constants.keyCodes.PREVIOUS:
        case irisoft.constants.keyCodes.F12:
        case irisoft.constants.keyCodes.F10:
          // If we hit either of these than it is because we need to reset as we only have chartTypes 1-6.
          // TODO: Refactor to array
          console.log('Starting Chart ' + app.chartType);
          if (e.which === irisoft.constants.keyCodes.NEXT || e.which === irisoft.constants.keyCodes.F12) {
              app.chartType++;
              console.log("++")
            } 
          else if (e.which === irisoft.constants.keyCodes.PREVIOUS || e.which === irisoft.constants.keyCodes.F10) {
              app.chartType--;
              console.log("--")
            }
          
          console.log('Changing to Chart ' + app.chartType);
          if (app.chartType > 5) {
            app.chartType = 0;
          }

          if (app.chartType < 0) {
            app.chartType = 5;
          }
          
          console.log('Resetting Chart ' + app.chartType);
          if (app.state === "chart") {
            app.previousChartType = app.chartType;

            app.modules.chartManager.generateChartEntities(irisoft.constants.charts[app.chartType][app.chartArrayIndex]);
            
          }
          break;
        case irisoft.constants.keyCodes.CENTER_BUTTON:
          if (app.state === "chart") {
            if (app.chartState == irisoft.constants.chartStates.SINGLE_LINE) {
              app.chartState = irisoft.constants.chartStates.SINGLE_LETTER;
              console.log('SINGLE_LETTER');
              
              return app.modules.chartManager.performChartItemSizeOperation("none");
            }

            if (app.chartState == irisoft.constants.chartStates.SINGLE_LETTER) {
              app.chartState = irisoft.constants.chartStates.FULL;
              if (app.chartSize > 8){
                app.chartSize = 7;
              }
              console.log('FULL');
              
              return app.modules.chartManager.performChartItemSizeOperation("none");
            }

            if (app.chartState == irisoft.constants.chartStates.FULL) {
              app.chartState = irisoft.constants.chartStates.SINGLE_LINE;
              console.log('SINGLE_LINE');

              return app.modules.chartManager.performChartItemSizeOperation("none");
            }
          }

          break;
      }
      }
    },true);
  },

  bindMenuEvent: function() {
    
    document.addEventListener("menubutton", app.events.onMenuKeyDown, false);
    document.addEventListener("keydown", function(e){
      if (e.which === irisoft.constants.keyCodes.M) {
          app.events.onMenuKeyDown();
      };
    });

    document.getElementById("snellen").addEventListener("click", function() {
      app.chartType = 1;
      app.modules.chartManager.generateChartEntities(irisoft.constants.charts[app.chartType][1]);
      app.events.onMenuKeyDown();
    }, false);
    document.getElementById("symbols").addEventListener("click", function() {
      app.chartType = 0;
      app.chartState = currentChartState;
      app.modules.chartManager.generateChartEntities(irisoft.constants.charts[app.chartType][1]);
      app.events.onMenuKeyDown();
    }, false);
    document.getElementById("hotv").addEventListener("click", function() {
      app.chartType = 2;
      app.modules.chartManager.generateChartEntities(irisoft.constants.charts[app.chartType][1]);
      app.events.onMenuKeyDown();
    }, false);
    document.getElementById("tumblingEs").addEventListener("click", function() {
      app.chartType = 3;
      app.modules.chartManager.generateChartEntities(irisoft.constants.charts[app.chartType][1]);
      app.events.onMenuKeyDown();
    }, false);
    document.getElementById("tumblingCs").addEventListener("click", function() {
      app.chartType = 4;
      app.modules.chartManager.generateChartEntities(irisoft.constants.charts[app.chartType][1]);
      app.events.onMenuKeyDown();
    }, false);
    document.getElementById("numbers").addEventListener("click", function() {
      app.chartType = 5;
      app.modules.chartManager.generateChartEntities(irisoft.constants.charts[app.chartType][1]);
      app.events.onMenuKeyDown();
    }, false);
    document.getElementById("mirror").addEventListener("click", function() {
      // app.chartType = 5;
      app.modules.chartManager.performChartMirror();

      app.modules.chartManager.generateChartEntities(irisoft.constants.charts[app.chartType][1]);
     app.events.onMenuKeyDown();
   }, false);

    
    
  },
  bindSettingsEvent: function() {
    var settingsModal = $('[data-remodal-id=settingsModal]').remodal();
    var settingsModalState = settingsModal.getState();
    
    document.getElementById("settings").addEventListener("click", function() {
      onSettingsClick();
    }, false);
    document.getElementById("settingsSaveDefaults").addEventListener("click", function() {
      saveDefaults();
    }, false);
    document.getElementById("settingsCancelDefaults").addEventListener("click", function() {
      app.events.onMenuKeyDown();
    }, false);

      
      // Open the Settings Modal
      function onSettingsClick() {
        app.events.onMenuKeyDown();
        app.state = "settings";
        settingsModal.open();

        setTimeout(function() {
          $("input").first().focus();
        }, 500)
        return ;

        var screenSizeHeightPixels = readScreenHeightPixelsLocalStorage();
        var screenSizeHeightInches = readScreenHeightInchesLocalStorage();
        var chartDistanceInches = readChartDistanceInchesLocalStorage();

        console.log(screenSizeHeightPixels);

        $("#currentValChartDistance").text("Current Value: " + chartDistanceInches);
        $("#currentValScreenHeightInches").text("Current Value: " + screenSizeHeightInches);
        $("#currentValScreenHeightPixels").text("Current Value: " + screenSizeHeightPixels);
      

      }

      function saveDefaults() {
        var chartDistanceInches = $("#chartDistanceInches").val();
        var screenHeightInches = $("#screenHeightInches").val();
        var screenHeightPixels = $("#screenHeightPixels").val();

          // TODO Add alert for value that are too large 
          if (chartDistanceInches < 360 && chartDistanceInches > 60){
            writeChartDistanceInchesLocalStorage(chartDistanceInches);
            console.log(chartDistanceInches);
          }
          else {
            alert("Please choose a value between 60 and 360 inches");
          }
          
          if (screenHeightInches < 60 && screenHeightInches > 6){
            writeScreenHeightInchesLocalStorage(screenHeightInches);
            console.log(screenHeightInches);
          }
          else {
            alert("Please choose a value between 6 and 60 inches");
          }
          
          if (screenHeightPixels < 6000 && screenHeightPixels > 720){
          writeScreenHeightPixelsLocalStorage(screenHeightPixels);
            console.log(screenHeightPixels);
          }
          else {
            alert("Please choose a value between 720 and 6000 pixels");
          }

          var settingsModal = $('[data-remodal-id=settingsModal]').remodal();
          settingsModal.close();
          app.state = "chart";
        //ReCalcualte Pixelin2020
        app.pixelCal();
        //Regenerate chart at new size
        app.modules.chartManager.generateChartEntities(irisoft.constants.charts[1][1]);

      };

  },

  onMenuKeyDown: function() {
      // Initialize remodal (ext. lib) - https://github.com/VodkaBears/Remodal
      
      var menuModal = $('[data-remodal-id=menuModal]').remodal();
      var menuModalState = menuModal.getState();
      currentChartState = app.chartState;
    
      // Check modal state
      if (menuModalState === "closed") {
        
        app.state = "menu";
        
        menuModal.open();
        menuModalState = "opened";
        console.log(menuModalState);
        
        setTimeout(function() {
          $(".menu-button").first().focus();
        }, 500)
        return ;
      }

      else if (menuModalState === "opened") {
             app.state = "chart";
             menuModalState = "closed";
             console.log(app.state);
             menuModal.close();
           }
       
      return;
  },

  bindBackEvent: function() {
    document.addEventListener("backbutton", onBackKeyDown, false);

    document.addEventListener("keydown", function(e){
      if (e.which === irisoft.constants.keyCodes.B) {
          onBackKeyDown();
      };
    });

      function onBackKeyDown(){
        //Regenerate Chart Back to start point
      app.chartSize = 7;
      app.chartState = irisoft.constants.chartStates.FULL;
      app.chartType = 1;
      app.chartArrayIndex = 1;

      app.modules.chartManager.performChartItemSizeOperation("none");
      app.modules.chartManager.generateChartEntities(irisoft.constants.charts[1][1]);

      } 

  },
  
  // REMOVE?
   bindNavigation: function() {
  //   document.addEventListener("keydown", function(e) {
  //     $("h1").html($("h1").html() + e.keyCode + " || ");
  //   });
   }
}
