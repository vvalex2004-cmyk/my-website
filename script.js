const translations = {
    ru: {
        nav_services: "Услуги",
        nav_reviews: "Отзывы",
        nav_contacts: "Контакты",
        hero_title: "Создание и настройка веб-сайтов",
        hero_subtitle: "Адаптивные сайты под компьютеры и смартфоны от Vasyliev Oleksandr.",
        hero_btn: "Заказать проект",
        services_title: "Услуги и стоимость",
        card1_title: "Сайт-визитка / Landing Page",
        card1_price: "от €150",
        card1_desc: "Современный одностраничный сайт с информацией о ваших услугах и контактами.",
        card2_title: "Адаптивная верстка",
        card2_price: "от €80",
        card2_desc: "Перенос макета в код и полная оптимизация под мобильные устройства.",
        card3_title: "Публикация и хостинг",
        card3_price: "от €40",
        card3_desc: "Размещение проекта на GitHub Pages/Vercel и настройка домена.",
        reviews_title: "Отзывы клиентов",
        reviews_empty: "Здесь пока нет отзывов. Вы можете стать первым, кто оставит свой отзыв!",
        reviews_btn: "Оставить отзыв",
        contacts_title: "Связаться со мной",
        contacts_desc: "Обсудим ваш проект? Напишите мне в удобном мессенджере:",
        btn_telegram: "Написать в Telegram",
        btn_email: "Отправить Email"
    },
    ua: {
        nav_services: "Послуги",
        nav_reviews: "Відгуки",
        nav_contacts: "Контакти",
        hero_title: "Створення та налаштування веб-сайтів",
        hero_subtitle: "Адаптивні сайти під комп'ютери та смартфони від Vasyliev Oleksandr.",
        hero_btn: "Замовити проєкт",
        services_title: "Послуги та вартість",
        card1_title: "Сайт-візитка / Landing Page",
        card1_price: "від €150",
        card1_desc: "Сучасний односторінковий сайт з інформацією про ваші послуги та контактами.",
        card2_title: "Адаптивна верстка",
        card2_price: "від €80",
        card2_desc: "Перенесення макету в код та повна оптимізація під мобільні пристрої.",
        card3_title: "Публікація та хостинг",
        card3_price: "від €40",
        card3_desc: "Розміщення проєкту на GitHub Pages/Vercel та налаштування домену.",
        reviews_title: "Відгуки клієнтів",
        reviews_empty: "Тут поки немає відгуків. Ви можете стати першим, хто залишить свій відгук!",
        reviews_btn: "Залишити відгук",
        contacts_title: "Зв'язатися зі мною",
        contacts_desc: "Обговоримо ваш проєкт? Напишіть мені у зручному месенджері:",
        btn_telegram: "Написати в Telegram",
        btn_email: "Надіслати Email"
    },
    en: {
        nav_services: "Services",
        nav_reviews: "Reviews",
        nav_contacts: "Contacts",
        hero_title: "Website Creation & Setup",
        hero_subtitle: "Responsive websites for PC and smartphones by Vasyliev Oleksandr.",
        hero_btn: "Order a Project",
        services_title: "Services & Pricing",
        card1_title: "Business Card / Landing Page",
        card1_price: "from €150",
        card1_desc: "Modern single-page website with information about your services and contacts.",
        card2_title: "Responsive Layout",
        card2_price: "from €80",
        card2_desc: "Converting design layouts to code with full mobile device optimization.",
        card3_title: "Publishing & Hosting",
        card3_price: "from €40",
        card3_desc: "Deploying projects on GitHub Pages/Vercel and setting up custom domains.",
        reviews_title: "Client Reviews",
        reviews_empty: "No reviews yet. You can be the first to leave a review after our work!",
        reviews_btn: "Leave a Review",
        contacts_title: "Contact Me",
        contacts_desc: "Let's discuss your project! Write to me via your favorite messenger:",
        btn_telegram: "Message on Telegram",
        btn_email: "Send Email"
    },
    lt: {
        nav_services: "Paslaugos",
        nav_reviews: "Atsiliepimai",
        nav_contacts: "Kontaktai",
        hero_title: "Svetainių kūrimas ir konfigūravimas",
        hero_subtitle: "Pritaikytos svetainės kompiuteriams ir išmaniesiems telefonams iš Vasyliev Oleksandr.",
        hero_btn: "Užsakyti projektą",
        services_title: "Paslaugos ir kainos",
        card1_title: "Vizitinė svetainė / Landing Page",
        card1_price: "nuo €150",
        card1_desc: "Moderni vieno puslapio svetainė su informacija apie jūsų paslaugas ir kontaktais.",
        card2_title: "Pritaikytas maketavimas",
        card2_price: "nuo €80",
        card2_desc: "Maketo perkėlimas į kodą ir visiškas optimizavimas mobiliesiems įrenginiams.",
        card3_title: "Publikavimas ir priegloba",
        card3_price: "nuo €40",
        card3_desc: "Projekto patalpinimas GitHub Pages/Vercel ir domeno nustatymas.",
        reviews_title: "Klientų atsiliepimai",
        reviews_empty: "Atsiliepimų dar nėra. Galite būti pirmasis, palikęs atsiliepimą!",
        reviews_btn: "Palikti atsiliepimą",
        contacts_title: "Susisiekti su manimi",
        contacts_desc: "Aptarkime jūsų projektą! Parašykite man patogiu būdu:",
        btn_telegram: "Rašyti per Telegram",
        btn_email: "Siųsti el. laišką"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
}