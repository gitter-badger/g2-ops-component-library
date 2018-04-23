import React from 'react'
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
      const isOptionSelectable = option.hasOwnProperty('isSelectable') ? option.isSelectable : true
      if (option && isOptionSelectable) {
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

type PropsT = {
  options: [], // TODO
  displayOption(): any, // TODO
  name(): any,
  onMouseEnterOption(): any,
  onMouseLeaveOption(): any,
  onClickOption(): any,
  afterClickOption(): any,
  serializeOption(): any,
  selectedOption: any, // TODO
  scrollToIndex: number,
  width: number, // DEFAULT WIDTH FOR TESTING
  optionStyleProps: {
    rowHeight: number,
    optionsMinHeight: number,
  },
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

const AutoSizedAutoSelectOptions = (props: PropsT) => (
  <AutoSizer>{({ width }) => <AutoSelectOptions {...props} width={width} />}</AutoSizer>
)

export default AutoSizedAutoSelectOptions
