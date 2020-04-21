// eslint-disable-next-line no-unused-vars

function fn0() {
}

function fn1() {
}

function fn2() {
}

function fn3() {
}

// eslint-disable-next-line no-unused-vars
const middleware = [fn0, fn1, fn2, fn3];

function compose(){
//  返回一个等同于fnMiddleware的函数，
}
const fn = compose(middleware);

// fn即fnMiddleware
const fnMiddleware = function(ctx) {
  // eslint-disable-next-line no-undef
  return Promise.resolve(fn0(ctx, () => {
    return Promise.resolve(fn1(ctx, () => {
      return Promise.resolve(fn2(ctx, () => {
        return Promise.resolve(fn3(ctx, () => {
          return Promise.resolve();
        }));
      }));
    }));
  }));
};

// todo 注意 在数组项中声明的函数相当于匿名函数，即便是写了名字也是无效的。
// async函数返回一个Promise对象
/*
* 使用对象字面量设置对象的访问器属性和使用Object.defineProperty方法设置有哪些区别呢？
*
*
* */

