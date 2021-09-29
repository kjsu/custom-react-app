import React, { useEffect } from 'react'
import sampleService from '~/services/sampleService' /* recoil sample용 임시 코드, 실제 구현은 action 사용 */

const Home: React.FC = () => {
  useEffect(() => {
    sampleService.sampleRecoilService()
    // sampleService.sampleGetRecoilService()
  }, [])

  return (
    <>home</>
  )
}

export default Home
