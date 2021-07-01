import React from 'react';
import { getPhotos } from '../../redux/actions/PageActions';
import { PhotoManager } from './PhotoManager';

export type PageProps = {
  year: number,
  photos: Array<any>,
  isFetching: Boolean,
  error: string,
  getPhotos: typeof getPhotos,
  years: Array<number>,
};

export const Page: React.FC<PageProps> = ({
  year,
  photos,
  isFetching,
  error,
  getPhotos,
  years,
}) => {
  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const year = +e.currentTarget.innerText;
    getPhotos(year);
  };

  const renderButtons = () => {
    return years.map(item => (
      <button key={item} className="btn" onClick={onBtnClick}>
        {item}
      </button>
    ));
  };

  const renderTemplate = () => {
    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>;
    }

    if (isFetching) {
      return <p>Загрузка...</p>;
    } else {
      return <PhotoManager photos={photos} />;
    }
  };

  return (
    <div className="ib page">
      <p>{renderButtons()}</p>
      <h3>
        {year === 0 ? '' : String(year)} год [{photos.length}]
      </h3>
      {renderTemplate()}
    </div>
  );
};
