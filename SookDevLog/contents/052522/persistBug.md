---
date: "2022-05-25"
title: "persist bug fix"
categories: ["React", "Redux-persist", "BugFix", "Typescript"]
summary: "PersistGate' cannot be used as a JSX component... λ²κ·Έν΄κ²°"
thumbnail: "./persistBug_1.png"
---

<h1>πͺ² PersistGate' cannot be used as a JSX component. Its instance type 'PersistGate' is not a valid JSX element. The types returned by 'render()' are incompatible between these types. μλ¬ ν΄κ²°</h1>

νΌμ νκ³ μλ νλ‘μ νΈ μ€ css λ‘ μ΄μ©νλκ² μμλλ° μ λΆνΈν΄μ tailwind λ₯Ό μ€μΉνλ€.
κ·Έλμ κ°μΈ νλ‘μ νΈ λ° νμ¬μμλ μ°κ³ μλ νμΌμλλΌμ μλ¬΄λ° μμ¬μμ΄ μ€μΉνμ§λ§
λ¬κΈμμ΄ redux-persistμ PersistGate μμ νμμλ¬κ° λ¬λ€.

μλ¬νλ©΄μ μΊ‘μ³νμ§ λͺ»νμ§λ§ μλ¬μλ΄μ©μ μ λͺ©κ³Ό κ°λ€.

<h3>" PersistGate' cannot be used as a JSX component. Its instance type 'PersistGate' is not a valid JSX element. The types returned by 'render()' are incompatible between these types. " </h3>

stackoverflow μ λμ λΉμ·ν μλ¬λ₯Ό κ°μ§ μ¬λμ΄ μ¬λ¦°κ² μμ΄ λ§ν¬ κ±Έμ΄λλ€.
<br/>
<br/>
Link ππΌ 'https://stackoverflow.com/questions/71826046/react-native-persistgate-cannot-be-used-as-a-jsx-component-its-instance-type
<br/>
<br/>
νμ§λ§ μλ¬λ§ κ°μ λΏ, μ±νλ λ΅λ³κ³Ό μ΄λ―Έ κ°μ

```js
"@types/react": "17.0.2",
"@types/react-dom": "17.0.2"
```

λ²μ μ μ°κ³  μμκΈ°μ μ½μ§μ κ½€λ μ€λ νλ€.
μΌλΆλ¬ μλ¬ λ§μ΄λ κΉλ΄ λ¦¬μ‘νΈ18λ²μ μΌλ‘ μκ·Έλ μ΄λ μνκ±΄λ°γ γ 

<h2>κ²°κ΅­μ νμμλ¬</h2>

<b>μμκ°μ μλ¬λ₯Ό λ΄λ μ΄μ λ₯Ό ν¬κ² μΈκ°μ§λ‘ λλλ©΄</b>

<ul>
1. λ¨μΌ μμ λμ  JSX μμμ λ°°μ΄μ λ°νν  λ.<br/>
2. JSX μμ λλ κ΅¬μ± μμ μ΄μΈμ κ° (null) λ°νν  λ.<br/>
3. React νμμ€ν¬λ¦½νΈμ λ²μ μ΄ λ§μ§ μμλ. (λ¬΄μ‘°κ±΄μ μΌλ‘ κ΅¬ λ²μ μΌλλ μλκ² κ°λ€.)<br/>
</ul>

λλ μ¬μ§κ³Ό κ°μ΄
<img src = "./persistBug_1.png" alt="type-bug" />
μ΅μλ¨μ index.tsx μμ ReactDOM.render μμμ κ°μΈμ£Όκ³  μμΌλ―λ‘ 1,2λ²μ μλκ±°λΌκ³  νλ¨νλ€.
( μ¬μ€ Provider μ PersistGateλ₯Ό App.tsx λ‘ μ?κΈ΄ ν <>μμλΈλ</> λ‘ κ°μΈλ΄€μ§λ§ μ¬μ ν μλ¬λ λ°μνλ€ )

```js
npm install --save-dev @types/react@latest @types/react-dom@latest
or
yarn add @types/react@latest @types/react-dom@latest --dev
```

λ μ€ μ¬μ©νκ³  μλ κ²μΌλ‘ κ³¨λΌ μ€μΉν΄μ£Όλ©΄ λ§λνκ² ν΄κ²°λλ€!
(κ²°κ΅­μ @types/react 18λ²μ  ,, ,, γ)

```js
"dependencies": {
    "@types/react": "^18.0.9",
    "@types/react-dom": "^18.0.5",
},
```
