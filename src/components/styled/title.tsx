import styled from "styled-components";

 interface Props {
  children: React.ReactNode;
}


const STitle = styled.p`
  padding: 15px 0;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  color: hsla(0, 0%, 6%, 1);

  &:hover {
    color: hsla(37, 100%, 75%, 1);
  }

  &:active {
    color: hsla(240, 16%, 13%, 1);
  }

  &:focus {
    outline-color: rgba(218, 136, 3, 0.856);
    color: hsla(240, 16%, 13%, 0.5);
  }
`;


const Title = ({children}: Props) => {
    return ( 
        <STitle>
          {children}
        </STitle>
     );
}
 
export default Title;