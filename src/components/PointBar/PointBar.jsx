import './PointBar.css';

function PointBar({ label, value, max = 8, onChange }) {
  const handleDecrement = () => {
    if (value > 0) onChange(value - 1);
  };
  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  // Renderiza os pontos como "OOOOO.OOO"
  const renderPoints = () => {
    let points = '';
    for (let i = 0; i < value; i++) points += 'O';
    for (let i = value; i < max; i++) points += '·';
    // Insere o ponto separador após 5 pontos
    if (max === 8) {
      return points.slice(0,5) + '.' + points.slice(5);
    }
    return points;
  };

  return (
    <div className="point-bar">
      <span className="point-label">{label}</span>
      <div className="point-controls">
        <button onClick={handleDecrement} className="point-btn">-</button>
        <span className="point-value">{renderPoints()}</span>
        <button onClick={handleIncrement} className="point-btn">+</button>
      </div>
    </div>
  );
}

export default PointBar;