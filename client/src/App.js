import './App.css';
// import BookingsForm from './components/BookingsForm';
import BookingsContainer from './containers/BookingsContainer';

function App() {
  return (
    <div className="App">
      <h1>The Grand Edinburgh Hotel</h1>
      {/* <BookingsForm/> */}
      <BookingsContainer/>
    </div>
  );
}

export default App;
