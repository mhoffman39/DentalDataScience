import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

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
    console.log(files)
  };
  
  const prepareUpload = () => {
    console.log('clicked')
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Box
      sx={{
        border: 2,
        borderRadius:3,
        borderStyle: 'dashed',
        height: 100,
        width: 400,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Typography variant="body1" color={dragging ? 'textsecondary' : 'primary'}>
        {dragging ? 'Drop files here' : 'Drag and drop files here, or click to select files'}
      </Typography>
      <Button
        component="label"
        role={undefined}
        variant="text"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        onChange={prepareUpload}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
    </Box>
  );
};


