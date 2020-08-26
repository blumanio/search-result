import React from 'react'
import { Input } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'
import { defineMessages, useIntl } from 'react-intl'
import classNames from 'classnames'

const CSS_HANDLES = ['searchFilterBar']

const messages = defineMessages({
  placeholder: {
    id: 'store/search.filter.placeholder',
    defaultMessage: '',
  },
})

export const SearchFilterBar = ({ name, handleChange }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const intl = useIntl()

  return (
    <div className={classNames('mb3', handles.searchFilterBar)}>
      <Input
        onChange={e => handleChange(e.target.value)}
        placeholder={intl.formatMessage(messages.placeholder, {
          filterName: name,
        })}
      />
    </div>
  )
}