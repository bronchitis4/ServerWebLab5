// import admin from 'firebase-admin';
// import serviceAccount from './OnlineItCourses.json' with { type: "json" };;

// admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
// export const db = admin.firestore();
import dotenv from 'dotenv';
import admin from 'firebase-admin';

dotenv.config();

const serviceAccount = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


export const db = admin.firestore();
// // import admin from 'firebase-admin';
// // import dotenv from 'dotenv';
// // dotenv.config();

// // const serviceAccount = {
// //   type: process.env.FIREBASE_TYPE,
// //   projectId: process.env.FIREBASE_PROJECT_ID,
// //   privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
// //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //   clientId: process.env.FIREBASE_CLIENT_ID,
// //   authUri: process.env.FIREBASE_AUTH_URI,
// //   tokenUri: process.env.FIREBASE_TOKEN_URI,
// //   authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
// //   clientX509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
// //   universeDomain: process.env.FIREBASE_UNIVERSE_DOMAIN,
// // };

// // admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// export const db = admin.firestore();