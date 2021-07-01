import React from 'react';
import { render, screen } from '@testing-library/react';
import { Page } from '../app/view/components/Page';
import { getPhotos } from '../app/redux/actions/PageActions';

describe('Page', () => {
  it('Photos not loading', () => {
    render(
      <Page
        year={0}
        photos={[]}
        isFetching={false}
        error={''}
        years={[2021, 2020, 2019, 2018, 2017]}
        getPhotos={() => getPhotos}
      />,
    );
    expect(screen.queryByText(/0 год/)).toBeNull();
    expect(screen.getByText(/год/)).toBeInTheDocument();
    expect(screen.getByText(/2021/)).toBeInTheDocument();
    expect(screen.getByText(/2020/)).toBeInTheDocument();
    expect(screen.getByText(/2019/)).toBeInTheDocument();
    expect(screen.getByText(/2018/)).toBeInTheDocument();
    expect(screen.getByText(/2017/)).toBeInTheDocument();
    expect(screen.getAllByRole('button').length === 5);
  });

  it('Photos loading', () => {
    render(
      <Page
        year={2017}
        photos={[]}
        isFetching={true}
        error={''}
        years={[2021, 2020, 2019, 2018, 2017]}
        getPhotos={() => getPhotos}
      />,
    );
    expect(screen.getByText(/Загрузка.../)).toBeInTheDocument();
    expect(screen.getByText(/2017 год/)).toBeInTheDocument();
  });

  it('Photos not loaded', () => {
    render(
      <Page
        year={2017}
        photos={[]}
        isFetching={false}
        error={'X'}
        years={[2021, 2020, 2019, 2018, 2017]}
        getPhotos={() => getPhotos}
      />,
    );
    expect(screen.getByText(/2017 год/)).toBeInTheDocument();
    expect(
      screen.getByText(/Во время загрузки фото произошла ошибка/),
    ).toBeInTheDocument();
  });

  it('Photos loaded', () => {
    render(
      <Page
        year={2017}
        photos={[
          {
            id: 1,
            sizes: [
              { url: 'A' },
              { url: 'B' },
              { url: 'C' },
              { url: 'D' },
              { url: 'E' },
            ],
            likes: { count: 2 },
          },
          {
            id: 2,
            sizes: [
              { url: 'A' },
              { url: 'B' },
              { url: 'C' },
              { url: 'D' },
              { url: 'E' },
            ],
            likes: { count: 2 },
          },
          {
            id: 3,
            sizes: [
              { url: 'A' },
              { url: 'B' },
              { url: 'C' },
              { url: 'D' },
              { url: 'E' },
            ],
            likes: { count: 2 },
          },
        ]}
        isFetching={false}
        error={''}
        getPhotos={() => getPhotos}
        years={[2021, 2020, 2019, 2018, 2017]}
      />,
    );
    expect(screen.getByText('2017 год [3]')).toBeInTheDocument();
    expect(screen.getAllByAltText(/thumbnail vk/).length === 3);
  });
});
