/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const main = () => {
    const firstCombination = getCombination(["the", "our"], ["great", "big"]);
    const secondCombination = getCombination(firstCombination, [
      "jogger",
      "raccoon"
    ]);
    const addedDotCom = getAddedDotCom(secondCombination);
    printDomainNames(addedDotCom);
  };

  const getCombination = (array1, array2) => {
    const result = array1.map(element => {
      const secondIteration = array2.map(item => {
        const resultSecond = element + item;
        return resultSecond;
      });

      return secondIteration;
    });
    const mergedArray = getCombinedArrays(result);
    return mergedArray;
  };
  const getCombinedArrays = arrays => {
    const mergedArray = arrays.reduce(
      (result, array) => result.concat(array),
      []
    );
    return mergedArray;
  };
  const getAddedDotCom = array => {
    const dotComArray = array.map(element => {
      element += ".com";
      return element;
    });
    return dotComArray;
  };
  const printDomainNames = domainNames => {
    const container = document.getElementById("container");
    let cadena = "";
    domainNames.forEach(element => {
      console.log(element);
      cadena += `<p class="px-5 py-2 bg-primary text-light mx-auto rounded"> ${element} </p>`;
    });
    container.innerHTML = cadena;
  };
  main();
};
