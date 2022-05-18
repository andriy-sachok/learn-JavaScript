const highlightParas = (containing) => {
  if (typeof containing === 'string'){
    containing = new RegExp(`\\b${containing}\\b`, 'i');
  }
  const paras = document.querySelectorAll(`p`);
  console.log(paras);
  for (let p of paras) {
    if(!containing.test(p.textContent)) continue;
    p.classList.add('highlight');
  }
}
highlightParas('unique');

const removeParaHighlights = () => {
 const paras = document.querySelectorAll(`p.highlight`);
 for (let p of paras){
   p.classList.remove(`highlight`);
 } 
}