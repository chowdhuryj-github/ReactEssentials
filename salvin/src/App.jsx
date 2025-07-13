
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import './App.css';

// two types on components - function based, class based

// rfc or rafc or rcc


// export const App = () => {
//   return React.createElement("h1", {className: "active"}, "Salvin");
// }

export default function App() {

  const username = "Salvin";

  return (
    <>
      <Header />
      <div>
          <h1> Salvin </h1>
      </div>
      <Footer />
    </>
  )

}