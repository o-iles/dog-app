import React, { Component } from 'react';
import './App.css';
import FilteredContent from './FilteredContent';
import AppHeader from './AppHeader';

import akita from './images/Akita.png'
import bulldog from './images/Bulldog.png'
import basset from './images/basset.png'
import bichon from './images/bichon.png'
import beagle from './images/beagle.png'
import chowchow from './images/chowchow.png'
import dachs from './images/dachs.png'
import golden from './images/golden.png'
import doodle from './images/doodle.png'
import greatdane from './images/greatdane.png'
import greyhound from './images/greyhound.png'
import komondor from './images/komondor.png'
import maltese from './images/maltese.png'
import pug from './images/pug.png'
import stbern from './images/stbern.png'
import yorkie from './images/yorkie.png'

export const dogs = [
  {name: "Akita", apt:0, barks:1, quiet:0, size: 100, drools: 1,
  kids: 0, nokids: 1,
  desc:"Large, powerful, noble! \n Originally used for guarding royalty in Japan.",
  pic: akita},
  {name: "Basset Hound", apt:1, barks:1, quiet:0, size: 55, drools: 1,
  kids: 1, nokids: 0,
  desc:"Laid-back family friend. \n Bred for hunting small game.",
  pic: basset},
  {name: "Bichon Frise", apt:1, barks:0, quiet:1, size: 9, drools: 0,
  kids: 1, nokids: 0,
  desc:"Cheerful, loves mischief, lots of love to give.",
  pic: bichon},
  {name: "Beagle", apt:1, barks:1, quiet:0, size: 24, drools: 0,
  kids: 1, nokids: 0,
  desc:"Merry and fun loving. Happiest when following an interesting scent.",
  pic: beagle},
  {name: "Bulldog", apt:1, barks:1, quiet:0, size: 45, drools: 1,
  kids: 1, nokids: 0,
  desc:"Gentle companions who love kids. Love a brief walk and a nap on the sofa.",
  pic: bulldog},
  {name: "Chow Chow", apt:0, barks:0, quiet:1, size: 55, drools: 0,
  kids: 0, nokids: 1,
  desc:"Proud, independent spirit. He can be aloof, some describe as catlike.",
  pic: chowchow},
  {name: "Dachshund", apt:1, barks:0, quiet:0, size: 24, drools: 0,
  kids: 1, nokids: 0,
  desc:"Versatile family companions, show dogs, and small-game hunters.",
  pic: dachs},
  {name: "Golden Retriever", apt:0, barks:0, quiet:0, size: 65, drools: 1,
  kids: 1, nokids: 0,
  desc:"Friendly, tolerant attitude, and highly intelligent!",
  pic: golden},
  {name: "Goldendoodle", apt:0, barks:0, quiet:0, size: 70, drools: 0,
  kids: 1, nokids: 0,
  desc:"Cross between a poodle and a lab. Intelligent, friendly, and hypoallergenic!",
  pic: doodle},
  {name: "Great Dane", apt:0, barks:1, quiet:0, size: 150, drools: 1,
  desc:"This gentle giant is a sweet, affectionate pet. Loves children!",
  kids: 1, nokids: 0,
  pic: greatdane},
  {name: "Greyhound", apt:1, barks:0, quiet:1, size: 68, drools: 1,
  kids: 1, nokids: 0,
  desc:"Can run as fast as 45 miles per hour! Sweet, obedient, and graceful.",
  pic: greyhound},
  {name: "Komondor", apt:0, barks:1, quiet:0, size: 90, drools: 0,
  kids: 0, nokids: 0,
  desc:"Not a mop, but a noble Hungarian dog! Strong, protective, and loyal.",
  pic: komondor},
  {name: "Maltese", apt:1, barks:0, quiet:1, size: 6, drools: 0,
  kids: 0, nokids: 0,
  desc:"Gentle, fearless, and makes friends with everyone. Great for therapy!",
  pic: maltese},
  {name: "Pug", apt:1, barks:0, quiet:1, size: 16, drools: 0,
  kids: 1, nokids: 0,
  desc:"Great sense of humor and love to show of. Thrive on human companionship!",
  pic: pug},
  {name: "Saint Bernard", apt:0, barks:0, quiet:1, size: 155, drools: 1,
  kids: 1, nokids: 0,
  desc:"Originally bred to find and save lost travelers. Versatile, excels in the show ring.",
  pic: stbern},
  {name: "Yorkshire Terrier", apt:1, barks:0, quiet:0, size: 5, drools: 0,
  kids: 0, nokids: 1,
  desc:"Fiesty but loving companion. The most popular toy dog breed in the U.S.",
  pic: yorkie},
];


class App extends Component {
  render() {
    return (
      <div className="App">

        <AppHeader />

        <FilteredContent items = {dogs} />

      </div>
    );
  }
}

export default App;
