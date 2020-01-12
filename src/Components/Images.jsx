import React, { Fragment } from 'react';

import Tag from './Tag';
import SaveButton from './SaveButton';

const Images = ({ images, onSave }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
      }}
    >
      {images.length > 0 ? (
        images.map(img => (
          <Fragment key={img.id}>
            <div
              style={{
                border: '1px solid black',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '40%',
                }}
              >
                <img
                  alt={img.tags}
                  height="auto"
                  key={img.id}
                  src={img.largeImageURL}
                  style={{ border: '3px solid black' }}
                  width="100%"
                />
              </div>
              <div style={{ width: '60%' }}>
                <h3>Image Details</h3>
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  Tags:
                  {img.tags.split(',').map(tag => (
                    <Tag key={tag} tag={tag} />
                  ))}
                </div>
                <div style={{ margin: '5px' }}>Likes: {img.likes}</div>
                <div style={{ margin: '5px' }}>Favorites: {img.favorites}</div>
                <SaveButton
                  onSave={() => onSave({ url: img.largeImageURL, id: img.id })}
                />
              </div>
            </div>
          </Fragment>
        ))
      ) : (
        <h2>No Results Found</h2>
      )}
    </div>
  );
};

export default Images;
