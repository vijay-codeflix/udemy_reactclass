/**
 * React css
 */

import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log("done");
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="title">Monster Page</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monstor"
          className="search"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
/**
 * search box compoennt
 */
// import CardList from "./components/card-list/card-list.component";
// import "./App.css";
// import SearchBox from "./components/search-box/search-box.component";
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log("done");
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monstor"
//           className="search"
//         />
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

/**
 * cvard-list components & props
 */
// import CardList from "./components/card-list/card-list.component";
// import "./App.css";
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log("done");
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <input
//           className="search"
//           type="search"
//           placeholder="Search Monster"
//           onChange={onSearchChange}
//         />
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

/**
 * search optimize
 */
// import logo from "./logo.svg";
// import "./App.css";
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   /** life cycle methdo */
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <input
//           className="search"
//           type="search"
//           placeholder="Search Monster"
//           onChange={onSearchChange}
//         />
//         {filterMonsters.map((monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>;
//           //
//         })}
//       </div>
//     );
//   }
// }

/**
 * search
 */
// import logo from "./logo.svg";
// import "./App.css";
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   /** life cycle methdo */
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   render() {
//     const filterMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField);
//     });
//     return (
//       <div className="App">
//         <input
//           className="search"
//           type="search"
//           placeholder="Search Monster"
//           onChange={(event) => {
//             const searchField = event.target.value.toLocaleLowerCase();
//             this.setState(() => {
//               return { searchField };
//             });
//           }}
//         />
//         {filterMonsters.map((monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>;
//           //
//         })}
//       </div>
//     );
//   }
// }

/**
 * searching old value remove mine solution
 */
// import logo from "./logo.svg";
// import "./App.css";
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//     };
//   }

//   /** life cycle methdo */
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users, monsters_backup: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//     // fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//     //   console.log(response)
//     // );
//   }
//   render() {
//     return (
//       <div className="App">
//         <input
//           className="search"
//           type="search"
//           placeholder="Search Monster"
//           onChange={(event) => {
//             const searchString = event.target.value.toLocaleLowerCase();
//             const filterMonsters = this.state.monsters_backup.filter(
//               (monster) => {
//                 return monster.name.toLocaleLowerCase().includes(searchString);
//               }
//             );
//             this.setState(() => {
//               return { monsters: filterMonsters };
//             });
//           }}
//         />
//         {this.state.monsters.map((monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>;
//           //
//         })}
//       </div>
//     );
//   }
// }
/**
 * dynamic data api call
 */

// import logo from "./logo.svg";
// import "./App.css";
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//     };
//   }

//   /** life cycle methdo */
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//     // fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//     //   console.log(response)
//     // );
//   }
//   render() {
//     return (
//       <div className="App">
//         {this.state.monsters.map((monster) => {
//           return <h1 key={monster .id}>{monster .name}</h1>;
//           //
//         })}
//       </div>
//     );
//   }
// }
/**
 * loop
 */

// import logo from "./logo.svg";
// import "./App.css";
// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monstarts: [
//         {
//           id: 1,
//           name: "linda",
//         },
//         {
//           id: 2,
//           name: "tinda",
//         },
//         {
//           id: 3,
//           name: "ginda",
//         },
//         {
//           id: 4,
//           name: "fours",
//         },
//       ],

//       monster1: {
//         name: "linda",
//       },
//       monster2: {
//         name: "tinda",
//       },
//       monster3: {
//         name: "ginda",
//       },
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.monstarts.map((monstart) => {
//           return <h1 key={monstart.id}>{monstart.name}</h1>;
//         })}
//         {/* <h1>{this.state.monster1.name}</h1>
//             <h1>{this.state.monster2.name}</h1>
//             <h1>{this.state.monster3.name}</h1> */}
//       </div>
//     );
//   }
// }

/**
 * simple class
 */
// class App extends Component{

//   constructor(){
//     super();

//      this.state={
//        name: {firstname:'vijay',lastname:"patel"},
//        company: 'IDK'
//      }
//   }
//   render(){
//     return (
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <p>
//                 <strong>My Name is <h2>{this.state.name.firstname} {this.state.name.lastname}</h2> </strong>
//                 <strong>I Work at <h2>{this.state.company}</h2> </strong>
//               </p>

//                 <button onClick={()=>{
//                   // this.setState({name: {firstname:'ajay',lastname:"darbar"}})
//                   this.setState((state,props)=>{return{
//                     name:{firstname:"ajay",lastname:"darbar"},
//                     company:"UNKNOWN"
//                   }},()=>{
//                     console.log(this.state) // CALL AFTER COMPLETEING
//                   })
//                   console.log(this.state)
//                 }}>Change Name </button>
//             </header>
//           </div>
//         );
//   }
// }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello Vijay
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
