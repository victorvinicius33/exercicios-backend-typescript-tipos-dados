const productLabels = (
  list: {
    produto: string, 
    lote: number, 
    ano: number, 
    qtd: number }) => {
      const labels: string[] = [];

      const generateProductLabels = () => {
        for(let i = 1; i <= list.qtd; i++) {
          if (i < 10 && i > 0) {
            labels.push(`${list.lote}-${list.ano}-00${i}`);
          } else if (i < 100) {
            labels.push(`${list.lote}-${list.ano}-0${i}`);
          } else if (i >= 100) {
            labels.push(`${list.lote}-${list.ano}-${i}`);
          }
        }
      }

      generateProductLabels();

      return labels;
}

const list = 
  {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

console.log(productLabels(list));
