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
        backgroundColor: '#3dd6bb',
        fill: false,
      },
      {
        label: "Tidak hadir",
        data: [5, 8, 12, 6, 10, 7, 9, 6],
        borderColor: '#ff3b3b',
        backgroundColor: '#ff3b3b',
        fill: false,
      },
      {
        label: "Cuti",
        data: [2, 4, 3, 2, 7, 5, 8, 9],
        borderColor: '#ffb800',
        backgroundColor: '#ffb800',
        fill: false,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { 
        position: 'bottom',
        labels: { 
          usePointStyle: true,
          pointStyle: "circle", 
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    }
  }
});

// Chart Pegawai
new Chart(document.getElementById('pegawaiChart'), {
  type: 'line',
  data: {
    labels: ["Januari", "Februari", "Maret"],
    datasets: [
      {
        label: "Keluar",
        data: [2, 1, 3],
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        fill: false,
      },
      {
        label: "Masuk",
        data: [5, 4, 6],
        borderColor: "#14b8a6",
        backgroundColor: "#14b8a6",
        fill: false,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { 
        position: "bottom",
        labels: { 
          usePointStyle: true,
          pointStyle: "circle", 
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    }
  }
});

// Chart Produktivitas
new Chart(document.getElementById('produktivitasChart'), {
  type: 'bar',
  data: {
    labels: ['IT', 'HR', 'Sales', 'OPS'],
    datasets: [
      {
        label: 'Target',
        data: [80, 60, 90, 70],
        backgroundColor: '#a7f3d0',
      },
      {
        label: 'Realisasi',
        data: [70, 30, 85, 60],
        backgroundColor: '#14b8a6',
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { 
      legend: { 
        position: "bottom",
        labels: { 
          usePointStyle: true,
          pointStyle: "circle", 
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  },
});
