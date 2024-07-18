function outerFnc(outer) {
  return function innerFnc(inner) {
    console.log("Outer function" + outer);
    console.log("Inner function" + inner);
  };
}

const newFnc = outerFnc("outer fnc ++");

newFnc("inner fnc ++");
