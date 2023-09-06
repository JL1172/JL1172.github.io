import styled, { keyframes, css } from "styled-components";

export const chevronRight = "https://cdn-icons-png.flaticon.com/512/120/120893.png";
export const chevronLeft = "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3271868/chevron-left-icon-md.png";

const kf = keyframes`
0% {
    transform : translateX(-1rem);

}
100% {
    width : 18rem;
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
    transform : translateX(0rem);
    opacity : 1;
}
100% {
    transform : translateX(50rem);
}
`

export const StyledDiv = styled.div`
display : flex;
height : 100vh;
#rotating {
    animation : ${rotate} 30s ease-in-out infinite;
    color : lightblue;
    position : absolute;
    top : 0;
    left : -50rem;
    div {
        margin-right : .5rem;
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
  align-items: center;
  width : 95%;
  justify-content: ${props => props.viewSaved ? "space-evenly" : "flex-end"};
  ${props =>
        props.viewSaved &&
        css`
    animation : ${kf1} .5s ease-in-out forwards;
    animation-delay : 1s;
    `
    }
  border-radius: 5px;
  h4 {
    opacity : 0;
    ${props =>
        props.viewSaved &&
        css`
    animation : ${h4kf} .5s ease-in-out forwards;
    animation-delay : 1s;
    `
    }
  }
}
${props =>
        props.viewSaved &&
        css`
    animation : ${kf} 1s ease-in-out forwards;
    `
    }
.savedAllOfThese {
    margin-top : 1rem;
    display : flex;
    justify-content: space-between;
    opacity : 0;
    color : white;
    ${props =>
        props.viewSaved &&
        css`
    animation : ${h4kf} .5s ease-in-out forwards;
    animation-delay : 1.2s;
    `
    }
    width : 95%;
    border-bottom : 2px solid rgb(80, 94, 138);
}

`

export const StyledGraph = styled.div`
    width : 100%;
    background-color : lightgray;
    height : 100vh;
    display : flex;
    flex-direction : column;
    align-items : center;
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
