import React from 'react';
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => (
  <Container className="d-flex justify-content-center align-content-center">
    <div className="col-md-3 mx-3">
      <SkeletonTheme baseColor="#00A9D8" highlightColor="#f8f9f9">
        <Skeleton height={350} />
      </SkeletonTheme>
    </div>
    <div className="col-md-3 mx-3">
      <SkeletonTheme baseColor="#00A9D8" highlightColor="#f8f9f9">
        <Skeleton height={350} />
      </SkeletonTheme>
    </div>
    <div className="col-md-3 mx-3">
      <SkeletonTheme baseColor="#00A9D8" highlightColor="#f8f9f9">
        <Skeleton height={350} />
      </SkeletonTheme>
    </div>
  </Container>
);

export default SkeletonLoader;
