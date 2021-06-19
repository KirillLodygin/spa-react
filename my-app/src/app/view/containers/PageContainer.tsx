import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../redux/actions/PageActions';
import { Page } from '../components/Page';
import { IAppState, IPageState, IDispatchPageProps } from '../../redux/types';
import { getLastYears } from '../utils';

const LAST_5_YEARS = 5;

const PageContainer: React.FC<IPageState & IDispatchPageProps> = ({
  year,
  photos,
  isFetching,
  error,
  getPhotos,
}) => {
  return (
    <Page
      year={year}
      photos={photos}
      isFetching={isFetching}
      error={error}
      getPhotos={getPhotos}
      years={getLastYears(LAST_5_YEARS)}
    />
  );
};

const mapStateToProps = ({ page }: IAppState) => ({
  year: page.year,
  error: page.error,
  isFetching: page.isFetching,
  photos: page.photos,
});

const mapDispatchToProps = (dispatch: any) => ({
  getPhotos: (year: number) => dispatch(getPhotos(year)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
