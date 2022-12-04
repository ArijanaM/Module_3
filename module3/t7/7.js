'use strict';

const trigger = document.getElementById('trigger')
const img = document.querySelector('img')

const hover = () => img.src = 'img/picB.jpg'
const noHover = () => img.src = 'img/picA.jpg'

trigger.addEventListener('mouseover', hover)
trigger.addEventListener('mouseleave', noHover)