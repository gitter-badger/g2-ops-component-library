App Bar Example:

CAS Portal:
```jsx
<div style={{ margin: "0px" }}>
  <AppBar
    config={[ 'flag', 'yard', 'phone' ]}
    isLoggedOn
    countryCode={'us'}
    yardNumber={12}
    phoneNumber={7834873587}
   />
</div>
```

Cobalt Portal:
```jsx
<div style={{ margin: "0px" }}>
  <AppBar
    config={[ 'flag', 'role', 'yard' ]}
    isLoggedOn
    role={'Germany Office Employee'}
    countryCode={'de'}
    yardNumber={5001}
   />
</div>
```