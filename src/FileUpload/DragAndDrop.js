import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { parseCsv } from './FileUploadUtils';

export default function DragAndDrop () {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    // console.log(files);
    parseCsv(files)
  };
  
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <Box
      sx={{
        border: 2,
        borderRadius:3,
        borderStyle: 'dashed',
        height: 100,
        minWidth: 205, 
        textAlign: 'center',
        
      }}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        type="file"
        hidden
      />
      <Typography variant="body1" color={dragging ? 'primary' : 'textSecondary'}>
        {dragging ? 'Drop files here' : 'Drag and drop files here, or click to select files'}
      </Typography>
    </Box>
  );
};


