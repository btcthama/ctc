export function createAdminSidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-700 flex flex-col z-50';

    sidebar.innerHTML = `
        <div class="p-6">
            <h1 class="text-xl font-extrabold text-cyan-400 tracking-tight">CTC CAPITAL</h1>
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Admin Panel</p>
        </div>

        <nav class="flex-1 px-4 space-y-2">
            <a href="dashboard.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Dashboard
            </a>
            <a href="users.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
                User Management
            </a>
            <a href="messages.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Send Messages
            </a>
            <a href="deposits.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
                Deposits
            </a>
            <a href="admin-withdraw.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                Withdrawals
            </a>
            <a href="investments.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                Investments
            </a>
            <a href="kyc-review.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                KYC Review
            </a>
            <a href="reports.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Reports
            </a>
            <a href="logs.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Activity Logs
            </a>
            <a href="support.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Support
            </a>
            <a href="ticket-details.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Ticket Details
            </a>
            <a href="user-details.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                User Details
            </a>
            <a href="flags.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4a4 4 0 014-4h.582m-2.564-4.5A6.978 6.978 0 0115 9m0 0a9 9 0 01-9 9m9-9v9m0 0l9-9m-9 9H9"></path>
                </svg>
                Flags
            </a>
            <a href="stocks.html" class="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-semibold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Stocks
            </a>
        </nav>

        <div class="p-4 border-t border-slate-700">
            <a href="../app/dashboard.html" class="flex items-center gap-3 w-full p-3 text-slate-400 hover:bg-slate-800 rounded-xl font-bold text-sm transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to User Dashboard
            </a>
        </div>
    `;

    // Add active state to current page
    const currentPath = window.location.pathname.split('/').pop();
    const links = sidebar.querySelectorAll('a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('bg-slate-800', 'text-cyan-400');
            link.classList.remove('text-slate-400');
        }
    });

    return sidebar;
}

// Auto-initialize sidebar if container exists
document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('adminSidebar');
    if (sidebarContainer) {
        sidebarContainer.appendChild(createAdminSidebar());
    }
});
