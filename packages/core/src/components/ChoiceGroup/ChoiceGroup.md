ChoiceGroup Example - 

```js
<div>
   <ChoiceGroup
       defaultSelectedKey="B"
       options={[
          {
              key: 'A',
              text: 'Option A',
          },
          {
              key: 'B',
              text: 'Option B'
          },
          {
              key: 'C',
              text: 'Option C',
              disabled: true
          },
          {
              key: 'D',
              text: 'Option D',
              disabled: true
          }
        ]}
        onChange={(event, option) => console.log(option)}
        label="Pick one"
        required={true}
    />
</div>
```