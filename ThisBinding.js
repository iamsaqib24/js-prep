Function.prototype.myCall = function (thisContext, ...args) {
  const symbol = Symbol();
  thisContext[symbol] = this;
  const result = thisContext[symbol](...args);
  delete thisContext[symbol];
  return result;
};

Function.prototype.myApply = function (thisContext, args = []) {
  const symbol = Symbol();
  thisContext[symbol] = this;
  const result = thisContext[symbol](...args);
  delete thisContext[symbol];
  return result;
};

Functi.prototype.myBind = function (thisContext, ...args) {
  const result = (...args1) => {
    return this.myCall(thisContext, ...args, ...args1);
  };
  return result;
};
