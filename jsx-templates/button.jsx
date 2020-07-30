//this template will live on USWDS repo
//--sandbox for styles.css--//
//https://codesandbox.io/s/bold-voice-xwend?file=/src/App.js

exports.buttonFunc = function (config) {
  return `
    //css & styling attributes
    const inverse = config.inverse ? true : false;
    const disabled = config.disabled ? true : false;
    const outline = config.outline ? true : false; 
    //is unstyled needed if we are defining how we want a button(Example: if config object is empty button will be unstyled)
    const unstyled = config ? true : false;
    
    //button function atributes
    const onFocus = config.onFocus ? true : false; 
    const onMouseEnter = config.onMouseEnter ? true : false;
    const onMouseLeave = config.onMouseLeave ? true : false;  
    const onClick = config.onClick ? true : false; 
  
  
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
        onClick = {${config.onClick}}
        onMouseEnter = {${config.onMouseEnter}}
        onMouseLeave = {${config.onMouseLeave}}
        onFocus = {${config.onFocus}}
        inverse = {${config.inverse}}
        disabled = {${config.disabled}}
        outline = {${config.outline}}
        unstyled = {${config.unstyled}}
        
      />
      `;
};
