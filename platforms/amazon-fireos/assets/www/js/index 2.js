// App initialization
var app = {
  debug: false, // Initialization will set debug mode.

  // Application Constructor
  initialize: function() {
    app.state = "initialization";


    // Set the initial chart type. FULL SNELLEN
    app.chartType = irisoft.constants.chartTypes.SNELLEN_CHART;

    // Store the previous state of our selected chart type
    // TODO: Find bug as to why I have to use previous, fix the incrementing issue with the current chartType
    app.previousChartType;

    // Set an application wide variable for checking magnification level in either direction 0-7 or 0-12
    // TODO: Refactor ghosting variable value.
    app.chartSize = 7;

    app.chartArrayIndex = 1;

    this.pixelCal();
    // Set global pixelsin2020
    // irisoft.constants.pixelsin2020 = function() {
    //   //var irisoft.constants.screenSizeHeightPixels = 720;
    //   //var screenSizeHeightInches = parseFloat(11.3125);
    //   //var chartDistanceInches = (20 * 12) + 0; // + 0 = inches (entered by user)
    //   var screenSizeHeightPixels = readScreenHeightPixelsLocalStorage();
    //   var screenSizeHeightInches = readScreenHeightInchesLocalStorage();
    //   var chartDistanceInches = readChartDistanceInchesLocalStorage();
    //   var pixelsin2020 = screenSizeHeightPixels / screenSizeHeightInches * (Math.tan(5 / 60 * Math.PI / 180) * chartDistanceInches);     
    //   console.log("Pixels " + pixelsin2020 + " Inches " + screenSizeHeightInches);

    //   return pixelsin2020;
    // }();   

    // Set the initial chart state to: FULL SNELLEN
    app.chartState = irisoft.constants.chartStates.FULL;

    this.bindEvents();
  },
  pixelCal: function() {
      var screenSizeHeightPixels = readScreenHeightPixelsLocalStorage();
      var screenSizeHeightInches = readScreenHeightInchesLocalStorage();
      var chartDistanceInches = readChartDistanceInchesLocalStorage();
      var mirrorState = readChartMirrorState();
      var mirror = '';
      var pixelsin2020 = screenSizeHeightPixels / screenSizeHeightInches * (Math.tan(5 / 60 * Math.PI / 180) * chartDistanceInches);     
      
      //Set global pixelin2020
      irisoft.constants.pixelsin2020 = pixelsin2020;
      console.log("Pixels " + pixelsin2020 + " Inches " + screenSizeHeightInches);
  },
  configureDebugMode: function() {
    // This will need to include a mac platform counterpart which I can test for later.
    console.log(navigator.platform, navigator.platform === "Win32");
    //if (navigator.platform === "Win32" || navigator.platform === "MacIntel") {
    //  app.debug = true;
    //}
  },

  // Bind Event Listeners    
  bindEvents: function() {

    //this.bindInputEvents();

    // Attempting to setup browser debugging and programatically detect if we are on a pc or the device.
    app.configureDebugMode();

    document.addEventListener('deviceready', this.onDeviceReady, false);

   // if (app.debug) {
   //   document.addEventListener('DOMContentLoaded', this.onDeviceReady, false);
  //  }
  },
  bindInputEvents: function() {
    // $('#email').focus(function() {
    //   Keyboard.show();
    // });

    // $('#password').focus(function() {
    //   Keyboard.show();
    // });

    // document.addEventListener("keypress", function(e) {

    // });

    // document.addEventListener("keypress", function(e) {
    //   if ($("form button.btn-primary").is(":focus") && e.which === irisoft.constants.keyCodes.CENTER_BUTTON) {
    //     return;
    //   }

    //   if ($("#loginModal").is(":visible")) {
    //     if (e.which === irisoft.constants.keyCodes.CENTER_BUTTON) {
    //       Keyboard.hide();
    //       e.preventDefault();
    //     }
    //   }
    //   if (!$("#loginModal").is(":visible") && app.state === "authentication") {
    //     if (e.which === irisoft.constants.keyCodes.CENTER_BUTTON) {
    //       $("#loginModal").remodal().open();
    //     }
    //   }
    // }, false);

    // document.addEventListener("backbutton", function(e) {
    //   Keyboard.hide();
    //   e.cancelBubble = true;
    //   e.stopPropagation();
    //   e.preventDefault();
    //   return;
    // });
  },
  initApp: function() {
    app.modules.chartManager.initialize();

    // Disable loading screen
    app.modules.loadingScreen.disableLoader();

    // Hook all app critical events. 
    app.events.bindMenuEvent();
    app.events.bindNavigation();
    app.events.bindRemoteKeyEvents();
    app.events.bindSettingsEvent();
    app.events.bindBackEvent();

    app.state = "chart";

    if (app.debug) {
      $("#debug-test-container").show();
    }
  },

  // deviceready Event Handler
  onDeviceReady: function() {
    app.modules.loadingScreen.changeLoaderText("Device is ready...", 750, function() {

      app.modules.loadingScreen.changeLoaderText("Starting application and loading assets.", 750, function() {

        app.modules.loadingScreen.changeLoaderText("Authenticating device...", 750, function() {

         // app.modules.login.initialize(function(response) {
         //  document.addEventListener("keydown", function(e) {


         //   if (e.which = irisoft.constants.keyCodes.CENTER_BUTTON) {
              

         //     app.modules.loadingScreen.setMeasurements();
              


         //     app.initApp();
         //   }
        //  });
         //   else {
              app.initApp();


              // setInterval(function() {
              //   $("#theFrame").focus();
              //   $("body").click(function() {
              //     $("#theFrame").focus();
              //   })
              // }, 100)
            //}
            
         // });
        });
      });
    });

  },
};

// Initialization point for the entire app.
app.initialize();
