function stackHeight3d(layers) {
    if (layers === 0) return 0.0;
    return 1 + (layers - 1) * Math.sqrt(2) / 2;
}