/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.

 */

// api-storage   Local Storage

//user chart distance inches
var writeChartDistanceInchesLocalStorage = function (chart_distance_Inches) {
    window.localStorage.setItem("chart_distance_Inches", chart_distance_Inches);
    console.log('chart_distance_Inches ' +chart_distance_Inches + ' store successfully' );
}
var readChartDistanceInchesLocalStorage = function() {
    var value = window.localStorage.getItem("chart_distance_Inches");
    if (value) {
        console.log('chart_distance_Inches is ' +value );
    	return value;       
    } else {
        console.log('chart_distance_Inches not found');
        return 240;
    }
}


//user screen height pixels
var writeScreenHeightPixelsLocalStorage = function (screen_height_pixels) {
    window.localStorage.setItem("screen_height_pixels", screen_height_pixels);
    console.log('screen_height_pixels ' +screen_height_pixels + ' added successfully' );
}
var readScreenHeightPixelsLocalStorage = function() {
    var value = window.localStorage.getItem("screen_height_pixels");
    if (value) {
        console.log('screen_height_pixels are ' +value );
    	return value;       
    } else {
        console.log('screen_height_pixels not found');
        return 1080;
    }
}


//user screen height inches
var writeScreenHeightInchesLocalStorage = function (screen_height_inches) {
    window.localStorage.setItem("screen_height_inches", screen_height_inches);
    console.log('screen_height_inches ' +screen_height_inches + ' added successfully' );
}
var readScreenHeightInchesLocalStorage = function() {
    var value = window.localStorage.getItem("screen_height_inches");
    if (value) {
        console.log('screen_height_inches are ' +value );
    	return value;       
    } else {
        console.log('screen_height_inches not found');
        return 11.525;
    }
}
//user chart mirror state
var writeChartMirrorStateLocalStorage = function (mirrorState) {
    window.localStorage.setItem("mirrorstate", mirrorstate);
    
}
var readChartMirrorStateLocalStorage = function() {
    var value = window.localStorage.getItem("mirrorstate");
    if (value) {
        
        return value;       
    } else {
        
        return "direct";
    }
}


