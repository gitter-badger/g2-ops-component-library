import React, { PureComponent, isValidElement } from 'react'
import { TextField } from 'components/TextField'
import { isNil, identity } from './autoSelectUtils'
import Options from './AutoSelectOptions'

const KeyCode = {
  enter: 13,
  tab: 9,
  esc: 27,
  down: 40,
  up: 38,
}
// TODO get rid of serializeOption prop, take options always as array of strings

const toStringValue = value => (value == null ? '' : String(value))

const getOptionTransforms = ({ displayOption, serializeOption }) => ({
  displayOption: displayOption || identity,
  serializeOption: serializeOption || identity,
})

const startsWithIgnoringCase = (val1, val2) =>
  String(val1)
    .toUpperCase()
    .startsWith(String(val2).toUpperCase())

const isNode = val => {
  const valType = typeof val
  return (
    valType === 'string' || valType === 'number' || isValidElement(val) || (Array.isArray(val) && val.every(isNode))
  )
}

const validateOptions = (props, propName, componentName) => {
  const optionTransformsProvided = props.displayOption !== identity && props.serializeOption !== identity
  const propVal = props[propName]

  if (!Array.isArray(propVal)) {
    return new Error(`Required prop '${propName}' in ${componentName} must be an array`)
  } else if (!optionTransformsProvided && propVal.some(el => !isNode(el))) {
    return new Error(`Required prop '${propName}' in ${componentName} must be an array of nodes`)
  }
}
const validateOptionTransforms = (props, propName, componentName) => {
  const counterpartName = { displayOption: 'serializeOption', serializeOption: 'displayOption' }[propName]

  const neitherProvided = !props[propName] && !props[counterpartName]
  const bothProvided = props[propName] && props[counterpartName]
  if (neitherProvided || bothProvided) {
    if (bothProvided && typeof props[propName] !== 'function') {
      return new Error(`Optional prop '${propName}' in ${componentName} must be a function.`)
    }
    return
  }

  return new Error(`Optional prop '${propName}' in ${componentName} requires an accompanying '${counterpartName}'`)
}

const getDisplayValue = props => {
  const { value, options, serializeOption, displayOption, displaySelectedOption } = props
  const valueAmongOptions = options.find(o => serializeOption(o) === value)

  const display = displaySelectedOption || displayOption

  return !isNil(valueAmongOptions) ? display(valueAmongOptions) : value
}

const firstMatchingOption = props => {
  const { options, displayOption, displaySelectedOption, value } = props
  return options.find(
    o =>
      String(value).trim() &&
      startsWithIgnoringCase(String((displaySelectedOption || displayOption)(o)), getDisplayValue(props)),
  )
}

const UP = -1
const DOWN = 1

type PropsT = {
  name: string,
  value: string | number,
  disabled: boolean,
  required: boolean,
  errorText: string,
  errorStyle: {}, // TODO
  options: validateOptions,
  onFocus(): any,
  onChange(): any,
  onBlur(): any,
  isReadable: boolean,
  displayOption: validateOptionTransforms,
  serializeOption: validateOptionTransforms,
  underlineFocusStyle: {}, // TODO
  floatingLabelStyle: {}, // TODO
  'data-uname': string,
  Options(): any, // TODO
  displaySelectedOption(): any, // TODO
  optionStyleProps: {}, // TODO
  selectTextField(): any, // TODO
}

