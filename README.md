# Introduction

Teacher said that beside sometimes you can see object oriented programming in React Native world, is more common to see functional programming in React world.


# React Dom, React Native and the core

Teacher said that besides we have a different render strategy between React web and React Native, the use the same core.

![React Dom, React Native and the core](images/react-dom-react-native-and-core.png)

They differ in strategies to render components and the strategies, but the solutuion at all have common strategies to, as example:

- manage the components;
- send a component from a place to another place;
- manage states;
- manage values.

Teacher make his affirmattion more strong showing that in web we have to include sepparted parts in the application:

![React dependencies in web world](images/react-dependencies-in-web-world.png)

And teacher said that this is why you only find results related to "React hooks" and not to "React Native hooks". Hooks are linked to the core, not to a speciic render strategy.

Teacher said that other **examples** of render strategies are:

- One linked to augument reality;
- Other linked to Preact.


# Setup of a test project

Teacher created a test project with the command:

```
npx create-expo-app my-hooks -t
```

Then he selected the template "Blank (Typescript)".

And he executed the project with the commands:

```
cd my-hooks
npm run start
```


# Incrementing and decrementing a quantity without hooks

Teacher developed a code similar o this:

![increment and decrementing a quantity without hooks](images/increment-and-decrementing-a-quantity-without-hooks.png)

And if you run the code of the image (code of tests/01/my-hooks **now**, I will change in future), you will see that the quantity in the console changes as you expect, but the screen of the app no.

![console of the test app without hooks](images/console-of-the-test-app-without-hooks.png)

And teacher explained that this occurs because you need a hook to link React Core with React Native libraries.

![core and react native libraries link with a hook](images/core-and-react-native-libraries-link-with-a-hook.png)


# Changing the code to use hooks

See this git diff:

![git diff](images/sending-to-console-the-same-value-that-is-presented-in-the-screen.png)

As you can see in green, the new code can send to the console the exact value that is presented in the screen. Before you saw the value before it is changed to be displayed in the screen.

Teacher passed an interesting example. In that example he chained two hooks, see:

![using two useState hooks](images/using-two-useState-hooks.png)


# Use effect

We talked in some paragraphs above about the hook **use state**. Now we will talk about the hook **use effect**.

Teacher showed us that this is the basic structure of the useEffect hook:

![basic usetEffect hook structure](images/basic-usetEffect-hook-structure.png)

With this hook you can surveillance a variable and be notification when a change occurs on this variable.

The declaration may seen a little different of the declaration  of the useState hook. Yes, they differ on the declaration.

You also can make a surveillance on two variables.

![surveillance on two variables](images/surveillance-on-two-variables.png)

Also, you can make a surveillance on the app initialization, without specifying a variable:

![surveillance without variables](images/surveillance-on-the-app-initialization-without-variables.png)


# useRef

The import is done in a similar way to other hooks:

```
import { useRef } from "react";
```

On the start of the explanation teacher said a little obvious comment, but **very** important. On using a &lt;TextInput&gt; he has to import it. And he said something like:

"The &lt;TextInput&gt; I have to import from 'react-native' because he is linked to the visual part of the app. And hooks are more connected to the logic part, so I have to import from 'react'."

![importing a text input](images/importing-a-text-input.png)

I saw teacher also inserted an **inline stylezation** with **double brackets**, see:

![style inline - double brackets](images/style-inline--double-brackets.png)

Teacher explaned that in "HTML" world we can use "id"s to specify what element we wanna retrieve (to retrieve a value or change it). In React Native we have to use te **useRef** hook.





# Final comments of the teacher

Resume:

- **useState**: you will use to store the state. You will store the state in the memory and can react in the visual part of the app. This parts "have a conversation";


# Repository related to the classes

[link](https://github.com/digitalinnovationone/trilha-react-native-main-hooks)