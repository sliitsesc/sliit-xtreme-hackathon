import './App.css';
import { scores } from './data/scores';

function App() {

  let data = scores.sort((a, b) => {
    return b.score - a.score
  })


  return (
    <div className="App">
      <header className="App-header">
        <div className="Heading-container">
          <div className={"animate__animated animate__pulse animate__infinite"}><h1 className={"Heading"}>LEADERBOARD</h1></div>
          <div className="Table-container">
          <table className="table table-striped table-condensed table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Team Name</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
    {
      data ? (
        data.map((e, key) => (
          <tr key={key}>
            <th scope="row">{key + 1}</th>
            <td>{e.teamName}</td>
            <td>{e.score}</td>
          </tr>
        ))
      ) : (<tr>Waiting for the results</tr>)
    }
  </tbody>
</table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
