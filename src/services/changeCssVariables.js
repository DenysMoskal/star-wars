export const changeCssVariables = (theme) => {
  const root = document.querySelector(':root');

  const cssVariables = ['header', 'image'];

  cssVariables.forEach((name) =>
    root.style.setProperty(
      `--theme-default-${name}`,
      `var(--theme-${theme}-${name})`,
    ),
  );
  // root.style.setProperty(
  //   '--theme-default-header',
  //   `var(--theme-${theme}-header)`,
  // );

  // root.style.setProperty(
  //   '--theme-default-image',
  //   `var(--theme-${theme}-image)`,
  // );
};
