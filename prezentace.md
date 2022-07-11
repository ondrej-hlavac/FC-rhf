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
