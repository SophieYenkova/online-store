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
`;


const Title = ({children}: Props) => {
    return ( 
        <STitle>
          {children}
        </STitle>
     );
}
 
export default Title;