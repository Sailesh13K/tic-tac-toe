const Button = ({ resetGame, text }) => {
  return <button onClick={resetGame}>{text || "New Game"}</button>;
};

export default Button;
