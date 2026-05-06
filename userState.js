const state = {
  user: null,
};

const listeners = new Set();

export function getUserState() {
  return state.user;
}

export function setUserState(user) {
  state.user = user;
  listeners.forEach((listener) => {
    try {
      listener(user);
    } catch (error) {
      console.error('userState listener error:', error);
    }
  });
}

export function subscribeToUserState(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('subscribeToUserState expects a function');
  }
  listeners.add(listener);
  return () => listeners.delete(listener);
}
