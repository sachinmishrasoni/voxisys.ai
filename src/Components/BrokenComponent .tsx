
const BrokenComponent = () => {
  // Simulate an error
  throw new Error("This component has crashed!");

  return <div>Broken component</div>;
};

export default BrokenComponent;
