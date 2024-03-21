
module.exports = ({ env }) => ({
    // ...
    // upload: {
    //   config: {
    //     provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
    //     providerOptions: {
    //       accessKeyId: env('AWS_ACCESS_KEY_ID'),
    //       secretAccessKey: env('AWS_ACCESS_SECRET'),
    //       region: env('AWS_REGION'),
    //       params: {
    //         ACL: env('AWS_ACL', 'public-read'), // 'private' if you want to make the uploaded files private
    //         Bucket: env('AWS_BUCKET'),
    //       },
    //     },
    //   },
    // },

    // email: {
    //     provider: env('EMAIL_PROVIDER'),
    //     providerOptions: {
    //       host: env('EMAIL_SMTP_HOST', 'smtp.example.com'),
    //       port: env('EMAIL_SMTP_PORT', 587),
    //       auth: {
    //         user: env('EMAIL_SMTP_USER'),
    //         pass: env('EMAIL_SMTP_PASS'),
    //       },
    //     },
    //     settings: {
    //       defaultFrom: env('EMAIL_ADDRESS_FROM'),
    //       defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
    //     },
    //   },
  });