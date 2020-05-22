export const tooltips = {
  intersect: false,
  mode: 'index',
  enabled: false,
  custom(tooltipModel) {
    let tooltipEl = document.getElementById('chartjs-tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.classList.add('m-tooltip');
      tooltipEl.id = 'chartjs-tooltip';
      tooltipEl.innerHTML = '<table></table>';
      document.body.appendChild(tooltipEl);
    }
    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }
    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltipModel.yAlign) {
      tooltipEl.classList.add(tooltipModel.yAlign);
    } else {
      tooltipEl.classList.add('no-transform');
    }
    function getBody(bodyItem) {
      return bodyItem.lines;
    }
    if (tooltipModel.body) {
      const bodyLines = tooltipModel.body.map(getBody);
      let innerHtml = '<tbody>';
      bodyLines.forEach((body, i) => {
        const [title, ...text] = String(body[0]).split(': ');
        const colors = tooltipModel.labelColors[i];
        const style = `background:${colors.borderColor}`;
        const span = `<span style="${style}" class="m-tooltip__span"></span>`;
        const titleTag = `<span class="m-tooltip__title">${title}</span>`;
        const valueTag = `<span class="m-tooltip__text">${text}</span>`;
        innerHtml += `<tr class="m-tooltip__tr"><td class="m-tooltip__td"><span class="m-tooltip__wrapper">${span}${titleTag}</span>${valueTag}</td></tr>`;
      });
      innerHtml += '</tbody>';

      const tableRoot = tooltipEl.querySelector('table');
      tableRoot.innerHTML = innerHtml;
    }
    const position = this._chart.canvas.getBoundingClientRect();
    tooltipEl.style.opacity = 1;
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = `${position.left + window.pageXOffset + tooltipModel.caretX + 20}px`;
    tooltipEl.style.top = `${position.top + window.pageYOffset + tooltipModel.caretY}px`;
    tooltipEl.style.pointerEvents = 'none';
  },
};
