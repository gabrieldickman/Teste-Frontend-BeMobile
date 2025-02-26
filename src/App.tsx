import "./App.css";
import Header from "./components/Header/Header";
import BeTalentLogo from "./assets/BeTalent.svg";
import InputSearch from "./components/Input/InputSearch";
import DataTable from "./components/Table/DataTable";

function App() {
  return (
    <main className="app-container">
      <Header logo={BeTalentLogo} altText="BeTalent Logo" />

      <section className="main-content">
        <h1 className="h1">Funcionários</h1>
        <div className="search">
          <InputSearch />
        </div>
      </section>

      <section className="employees-table">
        <DataTable />
      </section>
    </main>
  );
}

export default App;
