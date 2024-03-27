/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const main = () => {
    const firstCombination = getFirstCombination();
    const combinedArrays = getcombinedArrays(firstCombination);
    const secondCombination = getSecondCombination(combinedArrays);
    const combinedFinal = getcombinedArrays(secondCombination);
    const addedDotCom = getAddedDotCom(combinedFinal);
    printDomainNames(addedDotCom);
  };

  const getFirstCombination = () => {
    const array1 = ["the", "our"];
    const array2 = ["great", "big"];

    const result = array1.map(element => {
      const secondIteration = array2.map(item => {
        const resultSecond = element + item;
        return resultSecond;
      });

      return secondIteration;
    });

    return result;
  };
  const getcombinedArrays = arrays => {
    const mergedArray = arrays.reduce(
      (result, array) => result.concat(array),
      []
    );
    return mergedArray;
  };
  const getSecondCombination = array => {
    const array2 = ["jogger", "racoon"];

    const result = array.map(element => {
      const secondResult = array2.map(item => {
        const mergeElements = element + item;
        return mergeElements;
      });

      return secondResult;
    });

    return result;
  };
  const getAddedDotCom = array => {
    const dotComArray = array.map(element => {
      element += ".com";
      return element;
    });
    return dotComArray;
  };
  const printDomainNames = domainNames => {
    domainNames.forEach(element => {
      console.log(element);
    });
  };
  main();
};