export class AutoSelect extends PureComponent<PropsT> {
  static defaultProps = {
    value: '',
    errorText: '',
    displayOption: identity,
    displaySelectedOption: null,
    serializeOption: identity,
    onFocus: () => null,
    options: [],
    Options,
  }

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      highlightedOption: firstMatchingOption(props),
      scrollToIndex: null,
      displayValue: getDisplayValue(props),
    }
  }

  componentWillReceiveProps(nextProps) {
    const displayValue = getDisplayValue(nextProps)
    const nextDisplayValue = getDisplayValue(this.props)
    const { searchThroughOptions = firstMatchingOption } = nextProps
    if (displayValue > nextDisplayValue) {
      this.setState({
        highlightedOption: searchThroughOptions(nextProps),
        ...(!this.props.disabled && displayValue === '' && nextDisplayValue.length > 0 ? { active: true } : {}),
      })
    }
    if (nextProps.options !== this.props.options) {
      this.setState({
        highlightedOption: null,
      })
    }
    let inputElem
    if (this.textField) {
      inputElem = this.textField._textElement
    }
    if (document.activeElement !== inputElem) {
      this.setState({ displayValue: displayValue }) // shorthand causes warnings when displayValue is undefined
    }
  }

  selectedOption = () =>
    this.state.highlightedOption ||
    (this.props.searchThroughOptions && this.props.searchThroughOptions(this.props)) ||
    firstMatchingOption(this.props)

  handleFocus = e => {
    this.props.onFocus(e)
    this.setState({ active: true })
  }

  handleBlur = () => {
    const { onBlur } = this.props
    this.setState({ active: false })
    onBlur && onBlur()
  }

  handleKeyDown = e => {
    const { serializeOption, value, options } = this.props
    const { active } = this.state

    switch (e.keyCode) {
      case KeyCode.enter: {
        let selectedOption = this.selectedOption()
        if (options && options.length === 1) {
          selectedOption = options[0]
        }
        const isOptionSelectable = (selectedOption && selectedOption.hasOwnProperty('isSelectable')) ? selectedOption.isSelectable : true
        if (active && selectedOption && isOptionSelectable) {
          e.stopPropagation()
          e.preventDefault()
          this.handleClickOption(serializeOption(selectedOption))
          this.afterSelectOption()
          return
        }
        return
      }
      case KeyCode.tab: {
        // eslint-disable-line no-fallthrough
        let selectedOption = this.selectedOption()
        if (options && options.length === 1) {
          selectedOption = options[0]
        }
        const isOptionSelectable = selectedOption.hasOwnProperty('isSelectable') ? selectedOption.isSelectable : true
        if (!active || !selectedOption || serializeOption(selectedOption) === value || !isOptionSelectable) {
          return
        }
        e.stopPropagation()
        e.preventDefault()

        this.handleClickOption(serializeOption(selectedOption))
        this.afterSelectOption()
        return
      }
      case KeyCode.esc: {
        this.setState({ active: false })
        return
      }
      case KeyCode.down:
      case KeyCode.up: {
        e.stopPropagation()
        e.preventDefault()

        const dir = e.keyCode === KeyCode.down ? DOWN : UP

        if (dir === DOWN && !active) {
          return this.setState({
            active: true,
            highlightedOption: options.find(o => serializeOption(o) === this.props.value),
          })
        }

        const selectedOption = this.selectedOption()
        const index =
          dir === DOWN
            ? Math.min(options.indexOf(selectedOption) + 1, options.length - 1)
            : Math.max(0, options.indexOf(selectedOption) - 1)

        return this.setState({ highlightedOption: selectedOption ? options[index] : options[0] })
      }
      default:
        !active && this.setState({ active: true })
        break
    }
  }

  handleMouseEnterOption = option => this.setState({ highlightedOption: option })

  handleClickOption = serializedOption => {
    const { onChange, displayOption, displaySelectedOption, options, serializeOption } = this.props

    const selectedOption = options.find(o => serializeOption(o) === serializedOption)
    onChange && onChange(selectedOption)
    const displayValue = (displaySelectedOption || displayOption)(selectedOption)
    this.setState({ displayValue })
  }

  handleChange = changedValue => {
    this.setState({ displayValue: changedValue })
    const { onFocus, value, onChange, options, ...otherProps } = this.props // eslint-disable-line no-unused-vars
    const { displayOption, serializeOption } = getOptionTransforms(otherProps)

    const valueIndexAmongOptions = options.findIndex(o => displayOption(o) === changedValue)
    const valueAmongOptions = options[valueIndexAmongOptions]
    const newValue = valueAmongOptions ? serializeOption(valueAmongOptions) : changedValue
    onChange && onChange(newValue)
  }

  afterSelectOption = () => {
    // this.textField.input.select()
    this.setState({ active: false })
  }

  select = () => {
    this.textField.select()
  }

  render() {
    const {
      value,
      options,
      displayOption,
      serializeOption,
      displaySelectedOption,
      Options: OptionsComponent,
      'data-uname': uName,
      name,
      errorText,
      errorStyle,
      onFocus,
      onBlur,
      onChange,
      isReadable,
      optionStyleProps,
      searchThroughOptions,
      ...otherProps // eslint-disable-line no-unused-vars
    } = this.props
    const { active } = this.state
    const display = displaySelectedOption || displayOption
    const scrollToIndex = this.state.highlightedOption
      ? options.indexOf(this.state.highlightedOption)
      : options.findIndex(o => startsWithIgnoringCase(String(display(o)), getDisplayValue(this.props)))
    const textFieldProps = {
      value: this.state.displayValue == null ? '' : this.state.displayValue,
      onChanged: this.handleChange,
      onClick: this.handleFocus,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      autoComplete: 'off',
      errorMessage: errorText,
      errorStyle,
      hintStyle: { overflow: 'hidden', whiteSpace: 'nowrap' },
      ...otherProps,
      title: this.state.displayValue == null ? value : this.state.displayValue,
    }
    const optionsProps = {
      options,
      displayOption,
      serializeOption,
      onMouseEnterOption: this.handleMouseEnterOption,
      onMouseLeaveOption: this.handleMouseLeaveOption,
      onClickOption: this.handleClickOption,
      selectedOption: this.selectedOption(),
      afterClickOption: this.afterSelectOption,
      scrollToIndex,
      optionStyleProps,
    }

    return (
      <div className={this.props.className}>
        <TextField
          name={`${name}-txtField`}
          {...textFieldProps}
          type="text"
          componentRef={c => {
            this.textField = c
					}}
          onKeyDown={this.handleKeyDown}
        />
        {active && (
          <div style={{ width: 'auto' }} onMouseDown={e => e.preventDefault()}>
            <OptionsComponent name={name} {...optionsProps} />
          </div>
        )}
        <input
          type="hidden"
          name={name}
          value={toStringValue(value)}
          data-uname={uName}
          ref={elem => {
            this.input = elem
          }}
        />
      </div>
    )
  }
}
