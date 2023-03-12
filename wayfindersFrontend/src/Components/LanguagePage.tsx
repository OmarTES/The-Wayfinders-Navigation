import React from 'react'

type LanguagePageProps = {
    children: JSX.Element[] | JSX.Element;
}
const LanguagePage = (props: LanguagePageProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default LanguagePage