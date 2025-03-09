import './styles/App.css'
import Loading from './components/Loading';
import Header from './components/header/Header';
import Table from './components/table/Table';

function App() {
  return (
    <>
      <Loading />
      <Header></Header>
      <Table></Table>
    </>
  )
}

export default App