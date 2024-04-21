function ClickCounter({increment, count}) {

  return (
    <div>
        <button onClick={increment}>Click Me</button>
        <p>You clicked {count} times</p>
    </div>
  );
}