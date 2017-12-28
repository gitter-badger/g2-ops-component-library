import React, { Component, isValidElement } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { isNil, identity } from './autoSelectUtils'
import Options from './AutoSelectOptions'
import { wrapMuiContext } from  '../../wrapMuiContext'

const KeyCode = {
  'enter': 13,
  'tab': 9,
  'esc': 27,
  'down': 40,
  'up': 38,
}
// TODO get rid of serializeOption prop, take options always as array of strings

const toStringValue = (value) => (value == null ? '' : String(value))

const getOptionTransforms = ({ displayOption, serializeOption }) => ({
  displayOption: displayOption || identity,
  serializeOption: serializeOption || identity,
})

const startsWithIgnoringCase = (val1, val2) =>
  String(val1)
    .toUpperCase()
    .startsWith(String(val2).toUpperCase())

const isNode = (val) => {
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
  } else if (!optionTransformsProvided && propVal.some((el) => !isNode(el))) {
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

const getDisplayValue = (props) => {
  const { value, options, serializeOption, displayOption, displaySelectedOption } = props
  const valueAmongOptions = options.find((o) => serializeOption(o) === value)

  const display = displaySelectedOption || displayOption

  return !isNil(valueAmongOptions) ? display(valueAmongOptions) : value
}

const firstMatchingOption = (props) => {
  const { options, displayOption, displaySelectedOption, value } = props
  return options.find(
    (o) =>
      String(value).trim() &&
      startsWithIgnoringCase(String((displaySelectedOption || displayOption)(o)), getDisplayValue(props)))
}

const UP = -1
const DOWN = 1

class AutoSelect extends Component {
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
      highlightedOption: null,
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
    let inputElem
    if (this.textField) {
      inputElem = this.textField.input
    }
    if (document.activeElement !== inputElem) {
      this.setState({ displayValue })
    }
  }

  selectedOption = () => this.state.highlightedOption || (this.props.searchThroughOptions && this.props.searchThroughOptions(this.props)) || firstMatchingOption(this.props)

  handleFocus = (e) => {
    this.props.onFocus(e)
    this.setState({ active: true })
  }

  handleBlur = () => {
    const { onBlur } = this.props
    this.setState({ active: false })
    onBlur && onBlur()
  }

  handleKeyDown = (e) => {
    const { serializeOption, value, options } = this.props
    const { active } = this.state

    switch (e.keyCode) {
      case KeyCode['enter']: {
        const selectedOption = this.selectedOption()
        if (active && selectedOption) {
          e.stopPropagation()
          e.preventDefault()
          this.handleClickOption(serializeOption(selectedOption))
          this.afterSelectOption()
          return
        }
        return
      }
      case KeyCode['tab']: {
        // eslint-disable-line no-fallthrough
        const selectedOption = this.selectedOption()
        if (!active || !selectedOption || serializeOption(selectedOption) === value) {
          return
        }
        e.stopPropagation()
        e.preventDefault()

        this.handleClickOption(serializeOption(selectedOption))
        this.afterSelectOption()
        return
      }
      case KeyCode['esc']: {
        this.setState({ active: false })
        return
      }
      case KeyCode['down']:
      case KeyCode['up']: {
        e.stopPropagation()
        e.preventDefault()

        const dir = e.keyCode === KeyCode['down'] ? DOWN : UP

        if (dir === DOWN && !active) {
          return this.setState({
            active: true,
            highlightedOption: options.find((o) => serializeOption(o) === this.props.value),
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

  handleMouseEnterOption = (option) => this.setState({ highlightedOption: option })

  handleClickOption = (serializedOption) => {
    const { onChange, displayOption, displaySelectedOption, options, serializeOption } = this.props
    onChange && onChange(null, serializedOption)
    const selectedOption = options.find((o) => serializeOption(o) === serializedOption)
    const displayValue = (displaySelectedOption || displayOption)(selectedOption)
    this.setState({ displayValue })
  }

  handleChange = (e) => {
    this.setState({ displayValue: e.target.value })
    const { onFocus, value, onChange, options, ...otherProps } = this.props // eslint-disable-line no-unused-vars
    const { displayOption, serializeOption } = getOptionTransforms(otherProps)

    const valueIndexAmongOptions = options.findIndex((o) => displayOption(o) === e.target.value)
    const valueAmongOptions = options[valueIndexAmongOptions]
    const newValue = valueAmongOptions ? serializeOption(valueAmongOptions) : e.target.value

    onChange && onChange(e, newValue)
  }

  afterSelectOption = () => {
    // this.textField.input.select()
    this.setState({ active: false })
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
      : options.findIndex((o) => startsWithIgnoringCase(String(display(o)), getDisplayValue(this.props)))
    const textFieldProps = {
      value: this.state.displayValue == null ? '' : this.state.displayValue,
      onChange: this.handleChange,
      onClick: this.handleFocus,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      autoComplete: 'off',
      errorText:  errorText,
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
      <div>
        <TextField
          name={`${name}-txtField`}
          {...textFieldProps}
          type="text"
          ref={(c) => { this.textField = c }}
          onKeyDown={this.handleKeyDown}
        />
        {active && (
          <div style={{ width: 400 }} onMouseDown={(e) => e.preventDefault()}>
            <OptionsComponent name={name} {...optionsProps} />
          </div>
        )}
        <input
          type="hidden"
          name={name}
          value={toStringValue(value)}
          data-uname={uName}
          ref={(elem) => {
            this.input = elem
          }}
        />
      </div>
    )
  }
}

AutoSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  errorText: PropTypes.string.isRequired,
  errorStyle: PropTypes.shape(),
  options: validateOptions,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isReadable: PropTypes.bool,
  displayOption: validateOptionTransforms,
  serializeOption: validateOptionTransforms,
  underlineFocusStyle: PropTypes.objectOf(PropTypes.any),
  floatingLabelStyle: PropTypes.objectOf(PropTypes.any),
  'data-uname': PropTypes.string,
  Options: PropTypes.func,
  displaySelectedOption: PropTypes.func,
  optionStyleProps: PropTypes.objectOf(PropTypes.any),
  selectTextField: PropTypes.func,
}

export default wrapMuiContext(AutoSelect)
