import { ApolloProvider } from '@apollo/client';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import About from './pages/About';
import Dblog from './pages/Dblog';
import Post from './pages/Post';
import Search from './pages/Search';
import { client } from './Utils/Client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dblog" />} />
          <Route path="/dblog" element={<Dblog />} />
          <Route path="/about" element={<About />} />
          <Route path="/dblog/:title" element={<Post />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </ApolloProvider>
  );
}

export default App;
