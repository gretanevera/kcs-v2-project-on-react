import React from 'react';
import ModalNote from '../components/ModalNotes';
import ModalContent from '../components/ModalContent';
import note8 from '../media/img/note8.png';
import Navigation from "../components/Navigation";
import GameOver from '../components/GameOver';
import NoteManager from '../components/NoteManager';
import { useHistory } from 'react-router-dom';

export default function Thickets() {
 let history = useHistory();
  let gameStats = JSON.parse(sessionStorage.getItem('gameStats'))
  let foundNotes = JSON.parse(sessionStorage.getItem('foundNotes'));
 // const [state, setState] = useState('')

  if (performance.navigation.type === 1) {
    GameOver(gameStats.notesFound, ' You were walking in circles', history) //refreshed page
  }



   function handleClick() {
    ModalNote();
    NoteManager(history, "thicketsNote");
   // setState('new')
  }


  if (foundNotes.includes('thicketsNote')) {
    return(
      <div>
          <p className='mainBody'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, 
       debitis inventore atque dolorum aliquam dolore!</p>
      
      
                      <Navigation
              northEast=""                northEastEvents="none"
              northCenter=""                   northCenterEvents="none"
              northWest=""            northWestEvents="none"
              centerEast=""                    centerEastEvents="none"
              centerWest=""          centerWestEvents="none"
              southEast="/clearing"                southEastEvents="auto"
              southCenter="/westforest"              southCenterEvents="auto"
              southWest=""               southWestEvents="none"
      
             
            />
      
            <ModalContent image={note8}/>
      
      </div>
      
      
          );
  }else{
    return(
      <div className='mainBody'>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ab hic odit temporibus saepe nisi neque in impedit iusto a consequatur ipsa quod inventore ratione. Ipsam tenetur consequuntur unde odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet magnam, incidunt delectus totam hic placeat unde molestiae, accusamus ipsam quas fugit nam corrupti, <span className='glitch' data-text='amet' onClick={handleClick}> amet </span>
       debitis inventore atque dolorum aliquam dolore!</p>
      
      
                      <Navigation
              northEast=""                northEastEvents="none"
              northCenter=""                   northCenterEvents="none"
              northWest=""            northWestEvents="none"
              centerEast=""                    centerEastEvents="none"
              centerWest=""          centerWestEvents="none"
              southEast="/clearing"                southEastEvents="auto"
              southCenter="/westforest"              southCenterEvents="auto"
              southWest=""               southWestEvents="none"
      
             
            />
      
            <ModalContent image={note8}/>
      
      </div>
      
      
          );
  }


}