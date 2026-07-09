(function () {
    const translations = {
        en: {
            'meta.title': 'Grupo Tepeyac',
            'preloader.text': 'Grupo Tepeyac',
            'menu.home': 'Home',
            'menu.history': 'Our History',
            'menu.contact': 'Our History',
            'menu.brands': 'Our Brands',
            'menu.contact_us': 'Contact',
            'hero.subtitle': 'Leading Agroindustrial Sustainability',
            'hero.title': 'Innovation that Feeds the Future',
            'hero.play': 'Play video',
            'history.title': 'Our History',
            'history.badge': '75 Years of Excellence',
            'history.lead': '<strong>Grupo Tepeyac</strong> is a proudly Mexican company with over 75 years of uninterrupted history, born with the firm conviction of working hand in hand with the producer. We are fully dedicated to serving the farmer, eliminating intermediaries to guarantee fair and direct treatment at every stage of the field.',
            'history.desc': 'Over the decades, we have transformed the challenges of the agro-industrial sector into development opportunities, driving the land with passion, respect and an unwavering commitment to the families that feed our country.',
            'pillars.title': 'Corporate Pillars',
            'pillar.mission.title': 'Mission',
            'pillar.mission.text': 'Offer the agricultural and industrial sector comprehensive solutions with talent and cutting-edge technology, contributing to food security with social responsibility.',
            'pillar.values.title': 'Values',
            'pillar.values.text': 'Integrity, teamwork, sustainability, reliability and continuous strengthening.',
            'pillar.vision.title': 'Vision 2030',
            'pillar.vision.text': 'We aspire to stand out globally for our strength, prestige, market presence and deep environmental commitment.',
            'bento.intro': 'We are a company dedicated to sustainable development through <span class="highlight-orange">technological innovation</span> and <span class="highlight-orange">direct field work</span>, creating comprehensive solutions for a stronger agroindustrial future.',
            'bento.vision.title': 'Vision',
            'bento.vision.text': 'We aspire to distinguish ourselves for our strength, prestige, global presence and environmental commitment, consolidating as leaders by 2030.',
            'bento.mission.title': 'Mission',
            'bento.mission.text': 'Provide the agricultural and industrial sector comprehensive solutions with talent and cutting-edge technology, actively contributing to food security.',
            'divisions.badge': 'Specialization & Vanguard',
            'divisions.title': 'Our Divisions',
            'divisions.porcicola.tab': 'Porcícola',
            'divisions.avicola.tab': 'Avícola',
            'divisions.agricola.tab': 'Agrícola',
            'divisions.comercial.tab': 'Comercial',
            'divisions.realestate.tab': 'Real Estate',
            'divisions.porcicola.heading': 'División Porcícola',
            'divisions.porcicola.brand': 'Porcícola Sterling',
            'divisions.porcicola.presence': 'Presence: Querétaro, Guanajuato and Hidalgo.',
            'divisions.porcicola.desc': 'Breeding and finishing of pigs.',
            'divisions.porcicola.metric1': 'Maternity and Gestation',
            'divisions.porcicola.metric2': 'Reproductive Sows',
            'divisions.porcicola.metric3': 'Piglets Annually',
            'divisions.porcicola.metric_highlight': '179,400 hogs (avg. 115kg)',
            'divisions.avicola.heading': 'División Avícola',
            'divisions.avicola.brand': 'Agropecuaria Sterlo',
            'divisions.avicola.presence': 'Presence: Querétaro and Guanajuato.',
            'divisions.avicola.desc': 'Breeding and finishing of chicken.',
            'divisions.avicola.metric1': 'Fattening Farms',
            'divisions.avicola.metric2': 'Annual Capacity',
            'divisions.avicola.metric_highlight': 'Total Annual Volume (avg. 3.6kg per bird)',
            'divisions.agricola.heading': 'División Agrícola',
            'divisions.agricola.subtitle': 'Integrated Agricultural Chain (Mexico & USA)',
            'divisions.agricola.hierva.title': 'Agrícola Hierva Santa',
            'divisions.agricola.hierva.desc': 'Presence in Qro. and Gto. Operates 5 ranches with 750 hectares yearly of export broccoli and other grains.',
            'divisions.agricola.hierva.brocoli': 'Broccoli: 1M boxes annually (9.1M kg).',
            'divisions.agricola.hierva.maiz': 'Corn: 17,000 Tons.',
            'divisions.agricola.hierva.zanahoria': 'Carrot: 10,080 Tons.',
            'divisions.agricola.hierva.apio': 'Celery: 2,750 Tons.',
            'divisions.agricola.hierva.cebolla': 'Onion: 2,500 Tons.',
            'divisions.agricola.stelo.title': 'Stelo',
            'divisions.agricola.stelo.subtitle': 'Querétaro Business Group',
            'divisions.agricola.stelo.desc': 'Packing plant where vegetables are cooled and packed for export to the United States.',
            'divisions.agricola.sterling.title': 'Sterling Fresh',
            'divisions.agricola.sterling.desc': 'Marketing and importing company located in the United States responsible for reception, broker placement and distribution of the horticultural catalogue.',
            'divisions.agricola.sterling.badge': 'USA MARKET RECEPTION',
            'divisions.comercial.heading': 'División Comercial',
            'divisions.comercial.brand': 'Niku Alimentos',
            'divisions.comercial.presence': 'Distribution centers: Mazatlán, Durango, Culiacán and Hermosillo | Presence in the Bajío.',
            'divisions.comercial.desc': 'With over 10 years of experience, dedicated to wholesale and retail meat commercialization and distribution (pork, beef, chicken and fish).',
            'divisions.comercial.highlight': 'Commercialized Monthly',
            'divisions.realestate.heading': 'División Real Estate',
            'divisions.realestate.brand': 'Headway',
            'divisions.realestate.presence': 'Headquarters: Querétaro, Mexico.',
            'divisions.realestate.desc': 'Real estate company focused on development and acquisition of industrial warehouses to support commercial growth.',
            'divisions.realestate.note': 'Locations and developments structured to capture nearshoring logistics in Mexico.',
            'division.tepeyac.title': 'Tepeyac Agropecuaria',
            'division.tepeyac.text': 'Swine, poultry and fresh export vegetables cultivated under strict food safety processes.',
            'division.innova.title': 'Innova',
            'division.innova.text': 'Top-level nutritional research, balanced formula development and technical advice.',
            'division.tarco.title': 'Tarco',
            'division.tarco.text': 'Architecture, design and avant-garde construction where aesthetics and humanism converge.',
            'division.lazaro.title': 'Lázaro Transportes',
            'division.lazaro.text': 'Specialized logistics and fleet to ensure safe, on-time and secure deliveries.',
            'people.badge': 'Human Capital',
            'people.title': 'The engine of our growth',
            'people.lead': 'At <strong>Grupo Tepeyac México</strong> we are proud of our staff and their talent, which is the true engine of our growth.',
            'people.text': 'Their daily work and commitment are fundamental to achieving the continuous development of our company.',
                'mosaic.tag1': 'Our people',
                'mosaic.h4_1': 'Daily commitment',
                'mosaic.tag2': 'Innovation',
                'mosaic.h4_2': 'Talent and Technology',
                'mosaic.tag3': 'Development',
                'mosaic.h4_3': 'Continuous Growth',
            'footer.company': 'Company',
            'footer.brands': 'Our Brands',
            'footer.divisions': 'Divisions',
            'footer.contact': 'Direct Contact',
            'footer.address': 'Mexico, CDMX',
            'footer.phone': '+52 (000) 000-0000',
            'footer.email': 'contacto@grupotepeyac.com.mx',
            'footer.copyright': '&copy; 2026 <strong>Grupo Tepeyac México</strong>. All rights reserved.',
            'btn.browse': 'Visit site',
            'btn.nextBrand': 'Next brand',
            'brand.yak.title': 'Yak Alimentos',
            'brand.yak.text': 'Leaders in meat distribution with presence across Mexico.',
            'brand.sterling.title': 'Sterling Fresh',
            'brand.sterling.text': 'Sterling Fresh drives a reliable supply chain for markets demanding consistency and quality.',
            'brand.inmuebles.title': 'Real Estate',
            'brand.inmuebles.text': 'Spaces, infrastructure and patrimonial vision to drive solid and sustainable projects.'
            ,
            'page.brands.title': 'Our Brands - Grupo Tepeyac'
        },
        es: {
            'meta.title': 'Grupo Tepeyac',
            'preloader.text': 'Grupo Tepeyac',
            'menu.home': 'Inicio',
            'menu.history': 'Nuestra historia',
            'menu.contact': 'Nuestra historia',
            'menu.brands': 'Nuestras marcas',
            'menu.contact_us': 'Contacto',
            'hero.subtitle': 'Vanguardia y Sustentabilidad Agroindustrial',
            'hero.title': 'Innovación que Alimenta al Futuro',
            'hero.play': 'Reproducir video',
            'history.title': 'Nuestra Historia',
            'history.badge': '75 Años de Grandeza',
            'history.lead': '<strong>Grupo Tepeyac</strong> es una empresa orgullosamente mexicana con más de 75 años de trayectoria ininterrumpida, nacida con la firme convicción de trabajar codo a codo con el productor. Nos dedicamos por completo al servicio del agricultor, eliminando intermediarios para garantizar un trato justo y directo en cada etapa del campo.',
            'history.desc': 'A lo largo de las décadas, hemos transformado los retos del sector agroindustrial en oportunidades de desarrollo, impulsando la tierra con pasión, respeto y un compromiso inquebrantable con las familias que alimentan a nuestro país.',
            'pillars.title': 'Pilares Corporativos',
            'pillar.mission.title': 'Misión',
            'pillar.mission.text': 'Ofrecer al sector agrícola e industrial soluciones integrales con talento y tecnología de vanguardia, contribuyendo a la seguridad alimentaria con responsabilidad social.',
            'pillar.values.title': 'Valores',
            'pillar.values.text': 'Integridad, trabajo en equipo, sostenibilidad, confiabilidad y fortalecimiento continuo.',
            'pillar.vision.title': 'Visión 2030',
            'pillar.vision.text': 'Aspiramos a distinguirnos globalmente por nuestra solidez, prestigio, presencia en el mercado y un profundo compromiso ambiental.',
            'bento.intro': 'Somos una empresa dedicada al desarrollo sustentable a través de la <span class="highlight-orange">innovación tecnológica</span> y el <span class="highlight-orange">trabajo directo en el campo</span>, creando soluciones integrales para un futuro agroindustrial más sólido.',
            'bento.vision.title': 'Visión',
            'bento.vision.text': 'Aspiramos a distinguirnos por nuestra solidez, prestigio, presencia global y compromiso ambiental, consolidándonos como líderes para el año 2030.',
            'bento.mission.title': 'Misión',
            'bento.mission.text': 'Ofrecer al sector agrícola e industrial soluciones integrales con talento y tecnología de vanguardia, contribuyendo activamente a la seguridad alimentaria.',
            'divisions.badge': 'Especialización y Vanguardia',
            'divisions.title': 'Nuestras Divisiones',
            'divisions.porcicola.tab': 'Porcícola',
            'divisions.avicola.tab': 'Avícola',
            'divisions.agricola.tab': 'Agrícola',
            'divisions.comercial.tab': 'Comercial',
            'divisions.realestate.tab': 'Real Estate',
            'divisions.porcicola.heading': 'División Porcícola',
            'divisions.porcicola.brand': 'Porcícola Sterling',
            'divisions.porcicola.presence': 'Presencia: Querétaro, Guanajuato e Hidalgo.',
            'divisions.porcicola.desc': 'Cría y engorda de cerdo.',
            'divisions.porcicola.metric1': 'Maternidad y Gestación',
            'divisions.porcicola.metric2': 'Vientres Reproductivos',
            'divisions.porcicola.metric3': 'Lechones Anuales',
            'divisions.porcicola.metric_highlight': '179,400 cerdos (115kg prom.)',
            'divisions.avicola.heading': 'División Avícola',
            'divisions.avicola.brand': 'Agropecuaria Sterlo',
            'divisions.avicola.presence': 'Presencia: Querétaro y Guanajuato.',
            'divisions.avicola.desc': 'Cría y engorda de pollo.',
            'divisions.avicola.metric1': 'De Engorda',
            'divisions.avicola.metric2': 'Capacidad al Año',
            'divisions.avicola.metric_highlight': 'Volumen Total Anual (3.6kg promedio por ave)',
            'divisions.agricola.heading': 'División Agrícola',
            'divisions.agricola.subtitle': 'Cadena Agrícola Integrada (México & USA)',
            'divisions.agricola.hierva.title': 'Agrícola Hierva Santa',
            'divisions.agricola.hierva.desc': 'Presencia en Qro. y Gto. Opera 5 ranchos con 750 hectáreas anuales de brócoli de exportación y otros granos.',
            'divisions.agricola.hierva.brocoli': 'Brócoli: 1M cajas anuales (9.1M kg).',
            'divisions.agricola.hierva.maiz': 'Maíz: 17,000 Toneladas.',
            'divisions.agricola.hierva.zanahoria': 'Zanahoria: 10,080 Toneladas.',
            'divisions.agricola.hierva.apio': 'Apio: 2,750 Toneladas.',
            'divisions.agricola.hierva.cebolla': 'Cebolla: 2,500 Toneladas.',
            'divisions.agricola.stelo.title': 'Stelo',
            'divisions.agricola.stelo.subtitle': 'Grupo Empresarial Queretano',
            'divisions.agricola.stelo.desc': 'Planta de empaque donde se enfrían o enhielan las hortalizas (brócoli y apio). Aquí se arman minuciosamente las cajas de 9.1 kilogramos bajo estrictas normativas fitosanitarias para su inmediata exportación a la Unión Americana.',
            'divisions.agricola.sterling.title': 'Sterling Fresh',
            'divisions.agricola.sterling.desc': 'Empresa comercializadora e importadora localizada físicamente en Estados Unidos. Es el eslabón final encargado de la recepción, posicionamiento de brokers y distribución de todo el catálogo hortofrutícola en el mercado estadounidense.',
            'divisions.agricola.sterling.badge': 'USA MARKET RECEPTION',
            'divisions.comercial.heading': 'División Comercial',
            'divisions.comercial.brand': 'Niku Alimentos',
            'divisions.comercial.presence': 'CEDIS: Mazatlán, Durango, Culiacán y Hermosillo | Presencia en el Bajío.',
            'divisions.comercial.desc': 'Con más de 10 años de experiencia, está dedicada a la comercialización y distribución de carne al por mayor y por menor (puerco, res, pollo y pescado), tanto nacional como internacional. Garantiza la máxima frescura y manejo idóneo enfocado en el sector comercial y gastronómico.',
            'divisions.comercial.highlight': 'Comercializadas Mensualmente',
            'divisions.realestate.heading': 'División Real Estate',
            'divisions.realestate.brand': 'Headway',
            'divisions.realestate.presence': 'Sede central: Querétaro, México.',
            'divisions.realestate.desc': 'Empresa inmobiliaria de vanguardia enfocada en el desarrollo y la adquisición de naves industriales. Su estrategia se centra en desplegar complejos de infraestructura en áreas sumamente competitivas del territorio nacional para potenciar el auge comercial del país.',
            'divisions.realestate.note': 'Ubicaciones y desarrollos perfectamente estructurados para capturar el nearshoring logístico en México.',
            'division.tepeyac.title': 'Tepeyac Agropecuaria',
            'division.tepeyac.text': 'Porcicultura, avicultura y vegetales frescos de exportación cultivados bajo rigurosos procesos de inocuidad.',
            'division.innova.title': 'Innova',
            'division.innova.text': 'Investigación nutricional de primer nivel, desarrollo de fórmulas balanceadas y asesoría técnica a terceros.',
            'division.tarco.title': 'Tarco',
            'division.tarco.text': 'Arquitectura, diseño y construcción vanguardista donde la estética y el humanismo se conjugan.',
            'division.lazaro.title': 'Lázaro Transportes',
            'division.lazaro.text': 'Logística y flotilla especializada de precisión para asegurar entregas seguras, a tiempo y blindadas.',
            'people.badge': 'Capital Humano',
            'people.title': 'El motor de nuestro crecimiento',
            'people.lead': 'En <strong>Grupo Tepeyac México</strong> estamos orgullosos de nuestro personal y su talento, el cual es el verdadero motor de nuestro crecimiento.',
            'people.text': 'Su trabajo y compromiso diario son fundamentales para lograr el desarrollo continuo de nuestra empresa.',
                'mosaic.tag1': 'Nuestra gente',
                'mosaic.h4_1': 'Compromiso diario',
                'mosaic.tag2': 'Innovación',
                'mosaic.h4_2': 'Talento y Tecnología',
                'mosaic.tag3': 'Desarrollo',
                'mosaic.h4_3': 'Crecimiento Continuo',
            'footer.company': 'Empresa',
            'footer.brands': 'Nuestras Marcas',
            'footer.divisions': 'Divisiones',
            'footer.contact': 'Contacto Directo',
            'footer.address': 'México, CDMX',
            'footer.phone': '+52 (000) 000-0000',
            'footer.email': 'contacto@grupotepeyac.com.mx',
            'footer.copyright': '&copy; 2026 <strong>Grupo Tepeyac México</strong>. Todos los derechos reservados.',
            'btn.browse': 'Navegar a la página',
            'btn.nextBrand': 'Siguiente marca',
            'brand.yak.title': 'Yak Alimentos',
            'brand.yak.text': 'Líderes en distribución cárnica con presencia en toda la República Mexicana.',
            'brand.sterling.title': 'Sterling Fresh',
            'brand.sterling.text': 'Sterling Fresh impulsa una cadena confiable de abastecimiento para mercados que exigen consistencia y calidad.',
            'brand.inmuebles.title': 'Inmuebles',
            'brand.inmuebles.text': 'Espacios, infraestructura y visión patrimonial para impulsar proyectos sólidos y sostenibles.'
            ,
            'page.brands.title': 'Nuestras marcas - Grupo Tepeyac'
        }
    };

    function applyLang(lang) {
        document.documentElement.lang = (lang === 'es') ? 'es-MX' : 'en-US';

        // translate innerHTML/value
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang] && translations[lang][key];
            if (text !== undefined) {
                if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
                    el.value = text;
                } else {
                    el.innerHTML = text;
                }
            }
        });

        // translate attributes defined in data-i18n-attr e.g. "alt:img.logo,aria-label:btn.next"
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const map = el.getAttribute('data-i18n-attr');
            if (!map) return;
            map.split(',').forEach(pair => {
                const parts = pair.split(':');
                if (parts.length !== 2) return;
                const attr = parts[0].trim();
                const key = parts[1].trim();
                const text = translations[lang] && translations[lang][key];
                if (text !== undefined) el.setAttribute(attr, text);
            });
        });

        document.querySelectorAll('.lang-link').forEach(a => a.classList.remove('active'));
        const active = document.querySelector('.lang-link[data-lang="' + lang + '"]');
        if (active) active.classList.add('active');

        try { localStorage.setItem('site_lang', lang); } catch (e) { }
    }

    function init() {
        document.querySelectorAll('.lang-link').forEach((a, i) => {
            if (!a.hasAttribute('data-lang')) {
                a.setAttribute('data-lang', i === 0 ? 'es' : 'en');
            }
            a.addEventListener('click', function (e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                applyLang(lang);
            });
        });

        const saved = (function () { try { return localStorage.getItem('site_lang'); } catch (e) { return null; } })();
        applyLang(saved === 'en' ? 'en' : 'es');
    }

    document.addEventListener('DOMContentLoaded', init);

    window.i18n = { translations: translations, applyLang: applyLang, init: init };
})();
