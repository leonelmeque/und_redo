export const UpdatesSection = ({ updates }) => {
  return (
    <div className="updates-section">
      <h3>Recent Updates</h3>
      <br />
      {updates.length === 0 ? (
        <p>No items to show</p>
      ) : (
        <>
          {updates.map(({ snapshot, id }) => (
            <li key={id}>{snapshot}</li>
          ))}
        </>
      )}
    </div>
  );
};
