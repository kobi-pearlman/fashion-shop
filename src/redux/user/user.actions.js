import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../components/firebase/firebase.utils";
import { UserActionTypes } from "./user.types";



const getSnapshotFromUser = (userAuth, additionalData) => {

  return async dispatch => {
    try {
      const userRef = await createUserProfileDocument(userAuth, additionalData)
      userRef.onSnapshot(snapshot => {
        dispatch(signInSuccess({ id: snapshot.id, ...snapshot.data() }))
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
  }
}

const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signInWithEmail = (email, password) => {

  return async dispatch => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password)
      dispatch(signInSuccess(user))
    } catch (error) { console.log(error) }
  }
}

export const signInWithGoogle = () => {
  return async dispatch => {
    try {
      const { user } = await auth.signInWithPopup(googleProvider);
      dispatch(signInSuccess(user))
    } catch (error) { console.log(error) }
  }
}

export const signOut = () => {
  return async dispatch => {
    await auth.signOut()
    dispatch(signOutSuccess())
  }
}

export const signUpWithEmail = ({ email, password, displayName }) => {
  return async dispatch => {

    const { user } = await auth.createUserWithEmailAndPassword(email, password)

    dispatch(getSnapshotFromUser(user, { displayName }))
  }
}

export const checkUserSession = () => {
  return dispatch => {
    getCurrentUser().then(userAuth => {
      if (!userAuth) return;
      dispatch(getSnapshotFromUser(userAuth))

    })

  }
}
