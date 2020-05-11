class Storage {
  alias = {
    token: 'user-token',
  }

  setToken = (token) => !localStorage.setItem(this.alias.token, token);

  getToken = () => localStorage.getItem(this.alias.token);

  removeToken = () => !!localStorage.removeItem(this.alias.token);
}

export const storage = new Storage();
