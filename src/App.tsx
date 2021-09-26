import React, { useState, useEffect } from 'react'
import appAction from '~/actions/appAction'

export interface AppConfig {
  ajax: object
}

interface Props {
  config: AppConfig
}

const App: React.FC<Props> = ({ config }) => {
  const [init, setInit] = useState(false)
  useEffect(() => {
    appAction.initApp(config)
    setInit(true)
  }, [])

  if (!init) {
    return <></>
  }

  return (
    <>
      hello world
    </>
  )
}

export default App
