'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Начальные координаты
  var x = 100;
  var y = 10;
  // Шаг смещения
  var offset = 10;

  // Размер облака
  var cloud = {'w': 420, 'h': 270};

  // Рисуем тень и облако
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + offset, y + offset, cloud['w'], cloud['h']);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(x, y, cloud['w'], cloud['h']);

  // Добавляем надписи
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = 'normal 16px PT Mono';
  ctx.fillText('Ура вы победили!', x + offset * 5, y + offset * 2);
  ctx.fillText('Список результатов:', x + offset * 5, y + offset * 4);

  // Координаты гистограммы
  var x1 = x + offset * 5;
  var y1 = y + offset * 8;


  // Параметры гистограммы
  var hmax = 150;
  var w = 40;
  var l = 50;

  // Цвет столбца
  var color = function (name) {
    return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + Math.random() + ')';
  };

  var i = 0;
  while (names[i]) {
    // Расчет высоты столбца
    var h = (times[i] * hmax) / Math.max.apply(null, times);

    // Рисуем кол-во очков
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = 'normal 16px PT Mono';
    ctx.fillText((~~times[i]).toString(), x1 + i * (w + l), y1 + hmax - h - offset);

    // Рисуем столбец
    ctx.fillStyle = color(names[i]);
    ctx.fillRect(x1 + i * (w + l), y1 + hmax - h, w, h);

    // Рисуем имя игрока
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], x1 + i * (w + l), x + hmax + offset);

    i++;
  }
};
