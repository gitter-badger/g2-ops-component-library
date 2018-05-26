import * as React from 'react'

import { FAQLink } from '../FAQLink';
import './FAQText.pcss'

type PropsT = {
	url: string
}

export const FAQText = props => {
  return (
    <div styleName="FAQText">
      <span styleName="text">
        Please see <FAQLink /> for frequently asked questions
      </span>
    </div>
  );
};
