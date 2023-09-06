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
export const StyledDiv = styled.div`
display : flex;
height : 100vh;
`

export const Saved = styled.div`
width : 2rem;
background-color: rgb(15, 31, 82);
  border-right: 4px solid rgb(142, 159, 211);
  height : 100%;
  display: flex;
  justify-content: center;
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

`
