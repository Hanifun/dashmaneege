lucide.createIcons();

// Chart Kehadiran
new Chart(document.getElementById('kehadiranChart'), {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags"],
    datasets: [
      {
        label: "Hadir",
        data: [129, 120, 110, 125, 115, 130, 120, 118],
        borderColor: '#3dd6bb',
        backgroundColor: 'rgba(61,214,187,0.1)',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#3dd6bb',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: "Tidak hadir",
        data: [5, 8, 12, 6, 10, 7, 9, 6],
        borderColor: '#ff3b3b',
        backgroundColor: 'rgba(255,59,59,0.1)',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#ff3b3b',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: "Cuti",
        data: [2, 4, 3, 2, 7, 5, 8, 9],
        borderColor: '#ffb800',
        backgroundColor: 'rgba(255,184,0,0.1)',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#ffb800',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 14,
            family: 'inherit',
            weight: 'bold',
          },
          color: '#3d3d3d',
          padding: 20,
          boxWidth: 6,
          boxHeight: 6,
          boxPadding: 10,
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: '#e5f5f0',
          borderColor: '#e5f5f0',
          drawBorder: false,
        },
        ticks: {
          color: '#3d3d3d',
          font: {
            size: 14,
            family: 'inherit',
          }
        }
      },
      y: {
        grid: {
          color: '#e5f5f0',
          borderColor: '#e5f5f0',
          drawBorder: false,
        },
        ticks: {
          color: '#3d3d3d',
          font: {
            size: 14,
            family: 'inherit',
          }
        }
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

//chart pegawai
new Chart(document.getElementById('pegawaiChart'), {
  type: 'line',
  data: {
    labels: ["Januari", "Februari", "Maret"],
    datasets: [
      {
        label: "Keluar",
        data: [2, 1, 3],
        borderColor: "#ef4444",  // merah
        backgroundColor: "#fff",
        borderWidth: 2,
        pointBackgroundColor: "#fff",   // titik putih
        pointBorderColor: "#ef4444",    // outline merah
        pointBorderWidth: 2,
        tension: 0.3
      },
      {
        label: "Masuk",
        data: [5, 4, 6],
        borderColor: "#14b8a6",  // hijau teal
        backgroundColor: "#fff",
        borderWidth: 2,
        pointBackgroundColor: "#fff",   // titik putih
        pointBorderColor: "#14b8a6",    // outline hijau
        pointBorderWidth: 2,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12,
            family: 'inherit',
            weight: 'normal',
          },
          color: '#3d3d3d',
          padding: 10,
          boxWidth: 6,
          boxHeight: 6,
          boxPadding: 8,
        }
      }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return Number.isInteger(value) ? value : '';
          },
          color: '#3d3d3d',
          font: {
            size: 12,
            family: 'inherit',
          }
        },
        grid: {
          color: '#e5f5f0',
          borderColor: '#e5f5f0',
          drawBorder: false,
        }
      },
      x: {
        ticks: {
          color: '#3d3d3d',
          font: {
            size: 12,
            family: 'inherit',
          }
        },
        grid: {
          color: '#e5f5f0',
          borderColor: '#e5f5f0',
          drawBorder: false,
        }
      }
    }
  }
});
// Chart Produktivitas per Divisi
new Chart(document.getElementById('produktivitasChart'), {
  type: 'bar',
  data: {
    labels: ['IT', 'HR', 'Sales', 'OPS'],
    datasets: [
      {
        label: 'Target',
        data: [80, 60, 90, 70],
        backgroundColor: '#a7f3d0', // warna lembut seperti di pegawaiChart
        borderRadius: 6,
      },
      {
        label: 'Realisasi',
        data: [70, 30, 85, 60],
        backgroundColor: '#14b8a6', // warna hijau teal utama
        borderRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12,
            family: "inherit",
            weight: "normal",
          },
          color: "#3d3d3d",
          padding: 10,
          boxWidth: 6,
          boxHeight: 6,
          boxPadding: 8,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#e5f5f0",
          borderColor: "#e5f5f0",
          drawBorder: false,
        },
        ticks: {
          color: "#3d3d3d",
          font: {
            size: 12,
            family: "inherit",
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5f5f0",
          borderColor: "#e5f5f0",
          drawBorder: false,
        },
        ticks: {
          color: "#3d3d3d",
          font: {
            size: 12,
            family: "inherit",
          },
          callback: function (value) {
            return Number.isInteger(value) ? value : "";
          },
        },
      },
    },
  },
});



