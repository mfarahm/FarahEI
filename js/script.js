// العد التنازلي للمناقشة
document.addEventListener('DOMContentLoaded', function() {
    // تاريخ المناقشة: 18 فبراير 2026 الساعة 11 صباحًا
    const discussionDate = new Date('February 18, 2027 11:00:00').getTime();
    
    // تحديث العد التنازلي كل ثانية
    const countdownTimer = setInterval(function() {
        const now = new Date().getTime();
        const distance = discussionDate - now;
        
        // حساب الأيام والساعات والدقائق والثواني
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // عرض العد التنازلي
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
        
        // إذا انتهى العد التنازلي
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown-timer').innerHTML = '<p class="completed">تمت المناقشة بنجاح!</p>';
        }
    }, 1000);
});

// مشاركة الإعلان عبر وسائل التواصل الاجتماعي
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('مناقشة رسالة دكتوراه - محمد فرح محمد متولي');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('مناقشة رسالة دكتوراه - محمد فرح محمد متولي');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('مناقشة رسالة دكتوراه - محمد فرح محمد متولي');
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
}

function shareOnTelegram() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('مناقشة رسالة دكتوراه - محمد فرح محمد متولي');
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('مناقشة رسالة دكتوراه - محمد فرح محمد متولي');
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
}
