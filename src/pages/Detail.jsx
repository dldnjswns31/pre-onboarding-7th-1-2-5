import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailFrame from '../components/Detail/DetailFrame';

const Detail = () => {
  const location = useLocation();
  const issue = location.state.issue;
  return <DetailFrame issue={issue} />;
};

export default Detail;
