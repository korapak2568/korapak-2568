import AWS from 'aws-sdk';

export const uploadFile = async (file: { type: any; }, filePath: any) => {

    if (!process.env.DO_SPACE_NAME || !process.env.DO_CDN_URL) {
        return null
    }

    const spacesEndpoint = new AWS.Endpoint(process.env.DO_CDN_URL);
    const s3 = new AWS.S3({
        endpoint: spacesEndpoint,
        accessKeyId: process.env.DO_ACCESS_KEY,
        secretAccessKey: process.env.DO_SECRET_KEY,
    });

    const params = {
        Bucket: process.env.DO_SPACE_NAME,
        Key: filePath,
        Body: file,
        ACL: 'public-read',
        ContentType: file.type,
    };

    return s3.upload(params).promise();
};