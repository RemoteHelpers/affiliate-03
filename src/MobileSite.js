import AppBar from "./sections/AppBar";

function MobileSite({ sections }) {
  return (
    <div>
      <AppBar />
      {sections.map(({ section, name }) => (
        <div key={name}>{section}</div>
      ))}
    </div>
  );
}

export default MobileSite;
