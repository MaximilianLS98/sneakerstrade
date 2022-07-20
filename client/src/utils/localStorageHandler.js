export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('sneakers');
      const persState = { sneakers: JSON.parse(serializedState) };
      if (serializedState === null) {
        return undefined;
      }
      return persState;
      // return JSON.parse(persState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = state => {
    try {
      const serializedState = JSON.stringify(state.sneakers.sneakers);
      localStorage.setItem(serializedState);
    } catch (err) {
      return undefined;
    }
    return null;
  };
  