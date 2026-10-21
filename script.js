const translations = {
    ru: {
        nav_services: "Услуги",
        nav_reviews: "Отзывы",
        nav_contacts: "Контакты",
        hero_title: "Веб-студия Payidea",
        hero_subtitle: "Современные, адаптивные и безопасные сайты от профессиональной команды в Литве.",
        hero_btn: "Заказать проект",
        services_title: "Услуги и стоимость",
        card1_title: "Лендинг / Сайт-визитка",
        card1_price: "от €250",
        card1_desc: "Современный одностраничный сайт для эффективного представления вашего бизнеса, услуг и контактов.",
        card2_title: "Адаптивная верстка",
        card2_price: "от €80",
        card2_desc: "Преобразование дизайн-макетов в чистый код, оптимизированный для всех мобильных и настольных устройств.",
        card3_title: "Публикация и хостинг",
        card3_price: "от €40",
        card3_desc: "Развертывание вашего проекта на сервере, подключение пользовательского домена и настройка SSL.",
        reviews_title: "Отзывы клиентов",
        reviews_empty: "Отзывов пока нет. Станьте первым, кто поделится своим положительным опытом после работы с нами!",
        reviews_btn: "Оставить отзыв",
        contacts_title: "Связаться с Payidea",
        contacts_desc: "Готовы начать свой проект? Свяжитесь с нами через любой удобный канал:",
        btn_telegram: "Telegram",
        btn_email: "Email"
    },
    ua: {
        nav_services: "Послуги",
        nav_reviews: "Відгуки",
        nav_contacts: "Контакти",
        hero_title: "Веб-студія Payidea",
        hero_subtitle: "Сучасні, адаптивні та безпечні сайти від професійної команди в Литві.",
        hero_btn: "Замовити проєкт",
        services_title: "Послуги та вартість",
        card1_title: "Лендінг / Сайт-візитка",
        card1_price: "від €250",
        card1_desc: "Сучасний односторінковий сайт для ефективного представлення вашого бізнесу, послуг та контактів.",
        card2_title: "Адаптивна верстка",
        card2_price: "від €80",
        card2_desc: "Перетворення дизайн-макетів у чистий код, оптимізований для всіх мобільних та настільних пристроїв.",
        card3_title: "Публікація та хостинг",
        card3_price: "від €40",
        card3_desc: "Розгортання вашого проєкту на сервері, підключення користувацького домену та налаштування SSL.",
        reviews_title: "Відгуки клієнтів",
        reviews_empty: "Відгуків поки немає. Станьте першим, хто поділиться своїм позитивним досвідом після роботи з нами!",
        reviews_btn: "Залишити відгук",
        contacts_title: "Зв'язатися з Payidea",
        contacts_desc: "Готові почати свій проєкт? Зв'яжіться з нами через будь-який зручний канал:",
        btn_telegram: "Telegram",
        btn_email: "Email"
    },
    en: {
        nav_services: "Services",
        nav_reviews: "Reviews",
        nav_contacts: "Contacts",
        hero_title: "Payidea Web Studio",
        hero_subtitle: "Modern, responsive, and secure websites by a professional team in Lithuania.",
        hero_btn: "Order a Project",
        services_title: "Services & Pricing",
        card1_title: "Landing Page / Business Card",
        card1_price: "from €250",
        card1_desc: "A modern single-page website to showcase your business, services, and contacts effectively.",
        card2_title: "Responsive Layout",
        card2_price: "from €80",
        card2_desc: "Converting design layouts into clean code, optimized for all mobile and desktop devices.",
        card3_title: "Publishing & Hosting",
        card3_price: "from €40",
        card3_desc: "Deploying your project to a server, connecting a custom domain, and setting up SSL.",
        reviews_title: "Client Reviews",
        reviews_empty: "No reviews yet. Be the first one to share your positive experience after working with us!",
        reviews_btn: "Leave a Review",
        contacts_title: "Contact Payidea",
        contacts_desc: "Ready to start your project? Contact us through any convenient channel:",
        btn_telegram: "Telegram",
        btn_email: "Email"
    },
    lt: {
        nav_services: "Paslaugos",
        nav_reviews: "Atsiliepimai",
        nav_contacts: "Kontaktai",
        hero_title: "Payidea Web Studio",
        hero_subtitle: "Šiuolaikiškos, prisitaikančios ir saugios svetainės, sukurtos profesionalios komandos Lietuvoje.",
        hero_btn: "Užsisakyti projektą",
        services_title: "Paslaugos ir kainos",
        card1_title: "Nukreipimo puslapis / Vizitinė svetainė",
        card1_price: "nuo €250",
        card1_desc: "Šiuolaikiška vieno puslapio svetainė, skirta efektyviai pristatyti jūsų verslą, paslaugas ir kontaktus.",
        card2_title: "Prisitaikantis maketavimas",
        card2_price: "nuo €80",
        card2_desc: "Dizaino maketų pavertimas švariu kodu, optimizuotu visiems mobiliesiems ir staliniams įrenginiams.",
        card3_title: "Publikavimas ir priegloba",
        card3_price: "nuo €40",
        card3_desc: "Jūsų projekto patalpinimas serveryje, pasirinktinio domeno prijungimas ir SSL nustatymas.",
        reviews_title: "Klientų atsiliepimai",
        reviews_empty: "Atsiliepimų dar nėra. Būkite pirmas, pasidalinęs teigiama patirtimi po darbo su mumis!",
        reviews_btn: "Palikti atsiliepimą",
        contacts_title: "Susisiekti su Payidea",
        contacts_desc: "Pasiruošę pradėti savo projektą? Susisiekite su mumis bet kuriuo patogiu kanalu:",
        btn_telegram: "Telegram",
        btn_email: "El. paštas"
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

    // Обновляем состояние кнопок
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    // Находим кнопку, которая соответствует выбранному языку
    const activeButton = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}