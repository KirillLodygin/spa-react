export const actions = {
  getPhotosRequest: (year: number) => (
    {
      type: 'GET_PHOTOS_REQUEST',
      payload: year
    } as const
  ),

  getPhotosSuccess: (photos: Array<string>) => (
    {
      type: 'GET_PHOTOS_SUCCESS',
      payload: photos
    } as const
  ),

  getPhotosFail: (e: string) => (
    {
      type: 'GET_PHOTOS_FAIL',
      error: true,
      payload: new Error(e)
    } as const
  )
};

let photosArr: Array<any> = [];
let cached: Boolean = false;

const makeYearPhotos = (
  photos: Array<any>,
  selectedYear: number,
): Array<any> => {
  let createdYear,
    // eslint-disable-next-line prefer-const
    yearPhotos: any[] = [];

  photos.forEach(item => {
    createdYear = new Date(item.date * 1000).getFullYear();
    if (createdYear === selectedYear) {
      yearPhotos.push(item);
    }
  });

  yearPhotos.sort((a, b) => b.likes.count - a.likes.count);

  return yearPhotos;
};

const getMorePhotos = (
  offset: number,
  count: number,
  year: number,
  dispatch: any,
) => {
  //eslint-disable-next-line no-undef
  // @ts-ignore
  VK.Api.call(
    'photos.getAll',
    { extended: 1, count: count, offset: offset, v: '5.80' },
    (r: { response: { items: any, count: number } }) => {
      try {
        // @ts-ignore
        photosArr = photosArr.concat(r.response.items);
        if (offset <= r.response.count) {
          // @ts-ignore
          offset += 200; // максимальное количество фото которое можно получить за 1 запрос
          getMorePhotos(offset, count, year, dispatch);
        } else {
          const photos = makeYearPhotos(photosArr, year);
          cached = true;
          dispatch({
            type: 'GET_PHOTOS_SUCCESS',
            payload: photos,
          });
        }
      } catch (e) {
        dispatch({
          type: 'GET_PHOTOS_FAIL',
          error: true,
          payload: new Error(e),
        });
      }
    },
  );
};

export const getPhotos = (year: number): (dispatch: any) => void => {
  return dispatch => {
    dispatch({
      type: "GET_PHOTOS_REQUEST",
      payload: year
    });

    if (cached) {
      const photos = makeYearPhotos(photosArr, year);
      dispatch({
        type: "GET_PHOTOS_SUCCESS",
        payload: photos
      });
    } else {
      getMorePhotos(0, 200, year, dispatch);
    }
  };
};
