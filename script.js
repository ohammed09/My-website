function showPage(pageId) {
    // إخفاء كل الصفحات
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // إظهار الصفحة المطلوبة
    document.getElementById(pageId).classList.add('active');
}

// عرض الصفحة الرئيسية عند تحميل الموقع
document.addEventListener("DOMContentLoaded", () => {
    showPage('home');
});