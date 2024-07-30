import app from './init';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import bcrypt from 'bcrypt';

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retriveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(collectionName: string, userData: { email: string }) {
  const q = query(collection(firestore, collectionName), where('email', '==', userData.email));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    const user = data[0];
    return user;
  } else {
    return null;
  }
}

export async function signInWithGoogle(userData: any, callbak: any) {
  const q = query(collection(firestore, 'users'), where('email', '==', userData.email));
  const snapshot = await getDocs(q);
  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    userData.role = data[0].role;
    await updateDoc(doc(firestore, 'users', data[0].id), userData).then(() => {
      callbak({
        status: true,
        message: 'Sign in with google success',
        data: userData,
      });
    });
  } else {
    userData.role = 'member';
    await addDoc(collection(firestore, 'users'), userData).then(() => {
      callbak({
        status: true,
        message: 'Sign in with google success',
        data: userData,
      });
    });
  }
}
export async function registerUser(collectionName: string, userData: User, callbak: Function) {
  const q = query(collection(firestore, collectionName), where('email', '==', userData.email));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callbak({ status: 400, message: 'User already exists' });
    return;
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = 'user';
    await addDoc(collection(firestore, collectionName), userData)
      .then(() => {
        callbak({ status: 200, message: 'User created' });
      })
      .catch((error) => {
        callbak({ status: 400, message: error });
      });
  }
}
