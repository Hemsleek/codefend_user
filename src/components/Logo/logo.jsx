function Logo({ theme }) {
  const handleLogo = () => {
    if (theme == "light") {
      return <img src="/src/assets/logo-light.svg" />;
    } else {
      return <img src="/src/assets/logo-dark.svg" />;
    }
  };

  return (
    <>
      <div id="brand" className="brand">{handleLogo}</div>
    </>
  );
}

export default Logo;
