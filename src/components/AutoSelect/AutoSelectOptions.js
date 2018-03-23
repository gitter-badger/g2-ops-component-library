import React from 'react'
import PropTypes from 'prop-types'
import { AutoSizer, List } from 'react-virtualized'
import cn from 'classnames'
import mdlComponent from './autoselectMdlComponent'
import { identity } from './autoSelectUtils'

import './AutoSelect.scss'

const OPTIONS_ROW_HEIGHT = 50

let AutoSelectOption = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
  displayOption,
  serializeOption,
  afterClickOption,
  selected,
  style,
  option,
  name,
}) => (
  <div
    name={`${name}-input`}
    onMouseEnter={() => onMouseEnter(option)}
    onMouseLeave={onMouseLeave}
    onClick={() => {
      if (option && !option.isDisabled && !option.isExpired) {
        onClick(serializeOption(option))
        setTimeout(afterClickOption, 60)
      }
    }} // allow animation to finish
    className={cn(
      { selectedOption: option === selected },
      'option',
      'mdl-button',
      'mdl-js-button',
      'mdl-js-ripple-effect',
    )}
    style={{ ...style }}
  >
    {displayOption(option)}
  </div>
)
AutoSelectOption = mdlComponent(AutoSelectOption)

export const AutoSelectOptions = ({
  name,
  options,
  onMouseEnterOption,
  onMouseLeaveOption,
  onClickOption,
  afterClickOption,
  displayOption,
  serializeOption,
  selectedOption,
  scrollToIndex,
  optionStyleProps,
  width,
}) => (
  <List
    name={name}
    scrollToIndex={scrollToIndex}
    width={Math.max(optionStyleProps.width || width, 190)}
    height={Math.min(options.length * optionStyleProps.rowHeight, optionStyleProps.optionsMinHeight)}
    rowCount={options.length}
    rowHeight={optionStyleProps.rowHeight || OPTIONS_ROW_HEIGHT}
    className="options"
    tabIndex={-1}
    rowRenderer={({ index: i, key, style }) => (
      <AutoSelectOption
        name={name}
        key={key}
        onMouseEnter={onMouseEnterOption}
        onMouseLeave={onMouseLeaveOption}
        onClick={onClickOption}
        afterClickOption={afterClickOption}
        selected={selectedOption}
        option={options[i]}
        {...{ style, displayOption, serializeOption }}
      />
    )}
  />
)

AutoSelectOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  displayOption: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onMouseEnterOption: PropTypes.func,
  onMouseLeaveOption: PropTypes.func,
  onClickOption: PropTypes.func,
  afterClickOption: PropTypes.func,
  serializeOption: PropTypes.func,
  selectedOption: PropTypes.any,
  scrollToIndex: PropTypes.number,
  width: PropTypes.number, // DEFAULT WIDTH FOR TESTING
  optionStyleProps: PropTypes.shape({
    rowHeight: PropTypes.number,
    optionsMinHeight: PropTypes.number,
  }),
}

AutoSelectOptions.defaultProps = {
  onMouseEnterOption: () => null,
  onMouseLeaveOption: () => null,
  onClickOption: () => null,
  afterClickOption: () => null,
  displayOption: identity,
  serializeOption: identity,
  optionStyleProps: {
    rowHeight: OPTIONS_ROW_HEIGHT,
    optionsMinHeight: 200,
  },
  width: 200,
}

const AutoSizedAutoSelectOptions = (props) => (
  <AutoSizer>{({ width }) => <AutoSelectOptions {...props} width={width} />}</AutoSizer>
)

export default AutoSizedAutoSelectOptions
