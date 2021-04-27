import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { Container, ImageWrapper } from './styles';

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore('images');
  return (
    <Container>
      {docs &&
        docs.map((doc) => {
          return (
            <ImageWrapper key={doc.id} onClick={() => setSelectedImg(doc.url)}>
              <img src={doc.url} alt="pic" />
            </ImageWrapper>
          );
        })}
    </Container>
  );
}

export default ImageGrid;
