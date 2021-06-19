import React, { useState, useEffect } from 'react';

type BigPhotoProps = {
  url: string,
};

export const BigPhoto: React.FC<BigPhotoProps> = ({ url }) => {
  const [state, setState] = useState({ isLoading: false });
  useEffect(() => {
    if (url !== '') {
      setState({ isLoading: true });
    }
  }, [url]);
  const { isLoading } = state;

  return isLoading ? <p>Загружаю...</p> : <img src={url} alt="big vk" />;
};
