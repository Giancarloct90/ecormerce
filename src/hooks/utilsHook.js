export const getData = async (url) => {
  try {
    const dataFetch = await fetch(url);
    const dataJson = await dataFetch.json();
    if (!dataJson) {
      return { ok: false, message: "errors UtilsHooks" };
    }
    return {
      ok: true,
      apiData: dataJson,
    };
  } catch (e) {
    console.log("error UtilsHook", e);
    return { ok: false, message: "errors UtilsHooks" };
  }
};
