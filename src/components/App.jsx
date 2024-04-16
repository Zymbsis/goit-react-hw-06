import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="main-title">
        Phone<span>book</span>
      </h1>
      <div className="phonebook-wrapper">
        <div className="form-and-filter-wrapper">
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
