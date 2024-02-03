import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailaction";

import {Link} from "react-router-dom"
import { popup } from "../animations";


const Game = ({name, released,image,id}) => {
  const stringPathId = id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
      document.body.style.overflow = "hidden";
  dispatch(loadDetail(id))
    }
      return(
          <StyledGame 
          onClick={loadDetailHandler}
          variants={popup}
          initial="hidden"
          animate="show"
          layoutId={stringPathId}
          >
            <Link to={`/game/${id}`}>
  <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
  <p>{released}</p>
  <motion.img
   src={image} 
   alt="background"
   layoutId={`image ${stringPathId}`}
   />
  </Link>
          </StyledGame>
      )
  };
  const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100%;
      height: 40vh;
      object-fit: cover;
    }
  `;
  
  export default Game