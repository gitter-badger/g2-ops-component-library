import React from 'react'
import renderer from 'react-test-renderer'

import Button from 'components/Button'

import DialogBox from '../DialogBox'

// TODO: We don't need to test anything here!
describe('<DialogBox />', () => {
  test('should render properly', () => {
    const tree = renderer.create(
      <DialogBox
        title={'Dialog with Content'}
        hideDialog={false}
        dialogType="normal"
        onDismiss={() => {}}
        footerRenderer={() => (
          <div style={{ display: 'flex', float: 'right' }}>
            <Button type={'primary'} onClick={() => {}} label={'Save'} />
            <span style={{ width: '10px' }}>{}</span>
            <Button type={'secondary'} onClick={() => {}} label={'Discard'} />
          </div>
        )}
      >
        <div>Main Dialog Content to be added here</div>
      </DialogBox>,
    )
    expect(tree).toMatchSnapshot()
  })
})
