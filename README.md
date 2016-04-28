# react-radiobox
RadioBox component for ReactJS

This is simple React radio box component that can be used instead of manually creating HTML radio box form inputs. 

##Example:

```javascript
<RadioBox
    selected={'second'}
    class={'custom-class'}
    group={'ordinal-numbers'}
    onChange={this.onChangeHanlder}
    items={{
        1: 'First', 
        2: 'Second',
        3: 'Third'
    }}
/>
```

##HTML output:
```html
<table class="radiobox-group custom-class">
    <tbody>
        <tr>
            <td><input type="radio" id="ordinal-numbers_1" group="ordinal-numbers" name="ordinal-numbers" value="1" /></td>
            <td><label for="ordinal-numbers_1">First</label></td>
        </tr>
        <tr>
            <td><input type="radio" id="ordinal-numbers_2" group="ordinal-numbers" name="ordinal-numbers" value="2" checked /></td>
            <td><label for="ordinal-numbers_2">Second</label></td>
        </tr>
        <tr>
            <td><input type="radio" id="ordinal-numbers_3" group="ordinal-numbers" name="ordinal-numbers" value="3" /></td>
            <td><label for="ordinal-numbers_3">Third</label></td>
        </tr>
    </tbody>
</table>
```
