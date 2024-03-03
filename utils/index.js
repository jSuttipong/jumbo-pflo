const mouseScrolling = (el) => {
  el.addEventListener("mousewheel", (e) => {
    // if (scrollingToView === true) {
      if (e.deltaY < 0) {
        console.log("scrolling up from index utils");
        return 'up'
      } else if (e.deltaY > 0) {
        console.log("scrolling down from index utils");
        return 'down'
      }
    // }
  });
};

const touchScrolling = (el) => {
    let touchStartPosX = 0;
    let touchBh = ''
    el.addEventListener('touchmove', (e) => {
    // if (scrollingToView === true) {
      // Different devices give different values with different decimal percentages.
    const currentPageX = Math.round(e.changedTouches[0].screenY);
    if (touchStartPosX === currentPageX) return;

    if (touchStartPosX - currentPageX > 0) {
      console.log("down from index utils");
    //   return 'down'
    touchBh = 'down'
    } else {
      console.log("up from index utils");
    //   return 'up'
    touchBh = 'up'
    }
    touchStartPosX = currentPageX;
    // }
    return touchBh
  });
}


export {mouseScrolling, touchScrolling}