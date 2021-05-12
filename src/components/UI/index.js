import styled from 'styled-components';

export const AppContainer = styled.div`
 text-align: center;
`;

export const AppHeader = styled.header`
 background-color: #222;
 height: 150px;
 padding: 20px;
 color: white;
`;

export const AppTitle = styled.h1`
   font-size: 1.5em;
`;

export const AppLogo = styled.img`
 animation: App-logo-spin infinite 20s linear;
 height: 80px;
 @keyframes App-logo-spin {
   from { transform: rotate(0deg); }
   to { transform: rotate(360deg); }
 }
`;

export const AppIntro = styled.p`
 font-size: large;
`;