import Button from "./components/Button";
import "./index.css";
import { GoBell, GoAlert, GoDatabase, GoGear } from "react-icons/go";

function App() {
  const handleClickSuccess = () => {
    console.log("click");
  };
  return (
    <>
      <Button primary rounded>
        <GoBell />
        primary
      </Button>
      <Button secondary outline>
        <GoAlert />
        secondary
      </Button>
      <Button warning>
        <GoDatabase />
        warning
      </Button>
      <Button danger>
        <GoGear />
        danger
      </Button>
      <Button success onClick={handleClickSuccess}>
        success
      </Button>
    </>
  );
}

export default App;
