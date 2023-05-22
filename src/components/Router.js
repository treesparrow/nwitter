import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Auth />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

/* Switch -> Routes로변경, exact 사용 안함
// v5 버전
<Switch>
 <Route exact path="/" component={Home} />
 <Route path="/report" component={Report} />
 <Route path="/passenger" component={Passenger} />
</Switch>

// v6 버전
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/report" element={<Report />} />
    <Route path="/passenger" element={<Passenger />} />
  </Routes>
</BrowserRouter>
*/
export default AppRouter;