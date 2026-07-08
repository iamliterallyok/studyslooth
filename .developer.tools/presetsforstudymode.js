{
  sessionStorage.setItem("setToUse", "1");
  localStorage.setItem("darkmode", "0");
  numqat = 5;
  localStorage.setItem("1qat", numqat.toString());
  for (i = 1; i <= numqat; i++) {
    localStorage.setItem("1q".concat(i.toString()), "Question ".concat(i.toString(), "?"));
    localStorage.setItem("1a".concat(i.toString()), "Answer ".concat(i.toString(), "."));
  }
}
