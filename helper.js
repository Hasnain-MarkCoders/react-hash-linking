export const scrollWidthOffset = (el, customOffSet) => {
    console.log("customOffSet==================================>", customOffSet)
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset =!Boolean(customOffSet) ? -100 : customOffSet; 
    console.log("yOffset==================>", yOffset)
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}