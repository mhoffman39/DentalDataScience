const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const csv = require('csv-parser')
// const fs = require('fs')

exports.handler = async (event, context) => {
  const results = [];

  const getFileFromS3 = async () => {
    const command = new GetObjectCommand({
      Bucket: event.Records[0].s3.bucket.name,
      Key: event.Records[0].s3.object.key
    });
    const s3Client = new S3Client({ region: "us-west-2" });
    const getFile = await s3Client.send(command);
    const stream = await getFile.Body;
    return stream;
  };

  try {
    const fileStream = await getFileFromS3();
    fileStream.pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
    });

    
    return {
      statusCode: 200,
      body: 'File parsed successfully'
    };
  } catch (error) {
    console.error('Error parsing file:', error);
    return {
      statusCode: 500,
      body: 'Error parsing file'
    };
  }
};