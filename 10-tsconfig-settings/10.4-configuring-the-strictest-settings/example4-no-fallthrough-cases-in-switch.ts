// No fallthrough cases in switch

function evenOrOdd(a: number) {
  switch (a) {
    case 0: // Missing break or return results in error when noFallthroughCasesInSwitch is true
      console.log("even");
    case 1:
      console.log("odd");
      break;
  }
}

evenOrOdd(1); // odd
