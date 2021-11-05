const getCookie = (name: string): string | undefined => {
  const matches = document.cookie.match(
    // eslint-disable-next-line
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const setCookie = (name: string, value: string | number | boolean | null, isRemove = false): void => {
  document.cookie = `${name}=${value ? encodeURIComponent(value) : value};path=/; max-age=${isRemove ? 0 : 86400}`;
};

const removeCookie = (name: string): void => {
  setCookie(name, null, true);
};

export { getCookie, setCookie, removeCookie };
