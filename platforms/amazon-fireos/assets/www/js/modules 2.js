app.modules = {};

app.modules.chartManager = {
  //chart_array: irisoft.constants.SNELLEN_CHART_ARRAY,
  chart_array: irisoft.constants.charts[app.chartType][app.chartArrayIndex],

  initialize: function() {
    this.generateChartEntities(this.chart_array);
  },

  performChartTrueRandomization: function() {
    // Shuffle chart_array
    this.chart_array = function(chart_array) {
      var currentIndex = chart_array.length,
        tmpVal, randomIndex;

      // While there are still elements to shuffle
      while (0 !== currentIndex) {

        // Pick one of the remaining elements
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Then swap it with the current element we just picked above..
        tmpVal = chart_array[currentIndex];
        chart_array[currentIndex] = chart_array[randomIndex];
        chart_array[randomIndex] = tmpVal;
      }

      return chart_array;

    }(this.chart_array);

    // Find all visible letters and set them to a random index from the shuffled chart.
    for (var i = 0; i < $("img.letter:visible").length; i++) {
      var letterElement = $("img.letter:visible")[i];
      var randomLetter = this.chart_array[Math.floor(Math.random() * this.chart_array.length)];

      $(letterElement).attr('src', "img/chart-images/" + randomLetter + ".png");
    }
  },
  // Previous index
  previousIndex: 0,
  performChartPseudoRandomization: function() {
    // Find out how many chart types layout variations we have for a given chart type. 
    // We need to subtract this length by one because the first value in this array is the chart type, the remainder are additional arrays we need to count.
    var maxRandomChartTypes = irisoft.constants.charts[app.chartType].length - 1;
    

    // Generate a random number based on the length of charts sub-chart's arrays. Hard to explain
    // This number will be used to grab a random array from our multi-dimensional array of charts.
    // Changed to an ordered list from random
    var randomIndex = Math.floor(Math.random() * (maxRandomChartTypes)) + 1;
    
     while (this.previousIndex === randomIndex) {
      randomIndex = Math.floor(Math.random() * (maxRandomChartTypes)) + 1;
     }

    // Store previously used index so we don't use it twice, which makes the UI appear as
    // if the button did nothing when clicked. Looks flawed.
     this.previousIndex = randomIndex;

    // Capture a chart from our charts array for the specific chartType we are on.
    // This is a multi dimensional array so that we can specify our chartType id as an index and then use the second index as one
    // of the randomly sorted arrays.

    // Determine which chart is current
   
    var newChartArray = irisoft.constants.charts[app.chartType][randomIndex];
    // Set our current in-use array to the new one.
    this.chart_array = newChartArray;

    // Regenerate chart.
    this.generateChartEntities(this.chart_array);
  },
  //Change the chart type
  performChartIndexChange: function(type) {
    //TODO: Create a function that changes through chartTypes sequentially 
    console.log("performChartTypeChange");
    
    
    //Determine which direction the index should move
    if (type === "left") {
      app.chartArrayIndex--;
    }
    else if (type === "right") {
      app.chartArrayIndex++;
    }
    else {
      console.log("left or right not detected")
      return;
    }
    console.log(app.chartArrayIndex + " After Increment")
    // Determine if index is out of arrange and reset
    if (app.chartArrayIndex > 5) {
          app.chartArrayIndex = 1;
    }
    
    if (app.chartArrayIndex < 1) {
      app.chartArrayIndex = 5;
    }      

    var currentChartType = irisoft.constants.charts[app.chartType][app.chartArrayIndex];
    console.log(currentChartType);
    this.chart_array = currentChartType;

    this.generateChartEntities(this.chart_array);
  },

  /*@ Parameter: 
    @   @type: string | "increase" or "decrease" or "none" for sizing. 
  */
  performChartItemSizeOperation: function(type) {

    if (type === "decrease") {
      app.chartSize++;
    }

    var sizingOperationIsValid = this.validateSizingDirectionOperation(app.chartState);

    console.log('sizing passed: ' + sizingOperationIsValid);

    if (!sizingOperationIsValid) {
      return false;
    }

    switch (app.previousChartType) {
      case irisoft.constants.chartTypes.ICON_CHART:
        this.chart_array = irisoft.constants.ICONS_CHART_ARRAY;
        break;
      case irisoft.constants.chartTypes.SNELLEN_CHART:
        this.chart_array = irisoft.constants.SNELLEN_CHART_ARRAY;
        break;

      case irisoft.constants.chartTypes.HOTV_CHART:
        this.chart_array = irisoft.constants.HOTV_CHART_ARRAY;
        break;

      case irisoft.constants.chartTypes.TUMBLING_E_CHART:
        this.chart_array = irisoft.constants.TUMBLING_E_CHART_ARRAY;
        break;

      case irisoft.constants.chartTypes.TUMBLING_C_CHART:
        this.chart_array = irisoft.constants.TUMBLING_C_CHART_ARRAY;
        break;

      case irisoft.constants.chartTypes.NUMBERS_CHART:
        this.chart_array = irisoft.constants.NUMBERS_CHART_ARRAY;
        break;
    }

    // Decrement or increment based on sizing operation
    if (type === "increase") {
      app.chartSize--;
    }

    if (app.chartState === irisoft.constants.chartStates.FULL) {
      console.log("chart size: " + app.chartSize + " in resize");
      console.log("chart type: " + app.chartType + " in resize");

      $("img.letter").show();
      $("img[src='img/blank.gif']").show();

      if (app.chartSize === 1) {
        $("#row1").show();
        $("#row1-spacer").hide();
        $("#row2, #row2-spacer").hide();
        $("#row3, #row3-spacer").hide();
        $("#row4, #row4-spacer").hide();
        $("#row5, #row5-spacer").hide();
        $("#row6, #row6-spacer").hide();
        $("#row7, #row7-spacer").hide();
        $("#row8, #row8-spacer").hide();
        $("#row9, #row9-spacer").hide();
        $("#row10, #row10-spacer").hide();
        $("#row11, #row11-spacer").hide();
        $("#row12").hide();
      }
      // Lines 20/200 - 20/160
      else if (app.chartSize == 2) {

        $("#row1, #row1-spacer").hide();

        $("#row2, #row2-spacer").show();
        $("#row3").show();

        $("#row3-spacer").hide();
        $("#row4, #row4-spacer").hide();
        $("#row5, #row5-spacer").hide();
        $("#row6, #row6-spacer").hide();
        $("#row7, #row7-spacer").hide();
        $("#row8, #row8-spacer").hide();
        $("#row9, #row9-spacer").hide();
        $("#row10, #row10-spacer").hide();
        $("#row11, #row11-spacer").hide();
        $("#row12").hide();
      }
      // Lines 20/160 - 20/100
      else if (app.chartSize == 3) {
        $("#row1, #row1-spacer").hide();
        $("#row2, #row2-spacer").hide();

        $("#row3, #row3-spacer").show();
        $("#row4").show();

        $("#row4-spacer").hide();
        $("#row5, #row5-spacer").hide();
        $("#row6, #row6-spacer").hide();
        $("#row7, #row7-spacer").hide();
        $("#row8, #row8-spacer").hide();
        $("#row9, #row9-spacer").hide();
        $("#row10, #row10-spacer").hide();
        $("#row11, #row11-spacer").hide();
        $("#row12").hide();
      }
      // Lines 20/100 - 20/60
      else if (app.chartSize == 4) {
        $("#row1, #row1-spacer").hide();
        $("#row2, #row2-spacer").hide();
        $("#row3, #row3-spacer").hide();

        $("#row4, #row4-spacer").show();
        $("#row5, #row5-spacer").show();
        $("#row6").show();

        $("#row6-spacer").hide();
        $("#row7, #row7-spacer").hide();
        $("#row8, #row8-spacer").hide();
        $("#row9, #row9-spacer").hide();
        $("#row10, #row10-spacer").hide();
        $("#row11, #row11-spacer").hide();
        $("#row12").hide();
      }
      // Lines 20/80 - 20/40
      else if (app.chartSize == 5) {
        $("#row1, #row1-spacer").hide();
        $("#row2, #row2-spacer").hide();
        $("#row3, #row3-spacer").hide();
        $("#row4, #row4-spacer").hide();

        $("#row5, #row5-spacer").show();
        $("#row6, #row6-spacer").show();
        $("#row7, #row7-spacer").show();

        $("#row8").show();
        $("#row8-spacer").hide();

        $("#row9, #row9-spacer").hide();
        $("#row10, #row10-spacer").hide();
        $("#row11, #row11-spacer").hide();
        $("#row12").hide();
      }
      // Lines 20/60 - 20/25
      else if (app.chartSize == 6) {
        $("#row1").hide();
        $("#row1-spacer").hide();
        $("#row2").hide();
        $("#row2-spacer").hide();
        $("#row3").hide();
        $("#row3-spacer").hide();
        $("#row4").hide();
        $("#row4-spacer").hide();
        $("#row5").hide();
        $("#row5-spacer").hide();

        $("#row6").show();
        $("#row6-spacer").show();
        $("#row7").show();
        $("#row7-spacer").show();
        $("#row8").show();
        $("#row8-spacer").show();
        $("#row9").show();
        $("#row9-spacer").show();
        $("#row10").show();

        $("#row10-spacer").hide();
        $("#row11").hide();
        $("#row11-spacer").hide();
        $("#row12").hide();

      }
      // Lines 20/50 - 20/20
      else if (app.chartSize == 7) {
        $("#row1").hide();
        $("#row1-spacer").hide();
        $("#row2").hide();
        $("#row2-spacer").hide();
        $("#row3").hide();
        $("#row3-spacer").hide();
        $("#row4").hide();
        $("#row4-spacer").hide();
        $("#row5").hide();
        $("#row5-spacer").hide();
        $("#row6").hide();
        $("#row6-spacer").hide();

        $("#row7").show();
        $("#row7-spacer").show();
        $("#row8").show();
        $("#row8-spacer").show();
        $("#row9").show();
        $("#row9-spacer").show();
        $("#row10").show();
        $("#row10-spacer").show();
        $("#row11").show();

        $("#row11-spacer").hide();
        $("#row12").hide();

      }
      // Lines 20/40 - 20/15
      else if (app.chartSize >= 8) {
        // OFF
        $("#row1").hide();
        $("#row1-spacer").hide();
        $("#row2").hide();
        $("#row2-spacer").hide();
        $("#row3").hide();
        $("#row3-spacer").hide();
        $("#row4").hide();
        $("#row4-spacer").hide();
        $("#row5").hide();
        $("#row5-spacer").hide();
        $("#row6").hide();
        $("#row6-spacer").hide();
        $("#row7").hide();
        $("#row7-spacer").hide();
        //ON
        $("#row8").show();
        $("#row8-spacer").show();
        $("#row9").show();
        $("#row9-spacer").show();
        $("#row10").show();
        $("#row10-spacer").show();
        $("#row11").show();
        $("#row11-spacer").show();
        $("#row12").show();

      }
    }

    if (app.chartState === irisoft.constants.chartStates.SINGLE_LINE) {
      console.log("chart size: " + app.chartSize + " in resize");
      // Line 20/400
      if (app.chartSize == 1) {
        this.hideAllRows();
        $("#row1").show();
      }
      // Line 20/200
      else if (app.chartSize == 2) {
        this.hideAllRows();
        $("#row2").show();
      }
      // Line 20/160
      else if (app.chartSize == 3) {
        this.hideAllRows();
        $("#row3").show();
      }
      // Line 20/100
      else if (app.chartSize == 4) {
        this.hideAllRows();
        $("#row4").show();
      }
      // Line 20/80
      else if (app.chartSize == 5) {
        this.hideAllRows();
        $("#row5").show();
      }
      // Line 20/60
      else if (app.chartSize == 6) {
        this.hideAllRows();
        $("#row6").show();
      }
      // Line 20/50
      else if (app.chartSize == 7) {
        this.hideAllRows();
        $("#row7").show();
      }
      // Line 20/40
      else if (app.chartSize == 8) {
        this.hideAllRows();
        $("#row8").show();
      }
      // Line 20/30
      else if (app.chartSize == 9) {
        this.hideAllRows();
        $("#row9").show();
      }
      // Line 20/25
      else if (app.chartSize == 10) {
        this.hideAllRows();
        $("#row10").show();
      }
      // Line 20/20
      else if (app.chartSize == 11) {
        this.hideAllRows();
        $("#row11").show();
      }
      // Line 20/15
      else if (app.chartSize == 12) {
        this.hideAllRows();
        $("#row12").show();
      }
    }

    if (app.chartState === irisoft.constants.chartStates.SINGLE_LETTER) {
      console.log("chart size: " + app.chartSize + " in resize");
      // Single Letter
      this.unhideAllRows();

      // Line 20/400
      if (app.chartSize == 1) {
        this.hideAllRows();
        $("#row1").show();
      }
      // Line 20/200
      else if (app.chartSize == 2) {
        this.hideAllRows();
        $("#row2").show();
        $(".200-2").hide();
        $(".200-2-1").hide();
      }
      // Line 20/160
      else if (app.chartSize == 3) {
        this.hideAllRows();
        $("#row3").show();
        $(".160-4").hide();
        $(".160-6").hide();
      }
      // Line 20/100
      else if (app.chartSize == 4) {
        this.hideAllRows();
        $("#row4").show();
        $(".100-7").hide();
        $(".100-8").hide();
        $(".100-10").hide();
        $(".100-7-1").hide();
        $(".100-8-1").hide();
        $(".100-9-1").hide();
      }
      // Line 20/80
      else if (app.chartSize == 5) {
        this.hideAllRows();
        $("#row5").show();
        $(".80-11").hide();
        $(".80-12").hide();
        $(".80-14").hide();
        $(".80-15").hide();
        // $(".100-7-1").hide();
        // $(".100-8-1").hide();
        // $(".100-9-1").hide();
      }
      // Line 20/60
      else if (app.chartSize == 6) {
        this.hideAllRows();
        $("#row6").show();
        $(".60-16").hide();
        $(".60-17").hide();
        $(".60-19").hide();
        $(".60-20").hide();
      }
      // Line 20/50
      else if (app.chartSize == 7) {
        this.hideAllRows();
        $("#row7").show();
        $(".50-21").hide();
        $(".50-22").hide();
        $(".50-24").hide();
        $(".50-25").hide();
      }
      // Line 20/40
      else if (app.chartSize == 8) {
        this.hideAllRows();
        $("#row8").show();
        $(".40-26").hide();
        $(".40-27").hide();
        $(".40-29").hide();
        $(".40-30").hide();
      }
      // Line 20/30
      else if (app.chartSize == 9) {
        this.hideAllRows();
        $("#row9").show();
        $(".30-31").hide();
        $(".30-32").hide();
        $(".30-34").hide();
        $(".30-35").hide();
      }
      // Line 20/25
      else if (app.chartSize == 10) {
        this.hideAllRows();
        $("#row10").show();
        $(".25-36").hide();
        $(".25-37").hide();
        $(".25-39").hide();
        $(".25-40").hide();
      }
      // Line 20/20
      else if (app.chartSize == 11) {
        this.hideAllRows();
        $("#row11").show();
        $(".20-41").hide();
        $(".20-42").hide();
        $(".20-44").hide();
        $(".20-45").hide();
      }
      // Line 20/15
      else if (app.chartSize == 12) {
        this.hideAllRows();
        $("#row12").show();
        $(".15-46").hide();
        $(".15-47").hide();
        $(".15-49").hide();
        $(".15-50").hide();
      }
    }

    // // Randomizes the chart on each click.
    // this.performChartRandomization();
  },

  validateSizingDirectionOperation: function(chartState) {
    // We have reached the max magnification of this chart type, it should be a single levtter at 20/400.
    // We just return out of this, we do not want to decrement chartSize or it could cause extra clicks 
    // for the counter to get back on track.
    // app.chartSize keeps track of how many magnification levels we are at in either direction.
    if (app.chartState === irisoft.constants.chartStates.FULL && app.chartSize <= 1) {
      return false;
    }

    // Smallest size we can shrink the chart down too for FULL SNELEN is 9, if we hit this, we need to return false.
    // Also decrement the chartsize to keep it on track.
    if (app.chartState === irisoft.constants.chartStates.FULL && app.chartSize >= 9) {
      app.chartSize--;
      return false;
    }

    if (app.chartState === irisoft.constants.chartStates.SINGLE_LINE && app.chartSize > 12) {
      app.chartSize--;
      return false;
    }

    if (app.chartState === irisoft.constants.chartStates.SINGLE_LINE && app.chartSize <= 1) {
      return false;
    }

    if (app.chartState === irisoft.constants.chartStates.SINGLE_LETTER && app.chartSize > 12) {
      app.chartSize--;
      return false;
    }

    if (app.chartState === irisoft.constants.chartStates.SINGLE_LETTER && app.chartSize <= 1) {
      return false;
    }

    // Sizing can be performed, we have not hit any thresholds for the above chart types.
    return true;
  },

  generateChartEntities: function(chart_array) {
    console.log(irisoft.constants.pixelsin2020 + ' generate chart' + ' Chart Array Index ' + this.chart_array );
    for (var i = 0; i < chart_array.length; i++) {
      if (i < 1) {
        $('.400-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.400-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 20) + "px");
        $('#row1-spacer').css("height", (irisoft.constants.pixelsin2020 * 20) + "px");
      } else if (i < 3) {
        $('.200-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.200-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 10) + "px");
        $('.200-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 10) + "px");
        $('.200-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 10) + "px");
        $('#row2-spacer').css("height", (irisoft.constants.pixelsin2020 * 10) + "px");
      } else if (i < 6) {
        $('.160-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.160-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 8) + "px");
        $('.160-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 8) + "px");
        $('.160-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 8) + "px");
        $('#row3-spacer').css("height", (irisoft.constants.pixelsin2020 * 8) + "px");
      } else if (i < 10) {
        $('.100-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.100-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 5) + "px");
        $('.100-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 5) + "px");
        $('.100-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 5) + "px");
        $('#row4-spacer').css("height", (irisoft.constants.pixelsin2020 * 5) + "px");
      } else if (i < 15) {
        $('.80-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.80-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 4) + "px");
        $('.80-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 4) + "px");
        $('.80-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 4) + "px");
        $('#row5-spacer').css("height", (irisoft.constants.pixelsin2020 * 4) + "px");
      } else if (i < 20) {
        $('.60-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.60-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 3) + "px");
        $('.60-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 3) + "px");
        $('.60-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 3) + "px");
        $('#row6-spacer').css("height", (irisoft.constants.pixelsin2020 * 3) + "px");
      } else if (i < 25) {
        $('.50-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.50-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 2.50) + "px");
        $('.50-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 2.50) + "px");
        $('.50-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 2.50) + "px");
        $('#row7-spacer').css("height", (irisoft.constants.pixelsin2020 * 2.50) + "px");
      } else if (i < 30) {
        $('.40-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.40-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 2) + "px");
        $('.40-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 2) + "px");
        $('.40-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 2) + "px");
        $('#row8-spacer').css("height", (irisoft.constants.pixelsin2020 * 2) + "px");
      } else if (i < 35) {
        $('.30-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.30-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 1.50) + "px");
        $('.30-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 1.50) + "px");
        $('.30-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 1.50) + "px");
        $('#row9-spacer').css("height", (irisoft.constants.pixelsin2020 * 1.50) + "px");
      } else if (i < 40) {
        $('.25-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.25-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 1.25) + "px");
        $('.25-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 1.25) + "px");
        $('.25-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 1.25) + "px");
        $('#row10-spacer').css("height", (irisoft.constants.pixelsin2020 * 1.25) + "px");
      } else if (i < 45) {
        $('.20-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.20-' + (i + 1)).css("height", irisoft.constants.pixelsin2020 + "px");
        $('.20-' + (i + 1) + '-1').css("width", irisoft.constants.pixelsin2020 + "px");
        $('.20-' + (i + 1) + '-1').css("height", irisoft.constants.pixelsin2020 + "px");
        $('#row11-spacer').css("height", irisoft.constants.pixelsin2020 + "px");
      } else if (i < 50) {
        $('.15-' + (i + 1)).attr('src', "img/chart-images/" + chart_array[i] + ".png");
        $('.15-' + (i + 1)).css("height", (irisoft.constants.pixelsin2020 * 0.75) + "px");
        $('.15-' + (i + 1) + '-1').css("width", (irisoft.constants.pixelsin2020 * 0.75) + "px");
        $('.15-' + (i + 1) + '-1').css("height", (irisoft.constants.pixelsin2020 * 0.75) + "px");
        $('#row12-spacer').css("height", (irisoft.constants.pixelsin2020 * 0.75) + "px");
      }
    }
  },

  hideAllRows: function() {
    $("#row1, #row1-spacer").hide();
    $("#row2, #row2-spacer").hide();
    $("#row3, #row3-spacer").hide();
    $("#row4, #row4-spacer").hide();
    $("#row5, #row5-spacer").hide();
    $("#row6, #row6-spacer").hide();
    $("#row7, #row7-spacer").hide();
    $("#row8, #row8-spacer").hide();
    $("#row9, #row9-spacer").hide();
    $("#row10, #row10-spacer").hide();
    $("#row11, #row11-spacer").hide();
    $("#row12, #row12-spacer").hide();
  },

  unhideAllRows: function() {
    $(".200-2").show();
    $(".200-2-1").show();
    $(".160-4").show();
    $(".160-6").show();
    $(".100-7").show();
    $(".100-7-1").show();
    $(".100-8").show();
    $(".100-8-1").show();
    $(".100-9-1").show();
    $(".100-10").show();
    $(".80-11").show();
    $(".80-12").show();
    $(".80-14").show();
    $(".80-15").show();
    $(".60-16").show();
    $(".60-17").show();
    $(".60-19").show();
    $(".60-20").show();
    $(".50-21").show();
    $(".50-22").show();
    $(".50-24").show();
    $(".50-25").show();
    $(".40-26").show();
    $(".40-27").show();
    $(".40-29").show();
    $(".40-30").show();
    $(".30-31").show();
    $(".30-32").show();
    $(".30-34").show();
    $(".30-35").show();
    $(".25-36").show();
    $(".25-37").show();
    $(".25-39").show();
    $(".25-40").show();
    $(".20-41").show();
    $(".20-42").show();
    $(".20-44").show();
    $(".20-45").show();
    $(".15-46").show();
    $(".15-47").show();
    $(".15-49").show();
    $(".15-50").show();
  }
}

// Handles the loading screen events
app.modules.loadingScreen = {
  changeLoaderText: function(text, delay, callback) {
    // if (app.debug) return callback();
    return setTimeout(function() {
      $(".loading-screen .app-status span").html(text);

      return callback(true);
    }, delay);
  },  
    
  showAuthSuccess: function(callback) {
    return this.changeLoaderText('<h3 style="color: #8DC500;"><i class="fa fa-check"></i> Your device has been successfully authenticated!</h3>', 1000, callback);
  },
  showAuthFailure: function(callback) {
    return this.changeLoaderText("<h3 style='color: #DC4545;'><i class='fa fa-warning'></i> There was a problem authenticating your device. Please try again.</h3> <small>Please login or contact us at 405-555-5555</small><br><button id='authenticate' class='btn btn-xlg btn-primary'><i class='fa fa-key'></i> Authenticate</button>", 1000, callback);
  },
  disableLoader: function() {
    return setTimeout(function() {
      $(".loading-screen").fadeOut('fast', function() {
        $(".app").fadeIn('fast');
        $("#row1").hide();
        $("#row2").hide();
        $("#row3").hide();
        $("#row4").hide();
        $("#row5").hide();
        $("#row6").hide();
        $("#row12").hide();
        $("#row1-spacer").hide();
        $("#row2-spacer").hide();
        $("#row3-spacer").hide();
        $("#row4-spacer").hide();
        $("#row5-spacer").hide();
        $("#row6-spacer").hide();
        $("#row12-spacer").hide();
      });
    }, 2500);
  }
}

// Handles login page and configuration.
// TODO: Refactor names
/*app.modules.login = {
  loginModal: $('[data-remodal-id=loginModal]').remodal(),
  loginModalBody: $('[data-remodal-id=loginModal]'),

  initialize: function(callback) {
    app.state = "authentication";
    // Get a reference to the current "this" object which happens to be the entire login module (app.modules.login)
    var that = this;

    // Check if we have a token in local storage to avoid extra server calls.
    chrome.storage.sync.get("auth", function(e) {
      // if(e && e.auth) {
      //     // Token exists in chrome storage
      //     app.modules.loadingScreen.showAuthSuccess(function() {

      //         // Main application method that triggers setup of all components
      //         app.initApp();
      //     });

      //     return callback(e);
      // }

      // We made it this far so it must be a first time activation
      // Listen for a message back from outside the sandbox and act on it
      // This listens for a message from outside the sandbox.
      window.addEventListener("message", function(e) {
        var token = e.data;

        chrome.storage.sync.set({
          auth: token
        }, function(e) {
          if (token.authorized) {
            app.modules.loadingScreen.showAuthSuccess(function() {
              return callback(token);
            });
          } else {
            // We didn't authenticate, show an error and close the modal
            app.modules.loadingScreen.showAuthFailure(function() {
              return;
            });
          }
        });
      });

      // Send a message to the outside container to interact with HTTP and Service calls. (externalServices.js);
      var device = {};
      device.action = 'AUTH';

      // Send message to parent container.
      window.parent.postMessage(device, "*");
    });
  },
  bindEvents: function() {
    var authenticateBtn = $("#authenticate");

    authenticateBtn.on('click', function() {
      app.modules.login.initialize();
    });
  },

  login: function() {

  }
}*/
