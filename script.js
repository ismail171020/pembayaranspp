// Function untuk mensimulasikan pengambilan data
function fetchData() {
    return {
        totalSales: "15,200",
        newUsers: "1,450",
        websiteVisits: "85,123"
    };
}

// Function untuk mengupdate konten dashboard
function updateDashboard() {
    const data = fetchData();
    
    document.getElementById("total-sales").textContent = data.totalSales;
    document.getElementById("new-users").textContent = data.newUsers;
    document.getElementById("website-visits").textContent = data.websiteVisits;
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateDashboard);