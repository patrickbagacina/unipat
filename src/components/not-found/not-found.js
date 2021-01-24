import React from 'react';
import PageTitle from '../page-title/page-title';

export class PageNotFound extends React.Component {
  render() {
    return (
      <div style={
        {
          width: '100%',
          textAlign: 'center',
          marginTop: '20vh'
        }
      }>
        <PageTitle title="Page Not Found" />
      </div>
    );
  }
}