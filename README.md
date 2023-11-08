# `Wrappid` Module Boilerplate
```
                                    _     _
    __      ___ __ __ _ _ __  _ __ (_) __| |
    \ \ /\ / / '__/ _` | '_ \| '_ \| |/ _` |
     \ V  V /| | | (_| | |_) | |_) | | (_| |
      \_/\_/ |_|  \__,_| .__/| .__/|_|\__,_|
                       |_|   |_|

```

**This is a template documentation, @wrappid/toolkit uses this template to create module boilerplate.**

- [`Wrappid` Module Boilerplate](#wrappid-module-boilerplate)
  - [1. Introduction](#1-introduction)
  - [2. Getting Started](#2-getting-started)
    - [2.1. What are my Pre-requisites?](#21-what-are-my-pre-requisites)
    - [2.2. How to Create?](#22-how-to-create)
    - [2.3 How to Use Modules?](#23-how-to-use-modules)
      - [2.3.1 Include module in `wrappid-[app|service]`](#231-include-module-in-wrappid-appservice)
      - [2.2.2 Exclude module from `wrappid-[app|service]`](#222-exclude-module-from-wrappid-appservice)
    - [2.3 Where to Code?](#23-where-to-code)
      - [2.3.1 Frontend](#231-frontend)
      - [2.3.2 Backend](#232-backend)
    - [2.4. How to see code in action?](#24-how-to-see-code-in-action)

## 1. Introduction   

This is a **module boilerplate** to build wrappid modules which serves specific technical needs or business specific needs.

## 2. Getting Started
This getting started section will help you setup a basic module built using the `Wrappid` framework Wrappid Projects. Follow the below steps to get going.   

[2.1. What are my Pre-requisites?](#21-what-are-my-pre-requisites)

[2.2. How to Create?](#22-how-to-create)

[2.3 How to Use Modules?](#23-how-to-use-modules)


### 2.1. What are my Pre-requisites?

- [Refer here](https://github.com/wrappid/#1-check-pre-requisites)
- install @wrappid/toolkit globally. [Click here](https://github.com/wrappid/#2-install-wrappid-toolkit)for installation guide of @wrappid/toolkit.

### 2.2. How to Create?
Run the below command to create Module Wrappid Project

```terminal
wrappid init module <wrappid>
```

**Output:**  
![wrappid-module](https://github.com/wrappid/.github/assets/61864488/fc0f4866-43d5-4e3a-92a6-7b3e0aa768ab)


Now you have a `<wrappid-module>` Module Wrappid Project at the directory the command was executed from.

> **_Note:_** _If you already have a wrappid-module project in your github, you need to clone it in the directory you have your `wrappid-[app|service]`._

### 2.3 How to Use Modules?

#### 2.3.1 Include module in `wrappid-[app|service]`

> **_Note:_** _You cannot setup or start a wrappid-module project like wrappid-app and wrappid-service._   

To use Wrappid module projects

- You need to `include` the module into your `wrappid-[app|service]`, from inside of the root of `wrappid-[app|service]`.   
- Your module must be located in the parent directory of  `wrappid-[app|service]` project.   
- Your `wrappid-[app|service]` should be setup.   

Run the below command from the root of the `wrappid-[app|service]` project you wish to include your module.   

```terminal
cd wrappid-[app|service]
wrappid include <module-name>
```

Wrappid modules are hot swappable, you can `include` and `exclude` a module while `wrappid-[app|service]` is running.



#### 2.2.2 Exclude module from `wrappid-[app|service]`   
To exclude a wrappid module

- You need to be inside at the root of `wrappid-[app|service]`,
- Your module must be located in the parent directory of  `wrappid-[app|service]` project.
- Your `wrappid-[app|service]` should be setup.

Run the below command from the root of the `wrappid-[app|service]` project you wish to exclude your module.

```terminal
wrappid exclude <module-name>
```

Make sure to not write `-module` following your <module-name>
<br />
Wrappid modules are hot swappable, you can `include` and `exclude` a module while `wrappid-[app|service]` is running.

### 2.3 Where to Code?
For frontend, we write code in ./app/components

For backend, we write code in ./service/components


#### 2.3.1 Frontend
We will now see how to write code for frontend in the module you have created.

For example the file you created is: ./app/components/portfolioPage.js




Then put an import of your code's function in components.registry.js
```js
import portfolioPage from "./components/portfolioPage"

//Add component page object   
export default function ComponentRegistry
{
PortfolioPage: {comp: portfolioPage}
}
```

To know more about frontend wrappid app, [click here](https://github.com/wrappid/wrappid-app)

#### 2.3.2 Backend


### 2.4. How to see code in action?
To see what we wrote in the browser, we will put another entry for our new component

Go to the routes.registry.js,
```js
{
portfolioPageRoute:{
Page: {AppComponent: "PortfolioPage" },
entityRef: 'uniquePortfolioPage',
URL:'portfolio'
} 
}
```

Now change your directory to the root of the project you wish to include this module into


Run

```terminal
wrappid include <module-name>
```


And start your project!

```terminal
wrappid start [web|mobile] --env=stage
```


You should be able to see render of your code at localhost:3000/portfolio
