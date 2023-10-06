/**
 * move card container to its component
 */

import { Component } from "react";

import "./card-list.styles.css";

import Card from "../card/card.component";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;

/**
 * card list & compnent
 */

// import {Component} from 'react';

// import './card-list.styles.css';
// import './card/card.styles.css';
// class CardList extends Component{
//     render()    {
//           const {monsters}=this.props
//         return (
//             <div className='card-list'>

//             {monsters.map((monster) => {
//                 const {id,name,email}=monster;
//             return ( <div className='card-container' key={id}>
//                     <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`}/>
//                     <h2 key={id}>{name}</h2>
//                     <p>{email}</p>
//                 </div>)

//               })}
//               </div>
//         )
//     }
// }

// export default CardList;
