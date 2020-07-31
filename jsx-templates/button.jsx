//this template will live on USWDS repo
//--sandbox for styles.css--//
//https://codesandbox.io/s/bold-voice-xwend?file=/src/App.js

exports.buttonFunc = function (config) {
  return `
    //functions
    function hoverOn(e) {
      e.target.style.background = "green";
    }
    function hoverOff(e) {
      e.target.style.background = "white";
    }
    function focus(e) {
      e.target.style.background = "red";
    }
    
      <Button
        onClick = {${config.onClick ? config.onClick : false}}
        onMouseEnter = {${config.onMouseEnter ? config.onMouseEnter : false}}
        onMouseLeave = {${config.onMouseLeave ? config.onMouseLeave : false}}
        onFocus = {${config.onFocus ? config.onFocus : false}}
        inverse = {${config.inverse ? config.inverse : false}}
        disabled = {${config.disabled ? config.disabled : false}}
        outline = {${config.outline ? config.outline : false}}
        unstyled = {${config.unstyled ? config.unstyled : false}}
  
      />`;
};
