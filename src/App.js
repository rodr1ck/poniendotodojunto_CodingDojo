import './App.css';
import PersonCard from './components/PersonCard';

const persons = [
  { firstName: "Jane", lastName: "Doe", age: 88, hairColor: "Black" },
  { firstName: "Smith", lastName: "John", age: 88, hairColor: "Brown" },
  { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
  { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" },
  { firstName: "Juan", lastName: "Collantes", age: 65, hairColor: "Red" },
];

function App() {
  return (
    <div>
      {persons.map((p, i) => (
        <PersonCard {...p} key={i} />
      ))}
    </div>
  );
}

export default App;