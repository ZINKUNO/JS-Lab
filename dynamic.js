const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const expensesList = document.getElementById('expenses-list');
const totalEl = document.getElementById('total');

let expenses = []; // Array to hold expense objects: {category: str, amount: num}
let totalSpent = 0;
const categoryColors = {
    'Food': '#ff6b6b',
    'Transport': '#4ecdc4',
    'Entertainment': '#45b7d1',
    'Other': '#96ceb4'
};

function getRandomAmount() {
    return Math.floor(Math.random() * 46) + 5; // $5-50
}

function addExpense(category, amount) {
    const expense = { category, amount };
    expenses.push(expense);
    totalSpent += amount;
    
    // Dynamic DOM creation: Add new expense entry
    const newEntry = document.createElement('div');
    newEntry.innerHTML = `<strong>${category}:</strong> $${amount} (Total now: $${totalSpent.toFixed(2)})`;
    expensesList.appendChild(newEntry);
    
    // Update total display
    totalEl.textContent = `Total Spent: $${totalSpent.toFixed(2)}`;
    
    // Innovative: Dynamically update page favicon with total (simple emoji hack)
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">\$${totalSpent.toFixed(0)}</text></svg>`;
    document.head.appendChild(link);
    
    drawChart(); // Redraw graphics
}

function drawChart() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Group by category for bars
    const categoryTotals = {};
    expenses.forEach(exp => {
        categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
    });
    
    const categories = Object.keys(categoryTotals);
    const maxAmount = Math.max(...Object.values(categoryTotals), 1);
    const barWidth = canvas.width / categories.length;
    let x = 0;
    
    categories.forEach(cat => {
        const height = (categoryTotals[cat] / maxAmount) * 200;
        ctx.fillStyle = categoryColors[cat];
        ctx.fillRect(x, canvas.height - height, barWidth - 5, height);
        
        // Labels
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.fillText(cat, x + 5, canvas.height - 5);
        ctx.fillText(`$${categoryTotals[cat]}`, x + 5, canvas.height - height - 5);
        
        x += barWidth;
    });
    
    // Title
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.fillText('Expense Breakdown', 10, 20);
}

// Initial empty chart
drawChart();