export const isBrowser = typeof window !== "undefined";

export const getLocalState = (key: string) => {
  try {
    const serializedState = isBrowser ? localStorage.getItem(key) : null;
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(
      "Got error while trying to get local state \n",
      "check local-storage.ts file => getLocalState function line 1",
      error
    );
    return undefined;
  }
};

export const setLocalState = (key: string, value: any) => {
  try {
    const serializedState = JSON.stringify(value);
    if (isBrowser) {
      localStorage.setItem(key, serializedState);
    }
  } catch (error) {
    console.log(
      "Got error while trying to set local state \n",
      "check local-storage.ts file => setLocalState function line 18",
      error
    );
  }
};

export const removeLocalStateItem = (key: string) => {
  try {
    if (isBrowser) {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.log(
      `Got error while trying ${key} from remove local state \n`,
      "check local-storage.ts file => removeLocalStateItem function line 31",
      error
    );
  }
};

export const clearLocalState = () => {
  try {
    if (isBrowser) {
      localStorage.clear();
    }
  } catch (error) {
    console.log(
      "Got error while trying to clear local state \n",
      "check local-storage.ts file => clearLocalState function line 43",
      error
    );
  }
};
