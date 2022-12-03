import {createGlobalStyle } from 'styled-components';

const variables = {
    BASE_COLOR:"rgb(90, 90, 90)",
    SECONDARY_COLOR:"rgba(126, 126, 126, 0.9)",
    TERTIARY_COLOR: "rgba(248, 248, 248, 0.9)",
    QUATERNARY_COLOR: "rgb(240, 240, 240)",
    // $gradient: linear-gradient(130deg, rgba(255, 255, 255, 0.034) 50%, rgba(255, 255, 255, 0) 30%, rgba(251, 251, 251, 0.103) 20%);
    
}



export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;700&family=Playfair+Display&display=swap');
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    body {
        font-family: 'Open Sans', serif;
        margin:0;
        color:${variables.BASE_COLOR}; 
    }
    a{
        text-decoration: none;
        text-transform: uppercase;
        ${'' /* color:${variables.BASE_COLOR};  */}
        //TODO:varable color
        cursor:default;
        color:inherit

    }

    ${'' /* a:hover {

    } */}

    a:active, a:visited {
        color:inherit
    }

    h1 {
        font-size: 52px;
        margin-bottom:20px;
    }
    h2 {
        font-size: 32px;
        font-weight: 500;
        margin:15px 0;
    }

    h3 {
        font-size: 26px;
         font-weight: 700;

    }
    .wrapper {
        flex-grow:1;

        display: flex;
         flex-direction: column;
         ${'' /* height:75vh; */}
         ${'' /* min-height:calc(100vh-150px-100px); */}
         ${'' /* min-height:80vh; */}
         background-color:${variables.QUATERNARY_COLOR};
        ${'' /* padding:150px 0 100px; */}
    }


    ${'' /* img {
        height:100$;
        width:100%;
        object-fit: cover;
        object-position: 50% 100%;
    } */}
    
`