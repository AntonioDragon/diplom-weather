import {Route, Routes} from 'react-router-dom'
import Main from '../pages/Main'

const RoutePages: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  )
}

export default RoutePages
