---
marp: true
---

# F&C: react-hook-form

OHl - etnetera@2022

---

# Obsah

1. controlled formuláře v react
2. react hook form - obecné info
3. react hook form - demo
4. diskuse na téma formulářů obecně

`disclaimer:`
`přednáška primárně jako doplňující přehled pro studenty ETN ReactAcademy`

---

# Controlled formuláře

- "two way binding" pro uchování hodnoty inputu a jeho kontrolu
- `onChange` attribut s použitím handler funkce pro update `state`
- `value` se rovná hodnotě `state`
- nevýhoda je re-rendering child komponenty při změně `state` parent komponnety

---

# Příklad controlled formuláře

```tsx
<form onSubmit={handleSubmit}>
  <label>
    Jméno
    <input type="text" name="firstName" onChange={handleChange} />
  </label>
  <br />
  <label>
    Příjmení
    <input type="text" name="lastName" onChange={handleChange} />
  </label>
  <br />
  <label>
    profese
    <select onChange={handleChange} name="profession">
      <option value="">vyber</option>
      <option value="dev">developer</option>
      <option value="civil">civilista</option>
    </select>
  </label>
  <br />
  <input type="submit" value="Odeslat" />
</form>
```

---

# Příklad controlled formuláře - useState a handler funkce

```tsx
const [formData, setFormData] = useState({});

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  alert(`form submit data: ${JSON.stringify(formData)}`);
};

const handleChange = (e: Event) => {
  const { value, name } = e.currentTarget;
  setFormData({ ...formData, [name]: value });
};
```

---

# ReactHookForm (RHF) - obecné info

- knihovna na práci s formuláři pro ReactJS a ReactNative
- poslední verze je v7, na githubu cca 29k hvězdiček, stále aktualizované
- https://github.com/react-hook-form/react-hook-form
- bez dalších dependencies
- lightweight
- dobře dokumentované API - https://react-hook-form.com/api
- aktuálně probíhá vývoj extension pro chrome: https://github.com/react-hook-form/devtools-extension
- novinky na twitteru: https://twitter.com/HookForm

---

# RHF - demo

1. zkopírování formuláře z první části
2. instalace react-hook-form
3. useForm hook
4. validace

---

# RHF - demo

add2) npm install react-hook-form
add3) zbavíme se `onchange` a `name` v inputech nahrazením funkce `register`
add3) obalíme `onSubmit` handlerem s react hook form `handleSubmit`
add4) doplníme funkci register o validace, jedná se o druhý parametr funkce register

---

# Diskuse

- jaké jiné knihovny používáte?
- na jaké problémy jste narazili při používání knihoven pro formuláře?
- code examples: https://github.com/react-hook-form/react-hook-form/tree/master/examples
