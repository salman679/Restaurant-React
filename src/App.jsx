import "./style/style.scss";
import Header from "./sections/header/Header";
import Banner from "./sections/banner/Banner";
import MainCart from "./sections/Main/MainCart";
import CardProviders from "./data/CardProviders";

function App() {
  return (
    <>
      <CardProviders>
        <Header />
        <Banner />
        <MainCart />
      </CardProviders>
    </>
  )
}

export default App;

