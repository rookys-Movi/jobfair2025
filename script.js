    // Initialize Animate on Scroll (AOS) library
    // This adds the fade-in effects as the user scrolls down the page.
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        once: true,    // Animation happens only once per element
        offset: 50,    // Trigger animation when element is 50px into the viewport
    });

    // --- Chart.js Configuration ---
    
    // Chart 1: Pie Chart for JLPT Levels
    // This visualizes the Japanese language proficiency of the student participants.
    const jlptCtx = document.getElementById('jlptPieChart').getContext('2d');
    const jlptPieChart = new Chart(jlptCtx, {
        type: 'pie',
        data: {
            labels: ['N1', 'N2', 'N3 and below'],
            datasets: [{
                label: 'JLPT Level Distribution',
                data: [45, 45, 10], // Example data: 45% N1, 45% N2, 10% other
                backgroundColor: [
                    '#00A99D', // Primary color for N1
                    '#00C7B7', // A lighter shade for N2
                    '#F7931E'  // Secondary color for accent
                ],
                borderColor: '#FDFCF7', // Matches the page background for a "cutout" look
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top', // Display the legend above the chart
                },
                tooltip: {
                    callbacks: {
                        // Customizes the tooltip to show a percentage
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Chart 2: Bar Chart for Student Majors
    // This shows the academic backgrounds of the participants.
    const majorCtx = document.getElementById('majorBarChart').getContext('2d');
    const majorBarChart = new Chart(majorCtx, {
        type: 'bar',
        data: {
            labels: ['IT/情報科学', '工学', '経済/経営', '国際関係', '人文科学'],
            datasets: [{
                label: 'Number of Students by Major',
                data: [65, 55, 70, 40, 30], // Example data for student counts
                backgroundColor: 'rgba(0, 169, 157, 0.7)', // Semi-transparent primary color
                borderColor: '#00A99D',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y', // Makes the bar chart horizontal for better readability of labels
            responsive: true,
            plugins: {
                legend: {
                    display: false // Hiding the legend as it's redundant for a single-dataset bar chart
                }
            },
            scales: {
                x: {
                    beginAtZero: true // Ensure the x-axis starts at 0
                }
            }
        }
    });