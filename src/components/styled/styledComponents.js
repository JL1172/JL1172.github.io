import styled, { keyframes, css } from "styled-components";

export const chevronRight = "https://cdn-icons-png.flaticon.com/512/120/120893.png";
export const chevronLeft = "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3271868/chevron-left-icon-md.png";

const kf = keyframes`
0% {
    transform : translateX(-1rem);

}
100% {
    width : 25rem;
}
`
const kf1 = keyframes`
0% {
    opacity : 0;
}

100% {

    opacity : 1;
    background-color: rgb(142, 159, 211);
}
`
const h4kf = keyframes`
0% {
    opacity : 0;
}
100% {
    opacity : 1;
}
`

const rotate = keyframes`
0% {
    left : 100%;
    opacity : .5;
}
100% {
    left : 0%;
    opacity : .5;
}
`

export const StyledDiv = styled.div`
display : flex;
height : 100vh;
.rotating {
    animation : ${rotate} 4s ease-in-out forwards;
    color : lightblue;
    top: 0;
    left: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    span {
        margin-right  : 3.5rem;
        margin-left : 1rem;
}
b {
    padding-left : 6px;
}
}

`

export const Saved = styled.div`
width : 2rem;
background-color: #16223a;
  border-right: 4px solid rgb(80, 94, 138);
  height : 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction : column;
  align-items: flex-start;

#quick {
    display: flex;
    opacity : 0;
  margin-top: 6rem;
  margin-left : 1rem;
  align-items: center;
  width : 12rem;
  justify-content: ${props => props.viewSaved ? "space-evenly" : "flex-end"};
  ${props =>
        props.viewSaved &&
        css`
    animation : ${kf1} .4s ease-in-out forwards;
    animation-delay : .5s;
    `
    }
  border-radius: 5px;
  h4 {
    opacity : 1;
  }
}
${props =>
        props.viewSaved &&
        css`
    animation : ${kf} .5s ease-in-out forwards;
    `
    }
.savedAllOfThese {
    margin-top : 1rem;
    margin-left : 1rem;
    display : flex;
    justify-content: space-between;
    color : white;
    opacity : ${props=> props.viewSaved ? ".5" : "0"};
    transition : 5s ease-in-out;
    width : 95%;
    border-bottom : 2px solid rgb(80, 94, 138);
}

`

export const StyledGraph = styled.div`
    width : 50rem;
    background-color : lightgray;
    height : 100vh;
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : center;
    #main {
        background-color : white;
        display : flex;
        flex-direction : column;
        width : 40rem;
        justify-content : center;
        align-items : center;
        padding : 3rem;
        border-radius : 15px;
        box-shadow : 0 0 2em white;
    }
    h3 {
        margin-bottom : 3rem;
    }
    #graphs {
        width : 35rem;
    }
    select {
        border : none;
        margin-bottom : 1rem;
        width : 35rem;
        height : 3rem;
        border-radius : 10rem;
        background-color : lightgray;
        &:focus {
            outline : none;
            box-shadow : 0 0 3em lightblue;
        }
        option {
            text-align : center;
        }
    }
`
