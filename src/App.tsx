import "./App.css";
import Header from "./components/Header/Header";
import BeTalentLogo from "./assets/BeTalent.svg";
import InputSearch from "./components/Input/InputSearch";
import DataTable from "./components/Table/DataTable";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="app-container">
      <Header logo={BeTalentLogo} altText="BeTalent Logo" />

      <section className="main-content">
        <h1 className="h1">Funcionários</h1>
        <div className="search">
          <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </section>
      <section className="employees-table">
        <DataTable searchTerm={searchTerm} />
      </section>
    </main>
  );
}

export default App;
