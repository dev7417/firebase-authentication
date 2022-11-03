import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import  'firebase/compat/auth';
import 'firebase/compat/storage'
import Config from './Config';

firebase.initializeApp(Config)
const auth = firebase.auth();
const db = firebase.firestore()
const storage = firebase.storage();

export {auth, db, storage}