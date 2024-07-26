interface FirebaseError extends Error {
  code: string;
}

const isFirebaseError = (error: unknown): error is FirebaseError => {
  return (error as FirebaseError).code !== undefined;
};

export const handleError = (error: unknown): Error => {
  let errorMessage = 'Something went wrong!';

  if (error instanceof Error && isFirebaseError(error)) {
    errorMessage = error.message;

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'User already exists with this email.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'The email address is not valid.';
        break;
      case 'auth/invalid-credential':
      case 'auth/operation-not-allowed':
        errorMessage = 'Email/password accounts are not enabled.';
        break;
      case 'auth/weak-password':
        errorMessage = 'The password is too weak.';
        break;
      default:
        errorMessage = error.message;
    }
  }
  return new Error(errorMessage);
};
