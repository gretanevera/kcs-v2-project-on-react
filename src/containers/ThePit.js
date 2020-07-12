import React from 'react';
import Navigation from "../components/Navigation";
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';

export default function ThePit() {
  NoteManager();
         if (window.performance) {
            //console.info("window.performance works fine on this browser");
          }
            if (performance.navigation.type === 1) {
              GameOver(0, ' You turned around') //refreshed page
            } 

    console.log('you found a pit. its deep, you can almost hear something calling')
//change the background to not glitchy
    return(
//add some ominous sounds. the note is in the decision to reach out to the pit
<div>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, debitis inventore atque dolorum aliquam dolore!</p>

            <Navigation
        northEast=""                northEastEvents="none"
        northCenter="/eastforest"                   northCenterEvents="auto"
        northWest="/thickets"            northWestEvents="auto"
        centerEast=""                    centerEastEvents="none"
        centerWest=""          centerWestEvents="none"
        southEast=""                southEastEvents="none"
        southCenter=""              southCenterEvents="none"
        southWest=""               southWestEvents="none"

       
      />
      </div>


    );
}