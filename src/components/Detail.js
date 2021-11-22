import styled from 'styled-components';

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img 
                    src=''
                    alt=''
                />
            </Background>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(500vh - 250px);
    overflow: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

export default Detail;