function minTimeToVisitAllPoints(points) {
  let time = 0; // Inicializa el contador de tiempo.

  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i]; // Coordenadas del punto actual.
    const [x2, y2] = points[i + 1]; // Coordenadas del siguiente punto.

    // Calcula las diferencias absolutas entre las coordenadas.
    const xDiff = Math.abs(x2 - x1);
    const yDiff = Math.abs(y2 - y1);

    // El tiempo para ir de un punto a otro es el máximo de las diferencias
    // de coordenadas, ya que es posible moverse diagonalmente.
    time += Math.max(xDiff, yDiff);
  }

  return time; // Retorna el tiempo total.
}
