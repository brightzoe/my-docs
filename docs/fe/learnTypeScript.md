## 背景

- 强类型 vs 弱类型 ：

  类型安全，更强的类型约束。**强类型不允许任意隐式类型转换，弱类型允许任意类型转换。**

- 静态类型语言 vs 动态类型语言：

  被声明类型是明确的，且不允许修改。
  在运行阶段才能够明确变量类型，且随时发生变化。

![](https://i.loli.net/2021/07/23/NdEFO2ryn5ReHic.png ":size=50%")

> JS：动态类型语言，弱类型。 被设计时，小规模脚本，且不需要编译。

强类型：
错误更早暴露。
代码更智能。
重构更牢靠。

## Flow

JS 的类型检查,是一个小工具，在需要的时候添加类型,学习成本较小。

- 使用方式

  `yarn add flow-bin`

  `yarn flow init`

  `yarn flow`

  > 工具推荐： vscode 插件 Flow Language Support

- 移除类型注解

  - `yarn add flow-remove-types`

    `yarn flow-remove-types . -d dist` //转换到某个目录下

  - `yarn add @babel/core @babel/cli @babel/preset-flow --dev`

    `{"presets":["@babel/preset/preset-flow"]}` //.babelrc

    `yarn babel src -d dist`

类型推断：如果未添加类型注解，则自动推断类型的特性，但尽可能还是添加类型注解。

> 思路：编写的代码和实际运行的代码分开，添加了编译的环节。

```js
// @flow  加在开头使用flow检测类型.也可用 /* @flow */

function sum(a: number, b: number) {
	//类型注解
	return a + b;
}

function foo(): void {
	//返回值的注解
	//类型注解：函数返回值为空
	//no return
}

//标识数组类型

//由数字组成的数组
const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

//元组：固定长度，固定类型的数组
const foo: [string, number] = ["foo", 1];

//标识对象类型

const obj1: { foo: string, bar: number } = { foo: "string", bar: 1 }; //至少有foo,bar这两个成员
const obj2: { foo?: string, bar: number } = { foo: "string", bar: 1 }; //添加?表示可选的

const obj3: { [string]: string } = {}; //k限制key和值的类型,不限制key的个数

//标识函数类型
function foo(callback: (string, number) => void) {
	//回调函数的参数以及返回值的类型注解
	callback("string", 1);
}

//特殊类型
const a: "foo" = "foo"; //字面量类型，只能是'foo'
const type: "success" | "warning" | "danger" = "success"; //联合类型，只能是其中之一
const b: string|number //string 或者字符串

const StringOrNumber = string |number //给类型定义别名，可复用了
const b: StringOrNumber

const gender:?number = null  //加?则可以使用null/undefined
const gender: number | null | undefined //与上面一致


//mixed any 所有类型都可
//mixed :强类型，不能隐式类型转换
//any ：不限制，可以隐式类型转换，可以兼容老代码，一般不要使用
function passMixed (value:mixed){
  //...
}
function passMixed (value:any){
  //...
}
```

更多类型查询： https://www.saltycrane.com/cheat-sheets/flow-type/latest/

## TS

### tsc 命令

`tsc hello.ts`
以上命令可以编译 `hello.ts`文件到 js,会在同一个目录下生成同名 js 文件。

`yarn tsc --init`
生成`tsconfig.json`

`yarn tsc --local zh-CN`
中文错误消息。

TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。而在运行时，与普通的 JavaScript 文件一样，不会对类型进行检查。

TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。

如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError

### 基础

#### 数据类型

```ts
const a: string = "foo";
const b: number = 100; //NaN,Infinity
const c: boolean = true;
const d: string = null; //严格模型不行
const e: void = undefined; //null/undefined
const f: null = null;
const g: undefined = undefined;
const h: symbol = Symbol();
let myFavoriteNumber: any = "seven"; //任意类型的值并且可以改变，一般不要使用，兼容老代码使用。
myFavoriteNumber = 7;

//Object类型
const foo: object = function () {}; // 也可以是[] // {}
const obj: { foo: number; bar: string } = { foo: 123, bar: "foo" }; //定义普通的对象,key要完全一致,不能多也不能少

//Array
const arr1: Array<number> = [1, 2];
const arr2: number[] = [1, 2];

//元组类型 {Tuple} 固定长度，固定类型的数组
//应用： React的useState, es2017的Object.entries({foo:123})
const tuple: [number, string] = [18, "foo"];
const age = tuple[0];
const [age, name] = tuple;

//枚举类型 {Enum} 只存在几个固定的值
// const postStatus ={Draft:0,Unpublished:1,Published:2} //js模拟枚举类型
enum postStatus { //枚举类型
	Draft = 0, //不指定值的话，从0开始累加。只指定第一个则从指定的值开始累加。也可以使用字符串。
	Unpublished = 1,
	Published = 2,
}
const post = {
	status: postStatus.Draft,
};
//枚举类型会入侵到编译后的代码。
//会被编译成双向键值对的对象：可以通过key读取，也可以通过value读取。

//常量枚举
//如果不通过索引值的方式读取枚举类型，推荐使用常量枚举。编译后枚举类型会被移除，使用的枚举值会被替换掉，以注释的形式标注。
const enum postStatus {}
//...

//函数类型
//函数声明式
function func1(a: string, b?: number): string {
	//添加参数和返回值的类型注解
	//参数个数也必须一致，不能多或少。
	//可选参数：添加问号或者使用参数默认值，必须在参数的最后一位
	//不限制参数个数 ：...rest:number
	return "foo";
}

//有什么好处？
function sum(...args: number[]) {
	//确保传过来的参数都是数字，不用单独进行类型判断。可靠。
	return args.reduce((prev, curr) => prev + curr, 0);
}

const func2: (a: number, b: number) => string = function (a: number, b: number): string {
	return "foo";
};
```

### 作用域问题

如果什么也不做，在两个文件声明同名的变量，则会产生冲突，需要声明为模块。

```ts
//一个文件加上export
export {}; //以模块形式导出，一般不这样做，因为一般每个文件（组件）会以模块形式使用
const a = 123;
```

### 隐式类型推断

```ts
let age = 18;
age = "foo"; //报错,被推断为number

let foo; //被推断为any
foo = 100;
foo = "foo";
```

### 类型别名

```ts
//顾名思义就是自定义一个类型，一般用于联合类型，给你想要的类型取一个别名
type person = "man" | "woman";
type TUser = string | number;
```

### 类型断言

```ts
const num = [11, 12, 14];
const res = num.find((i) => i > 0); //被推断为number/undefined

//可以断言res一定是num。
const num1 = res as number;
const num2 = <number>res; //JSX不能使用，会产生冲突
//断言与转换的区别：断言是在编译时的概念，转换是在运行时的概念。在编译后，断言就不存在了。
```

### 接口 interfaces

约定一个对象的结构。

为有结构的数据进行类型约束，编译后就无了。在运行阶段没有意义。

```ts
interface Post {
	title: string;
	content: string;
}
function printPost(post: Post) {
	console.log(post.title);
	console.log(post.content);
}
printPost({
	title: "hello ts",
	content: "js superset",
});

interface Post {
	title: string;
	content: string;
	subtitle?: string; //可选成员
	readonly summary: string; //只读成员，初始化后便不可修改
}

//动态接口
interface Cache {
	[key: string]: string;
}
```

### 类

```ts
class Person(){
  public name: string='init'//在这里或构造函数中声明初始值
  private age: number
  protected  readonly gender: boolean
  //public/private/protected 访问修饰符,控制可访问级别
  //private 私有属性,只能在类内部使用
  //protected 只能在子类访问
  //readonly 不能再修改了！

  constructor(name: string, age: number){
    this.name = 'foo'
    this.age = 18
  }

  sayHi (msg:string){
    console.log(`I an ${this.name},${msg}`)
  }
}


class Studen extends Person(){
  private constructor(name: string, age: number){
    super(name,age)
    console.log(gender)
  }

  //构造函数被private了，不能实例化这个类了，咋办捏
  //在类型内部使用静态方法创建实例！
  static create(name:string,age:number){
    return new Student{name, age}
  }
}

const Tom = Student.create('Tom',16)

```

### 类与接口

```ts

interface EatAndRun {
  //都有这些能力
  eat {food:string}:void
  run {distance:number}:void
}

//类是这个接口的实现
class Person implements EatAndRun{
  eat(food:string):void{
    console.log(`优雅地吃饭饭：${food}`)
  }
  run(distance:number):void{
    console.log(`跑步：${distance}`)
  }
}

class Animal implements EatAndRun{
  eat(food:string):void{
    console.log(`呼噜呼噜了：${food}`)
  }
  run(distance:number):void{
    console.log(`爬了：${distance}`)
  }
}

//在一些语言中，推崇一个接口实现一个能力。一个类可以使用很多接口
class AutoMan implements Eat,Run{
  //...
}
```

### 抽象类

```ts
//动物是猫猫，狗狗的抽象
abstract class Animal {
	//抽象类只能被继承，不能实例化
	eat(food: string): void {
		console.log(`呼噜呼噜了：${food}`);
	}
	abstract run(distance: number): void; //抽象方法，不需要具体实现
}

class Dog extends Animal {
	run(distance: number): void {
		console.log("...");
	}
}
```

### 泛型

```ts
//在定义函数接口或类的时候，不定义具体的类型。在使用的时候再去指定具体类型。
//目的：更大程度地复用代码

function createNumberArray(length: number, value): number[] {
	const arr = Array<number>(length).fill(value);
	return arr;
}
const res = createNumberArray(3, 1);

function createArray<T>(length: number, value: T): T[] {
	//T泛型，不明确类型，把类型变成一个参数，在调用的时候传递
	const arr = Array < T > { length }.fill(value);
}

const res = createArray<string>(3, "foo"); //调用的时候明确类型
```

### 类型声明

```ts
import { replace } from "lodash"; //没有类型声明
//一般常用地模块都有的，可以安装对应的类型声明模块。 .d.ts  一般的模块会直接包含类型声明，含有相关类型约束。

declare function replace(input: string): string; //如果没有类型声明，自己声明一下类型。
```

## Reference

1. [ts 入门教程](https://ts.xcatliu.com/)
2. [flow](https://flow.org/en/docs/usage/)