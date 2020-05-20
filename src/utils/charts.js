export const formatToChartData = (data = {}) => Object.entries(data).map(([x, y]) => ({ x, y }));
