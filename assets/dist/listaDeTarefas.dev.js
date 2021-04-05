"use strict";

var criarTarefa = function criarTarefa(evento) {
  evento.preventDefault();
  var input = document.querySelector('[data-form-input]');
  var valor = input.value;
  console.log(valor);
  input.value = " ";
};

var novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', novaTarefa);