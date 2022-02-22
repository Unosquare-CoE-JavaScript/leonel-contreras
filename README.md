# Leonel Contreras <a name='leo'></a>

Hi it´s me Leo and this is my learning path.
In this path I do some courses, exercises or lectures,
if you are interested in checking any of them you can click
the link and get some description about it.

## Principal content:

[ 1. Asynchronous javascript deep dive. ](#asynchronous-javascript-deep-dive)


Okay, are you ready?, Here we go.


<a name='asynchronous-javascript-deep-dive'></a>

## 1. Asynchronous javascript deep dive. 
[Back to principal content](#leo)

In this course we´ll check the most important concepts releated
to async code, how it works, how to use it, how lo lead with it, and
how to improve it, we can see the principal topics below, please feel
free to check eveyone!.

### Content:

[1.1. Memory heap.](#heap)

[1.2. Call stack.](#call-stack)

[1.3. Callback queue.](#callback-queue)

[1.4. Job queue.](#job-queue)

[1.5. Event loop.](#event-loop)

[1.6. Async vs sync code.](#async-sync)

[1.7. Callbacks.](#callbacks)

[1.8. Promises.](#promises)

[1.9. Async / await.](#async-await)

[1.10. Generator.](#generators) 


<a name='heap'></a>
### 1.1. Memory Heap:

 This is where all the information it´s saved, storing all variables defined in the program,
and we need it because at the end all programs are a sequency of read and write operations.

<a name='call-stack'></a>
### 1.2. Call Stack:

 Is a classic stack that store the function calls, first in is last out (LIFO).
 We need to remember that JS is single-thread, this mean that we can execute one code at time, 
 when we write JS code we need to keep it in mind because JS environment are very interactives,
 and we need to avoid blockings.


<a name='callback-queue'></a>
### 1.3. Callback queue:

This element contains your asynchronus code waitinig for execution.
An asynchronus code initially move to the call stack and it´s move 
to callback queue trough event table after specified time.
when it´s ready, it is moved to the call stack to gets popped out.


<a name='job-queue'></a>
### 1.4. Job queue:

It´s used for Promises functionality that means when you use Promises
in your code, you add then() method, which is a callback, these methods
are added to job queue. Once the promise has returned/resolved then gets
executed.


<a name='event-loop'></a>
### 1.5. Event loop:

Is always runnig and continuosly cheking the call stack for any
frame to execute, when hasn´t anything pending then check the callback
queue, if has code to execute then it pops the message from ot to the
call stack for execution.


<a name='async-sync'></a>
### 1.6. Async and sync code

#### 1.6.1. Synchronous code:

Are codes that execute line to line, in orden to execute the next line, needs to finisih the previous one.
When a process is very complex could take a lot of time to finish, blocking other processes, this mean 
you can´t doing anything else until the process end, we called this blocking code.

#### 1.6.2. Asynchronous code:

Are codes that don´t need to wait to previous lines finish to execute new ones, when we use Asyncronus we
know that in some point in the time we'll get a response, but we don´t know when, this kind of code it´s called
no-blocking code, the most of the time in JS we prefer use it, but may exist some exceptions for example
maybe we want to wait and don´t do anything else until user response.

#### 1.6.3. Advantages and disadvantages:

##### 1.6.3.1 Synchronous code:

- Advantage: Easy to write and to reason about it.
- Disadvantage: May create blocking code.
- Disadvantage: Less performance.

##### 1.6.3.1 Asynchronous code:
- Advantage: very performant.
- Advantage: Eliminates code blocking.
- Disadvantage: It can be difficult to reason about.
- Disadvantage: Harder to write.


<a name='callbacks'></a>
### 1.7. Callbacks

Callbacks are the traditionally way to implement async code in JS and avoid blocking code. 
A callback is just a simple function that is execute when something happend.

#### 1.7.1. How callbacks are possible?

In javascript exist objects we can define it, but also variables are object
and maybe the most wear situation it´s that functions also are objects,
this is very important in JS 'cause allow you to pass function to another
functions (A function that receives another function trough param it´s called
higher order function), and this allows you to execute a function inside another 
function. 


#### 1.7.2. Examples

A very basic example of callbacks are events, for example listen for a click
in some button, we attach some function to the click event, and when click happend
we execute it.

```javascript
  button.addEventListener('click', function(event) {
    console.log('You click the button')
  })
```

#### 1.7.3. Problems

- Callback hell: When you use a lot of nested callback it´s very complex to understand the code, and trying to solve bugs is a very hard task, (because when we use this pattern it´s very common to use anonymous functions),  when it happend the console isn´t abble to find the name of the function when the error happend and only throws and error occurs in and anonymous function :(, but which?.
- Difficult to reason about it: Trying to understand callbacks is complex, because combine a lot of differents concepts that are not very common, specially if you come from more classical languages, things like functions are objects, you can pass it as a params, Higher order functions, async code, and also the structure itself is a little bit different.
- Inversion of control: When you use callbacks you get a lot of power, but you need to accept that you lost the control, you don´t have any control when you will get a response, and also in some cases you don´t know if you will get a response.

#### 1.7.4. Some examples

[Examples](https://github.com/Unosquare-CoE-JavaScript/leonel-contreras/tree/asynchrounus-jsdeep-dive/asynchronus-javascript-deep-dive/callbacks/examples)


<a name='promises'></a>
### 1.8. Promises

Promises are simple javascript objects with properties and methods,
we use that methods to take adventage of promises, represents the eventually completion or failure in an asynchronous operation.
And finally when a promise is complete provides a value with the result of the operation, promises are powerfull way to implement async code in JS.

#### 1.8.1. States

- Pending: No finished yet.
- Resolved: The promise it´s finished and we had a value to work with it.
- Rejected: The promise it´s finished with an error.

#### 1.8.2. Basic methods

- then: It´s the asynchronous function that will be executed when we get a successful response (resolved), this function always return a value

```javascript
   promise.then((response) => {
     console.log('Do something')
   })
```
- catch: When an error happend or the promise is rejected, we use the method catch to handled the errors through the async function that we send.

```javascript
    promise.catch((error) => {
     console.log('Do something :(')
   })
```


- finally: This method it´s executed no matter what happend, thus it´s useful to clean or restart data

```javascript
   promise.finally(() => {
     console.log('Do something')
   })
```

#### 1.8.3. Powerfull methods
Additionally the promise constructor has very powerfull methods that are important to mention.

- all: this function receives an array of promises and wait for everyone to finish, if an error occurs the promise all it´s rejected, and we can use catch to handled it.

```javascript
   Promise.all([
     getMessage('Hola', 1000),
     getMessage('Cómo estas?', 2000),
     getMessage('Bye', 3000)
   ]).then(data => {
     console.log('data --->', data)
   })
```
- race: this function receives an array of promises and wait for someone to finish to be resolved. If  someone fail the promise race it´s rejected.

```javascript
   Promise.race([
     getMessage('Hola', 1000),
     getMessage('Cómo estas?', 2000),
     getMessage('Bye', 3000)
   ]).then(data => {
     console.log('data --->', data)
   })
```

- allSettled: this method return all the promises' result no matter if someone was rejected.

```javascript
   Promise.allSettled([
     getMessage('Hola', 1000),
     getMessage('Cómo estas?', 2000),
     getMessage('Bye', 3000)
   ]).then((results) => results.forEach((result) => console.log(result.status)))
```
- any: this method return a promise that resolves as soon as any of the promises is resolved. if don´t happen is rejected.

```javascript
   Promise.any([
     getMessage('Hola', 1000),
     getMessage('Cómo estas?', 2000),
     getMessage('Bye', 3000)
   ]).then((response) => console.log(response))
```

#### 1.8.4. Some examples

[Examples](https://github.com/Unosquare-CoE-JavaScript/leonel-contreras/tree/asynchrounus-jsdeep-dive/asynchronus-javascript-deep-dive/promises/examples)

<a name='async-await'></a>
### 1.9. Async / await

Async/await functionality it's an away to simplify Promises through making it look
like sync code, but including the async functionality from promises. to doing this 
it´s more easy to reason about promises, basically async/await extend Promises
making it more powerful, extend don´t mean that we don´t use Promises anymore, 
we stil find useful cases for promises.

#### 1.9.1. How it look like?

Async / await comes with the function definition and wrap the result in a promise to be handled for the client.


```javascript
   const getData = async () => {
     return await service.getData()
   }
   
   const data = await getData() // Inside another async function
```

#### 1.9.2. Keep in mind

- async/await doesn´t make your code asynchronous, it´s just a mecanism to handle async code, to make it easy to understand.
- async/await doesn´t help you to improve the application's performance.
- You don´t need to implement asyn/await all around your application, you only use it if make sense, just keep in mind that easy to read code it´s always prefer.


#### 1.9.3. Some examples

[Examples](https://github.com/Unosquare-CoE-JavaScript/leonel-contreras/tree/asynchrounus-jsdeep-dive/asynchronus-javascript-deep-dive/async-await/examples)


<a name='generators'></a>
### 1.10. Generators

Generators are functions that can return multiple values, one after another,
on user demand, they works specialy good with iterations, allowing you to create
data stream with ease.

#### 1.10.1. How it look like?

We need to specify that a function is a generator using * in the function declaration. In order to provide new values we need to use yield to provide values to consumers.

``` javascript

    function *randomNumber(limit = 100) {
      while (true) {
        yield Math.floor(Math.random() * limit) + 1
      }
    }

```

#### 1.10.2. How to consume ?

In order to consume, we need to call the function to get a generator.
for consume values we need to call the function next provided by the generator

``` javascript
    console.log(randomNumber(100).next())
```

#### 1.10.3. Keep in mind

A generator cand send and also receive information from outside, this mean you can send data
in every consume iteration and use it inside the generator this is so powerful way to work with
generator.

```javascript
   *gen() {
     let dataFromOutside = yield "Send data please"
     console.log(dataFromOutside)
   }

   generator.next('Send value')
```

#### 1.10.4. Some examples

[Examples](https://github.com/Unosquare-CoE-JavaScript/leonel-contreras/tree/asynchrounus-jsdeep-dive/asynchronus-javascript-deep-dive/generators/examples)



