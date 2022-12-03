
export const generateBreakPoints = (listLength) => {
    let breakpoints = 1;
    if(listLength===1){
      breakpoints={
        default: breakpoints,
        1100: 1,
        700: 1,
      }
      } else if (listLength>0 && listLength<4) {
        breakpoints={
        default: breakpoints,
        1100: 2,
        700: 1,
      };
    } 
    
    else {
        breakpoints={
        default: 4,
        1100: 2,
        700: 1,
      };
    }
    return breakpoints
  
}