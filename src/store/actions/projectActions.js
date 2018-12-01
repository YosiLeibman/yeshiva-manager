export const createProject = project => {
  return (dispacth, getState, { getFirebase, getFirestore }) => {
    // some async code
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispacth({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispacth({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
