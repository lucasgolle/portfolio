const lightTheme = {
    color: "#1C1C1C",
    backgroundColor: "#E8E4B8",
    header: {
      textColor: "#E8E4B8",
      backgroundColor: "#1C1C1C",
    },
  };
  
  // Objeto com a definição do estilo para o tema darkTheme
  const darkTheme = {
    color: "#E8E4B8",
    backgroundColor: "#1C1C1C",
    header: {
      textColor: "#1C1C1C",
      backgroundColor: "#E8E4B8",
    },
  };
  
  // Exportando as definições de estilo (lightTheme e darkTheme)
  // no objeto themes, que será usado na props theme do 
  // componente auxiliar <ThemeProvider>
  export const themes = {
    light: lightTheme,
    dark: darkTheme,
  };
  