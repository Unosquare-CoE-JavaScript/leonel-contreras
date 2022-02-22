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

[1.10. Generator.](#generator) 


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

