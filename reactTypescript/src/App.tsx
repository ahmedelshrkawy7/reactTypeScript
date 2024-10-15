import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import LoggedIn from "./components/LoggedIn";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "bruce",
    last: "wayne",
  };
  const nameList = [
    {
      first: "bruce",
      last: "wayne",
    },
    {
      first: "ahmed",
      last: "wayne",
    },
    {
      first: "mohamed",
      last: "wayne",
    },
  ];

  return (
    <>
      <Greet name="hello" isLoggesIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading> place holder text </Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo dicaprio! </Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input
        handleChange={(e) => {
          console.log(e);
        }}
      />
      <Container styles={{ display: "red" }} />
      <LoggedIn />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </>
  );
}

export default App;
