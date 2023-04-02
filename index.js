// define saturdayFun function declaration
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // define mondayWork function expression
  const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // define wrapAdjective function according to the specification
  function wrapAdjective(highlight="*") {
    return function(adjective="special") {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  