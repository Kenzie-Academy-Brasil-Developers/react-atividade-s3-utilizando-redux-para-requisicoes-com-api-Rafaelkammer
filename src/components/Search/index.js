import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDigimonsThunk } from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input));
    setInput("");
  };

  return (
    <div>
      <h2>Procure seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          placeholder="Procure seu Digimon"
        ></input>
        <div>
          <button onClick={handleSearch}>Pesquisar</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
