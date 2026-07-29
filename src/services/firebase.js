import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const submitContactMessage = async ({ name, email, message }) => {
  await addDoc(collection(db, 'contacts'), {
    // fields for Firestore Trigger Email extension
    to: 'adwaithdeva@gmail.com',
    replyTo: email,
    message: {
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:24px;background:#f8fafc;border-radius:12px;">
          <h2 style="color:#2563eb;margin-bottom:4px;">New Portfolio Message</h2>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin-bottom:16px;"/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background:#fff;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">${message}</p>
        </div>
      `,
    },
    // metadata saved for your records
    senderName: name,
    senderEmail: email,
    createdAt: serverTimestamp(),
  })
}
