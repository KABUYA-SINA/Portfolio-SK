import React, { useMemo } from 'react';
import { Radar } from 'react-chartjs-2';

import '../utils/chartSetup';

import data from '../data/ideas';
import details from '../data/tooltipDetails';

export default function Skills() {

  // ========================
  // CHART OPTIONS CONFIGURATION
  // ========================
  const options = useMemo(() => ({

    // ========================
    // RESPONSIVE BEHAVIOR
    // ========================
    responsive: true,
    maintainAspectRatio: false,

    // ========================
    // ANIMATION SETTINGS
    // ========================
    animation: {
      duration: 1500,
      easing: 'easeOutBounce'
    },

    // ========================
    // HOVER INTERACTION
    // ========================
    hover: {
      mode: 'nearest',
      intersect: true
    },

    // ========================
    // PLUGINS CONFIGURATION
    // ========================
    plugins: {

      // ========================
      // LEGEND STYLING
      // ========================
      legend: {
        labels: {
          color: '#ffffff',
          font: { size: 18, weight: '600' }
        }
      },

      // ========================
      // TOOLTIP CONFIGURATION
      // ========================
      tooltip: {
        callbacks: {
          title: (ctx) => ctx[0].label,
          label: (ctx) => details[ctx.label] || ''
        }
      }
    },

    // ========================
    // RADAR SCALE CONFIGURATION
    // ========================
    scales: {
      r: {

        // ========================
        // SCALE RANGE
        // ========================
        beginAtZero: true,
        min: 0,
        max: 10,

        // ========================
        // TICK STYLING
        // ========================
        ticks: {
          color: '#ffffff',
          backdropColor: 'transparent'
        },

        // ========================
        // POINT LABELS STYLING
        // ========================
        pointLabels: {
          color: '#ffffff'
        },

        // ========================
        // GRID STYLING
        // ========================
        grid: {
          color: 'rgba(255,255,255,0.15)'
        },

        // ========================
        // ANGLE LINES STYLING
        // ========================
        angleLines: {
          color: 'rgba(255,255,255,0.15)'
        }
      }
    }

  }), []);

  return (
    <div className="skills-wrapper">

      {/* ======================== */}
      {/* RADAR CHART */}
      {/* ======================== */}
      <Radar data={data} options={options} />
    </div>
  );
}