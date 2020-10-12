import { Component, OnInit } from "@angular/core";
import { Chart } from 'chart.js';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"],
})
export class DashboardComponent implements OnInit {
  private title = "Dashboard";

  chart: any;

  constructor() {}

  ngOnInit() {

    this.chart = new Chart('pastel', {
      type: 'pie',
      data: {
        labels: ['ISC','Ibformatica','Arquitectura'],
        datasets: [
          {
            label: 'Mi grafica 2',
            data: [1,3,5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            fill: true
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: 'Carreras qué solicitan libros!'
        },
        legend: {
          display: true
        }
      }
    });

    this.chart = new Chart('line', {
      type: 'line',
      data: {
        labels: ['a','b','c','d','f','g'],
        datasets: [
          {
            label: 'Mi grafica 2',
            data: [10,13,5,10,1,5],
            borderColor: 'blue',
            backgroundColor: 'red',
            fill: false
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: 'Historial de préstamos semanal'
        },
        legend: {
          display: false
        },
      }
    });

    this.chart = new Chart('bar', {
      type: 'bar',
      data: {
        labels: ['Terro', 'Politicas', 'Prograamacion', 'Arte', 'Finanzas', 'Matematicas'],
        datasets: [{
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
      }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: 'Libros más solicitados!'
        },
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontColor: 'black'
          }
        }
      }
    });


  }
}