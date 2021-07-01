import React from 'react';

type ListPhotoProps = {
  photos: Array<any>,
  openModal: (url: string) => void,
};

export const ListPhoto: React.FC<ListPhotoProps> = ({ photos, openModal }) => {
  return (
    <div>
      {photos.map(
        (photo: {
          id: React.Key | null | undefined,
          sizes: { url: string }[],
          likes: {
            count:
              | string
              | number
              | boolean
              | {}
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>,
                >
              | React.ReactNodeArray
              | React.ReactPortal
              | null
              | undefined,
          },
        }) => (
          <div key={photo.id} className="photo">
            <p>
              <img
                src={photo.sizes[0].url}
                alt="thumbnail vk"
                onClick={() => openModal(photo.sizes[4].url)}
              />
            </p>
            <p>{photo.likes.count} ❤</p>
          </div>
        ),
      )}
    </div>
  );
};
