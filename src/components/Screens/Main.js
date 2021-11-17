import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GoogleSearchAPI from "../GetAPI/GoogleSearchAPI";
import CompilerAPI from "../GetAPI/CompilerAPI";

const MainStyle = styled.div`
  .search_main {
    display: flex;
    margin: 1vh 0;
    justify-content: center;
  }
  .search_main > *{
    padding: 5px;
  }
  .search_main > button{
    cursor: pointer;
    border: 2px solid black;
    height: 5vh;
    border-left: none;
    border-radius: 0 10px 10px 0;
    background-color: gray;
  }
  .search_main > button:active{
    background-color: #eee;
  }
  .search_main > button > img{
    height: 3vh;
    user-select: none;
  }
  .search_main > input[type=text]{
    color: white;
    border: 2px solid black;
    width: 40vw;
    height: 5vh;
    border-right: none;
    border-radius: 10px 0 0 10px;
    background-color: gray;
  }
  input::placeholder {
    color: white;
  }
`

function Main() {
  const [searchInput, setSearchInput] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const Click_Search_Button = () => {
    if(document.getElementById("data").value === ""){
      return
    }
    setSearchInput(document.getElementById("data").value);
    setIsSearch(true);
  }

  useEffect(() => {
    const input = document.getElementById("data");
    input.focus();
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("inputbtn").click();
    }
    });
  })

  return (
    <div className="Main">
      <MainStyle>
        <div className="search_main">
          <input id="data" placeholder="type in the search word" type="text"/>
          <button id="inputbtn" onClick={Click_Search_Button}><img src="img/search_btn.png" alt="검색" /></button>
        </div>  
        {isSearch === true ? <GoogleSearchAPI getSearchInput={searchInput} /> : ''}
        </MainStyle>
    </div>
  );
}

export default Main;