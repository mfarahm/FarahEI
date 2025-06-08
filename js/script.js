// العد التنازلي للمناقشة
document.addEventListener('DOMContentLoaded', function() {
    // تاريخ المناقشة: 18 فبراير 2026 الساعة 11:00 صباحًا
    const discussionDate = new Date('February 18, 2026 11:00:00').getTime();
    
    // تحديث العد التنازلي كل ثانية
    const countdown = setInterval(function() {
        // الوقت الحالي
        const now = new Date().getTime();
        
        // الفرق بين الوقت الحالي وتاريخ المناقشة
        const distance = discussionDate - now;
        
        // حساب الأيام والساعات والدقائق والثواني
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // عرض النتيجة في العناصر المناسبة
        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
        
        // إذا انتهى العد التنازلي
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
            
            // إضافة رسالة بدء المناقشة
            const countdownElement = document.getElementById('countdown-timer');
            const messageElement = document.createElement('div');
            messageElement.className = 'discussion-started';
            messageElement.innerHTML = 'بدأت المناقشة!';
            countdownElement.parentNode.appendChild(messageElement);
        }
    }, 1000);
    
    // إضافة عناصر الذكاء الاصطناعي المتحركة
    const mainContent = document.querySelector('.main-content');
    
    for (let i = 1; i <= 4; i++) {
        const aiElement = document.createElement('div');
        aiElement.className = `ai-element ai-element-${i}`;
        mainContent.appendChild(aiElement);
    }
    
    // إضافة عناصر النمط الإسلامي
    for (let i = 1; i <= 4; i++) {
        const islamicPattern = document.createElement('div');
        islamicPattern.className = `islamic-pattern islamic-pattern-${i}`;
        mainContent.appendChild(islamicPattern);
    }
    
    // وظائف مشاركة الإعلان
    window.shareOnFacebook = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank');
    };
    
    window.shareOnTwitter = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
    };
    
    window.shareOnWhatsApp = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://api.whatsapp.com/send?text=${title} ${url}`, '_blank');
    };
    
    window.shareOnLinkedIn = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    };
    
    window.shareOnTelegram = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://t.me/share/url?url=${url}&text=${title}`, '_blank');
    };
});
