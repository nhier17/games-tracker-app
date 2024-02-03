import React,{useEffect} from "react";
import {useLocation} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { loadGames } from "../actions/gamesaction";
import Game from "../components/games";
import styled from "styled-components";
import { motion,AnimatePresence } from "framer-motion";
import GameDetail from "../components/gamedetail";
import { fadeIn } from "../animations";



const Home = () =>{
    const location = useLocation();
    const pathId = location.pathname.split("/")[2]
  
      const dispatch = useDispatch();
      useEffect(() => {
    dispatch(loadGames())
      },[dispatch]); 
  const {popular, newGames, upcoming,searched } = useSelector((state)=> state.games);
  
      return(
          <GameList variants={fadeIn} initial="hidden" animate="show">
            
              <AnimatePresence>
    {pathId && <GameDetail pathId={pathId}/>}
    </AnimatePresence>
    {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
            <h2>Upcoming Games</h2>
  <Games>
      {upcoming.map(game => (
          <Game name={game.name} released={game.released} id={game.id}
          image={game.background_image}
          key={game.id}
          />
      ))}
  </Games>
  <h2>Popular Games</h2>
  <Games>
      {popular.map(game => (
          <Game name={game.name} released={game.released} id={game.id}
          image={game.background_image}
          key={game.id}
          />
      ))}
  </Games>
  <h2>New Games</h2>
  <Games>
      {newGames.map(game => (
          <Game name={game.name} released={game.released} id={game.id}
          image={game.background_image}
          key={game.id}
          />
      ))}
  </Games>
            </GameList>
      )
  };
  const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
      padding: 5rem 0rem;
    }
  `;
  const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
  `
  
  export default Home